import { useLazyQuery, useMutation } from '@apollo/client';
import { useEncryptCardData } from '@lib/hooks/useEncryptCard';
import { CreditCardFormType } from '@lib/interfaces/CreditCard';
import { ReserveNow } from '@lib/interfaces/Invoice';
import { getPaymentNotificationQuery } from '@lib/queries/creditCard';
import { reserveNowBuyLotQuery } from '@lib/queries/invoiceDetails';
import { createPaymentMethodQuery, createPaymentQuery, getPaymentMethodStatus } from '@lib/queries/Payment';
import { CookieService } from '@lib/storage/CookieService';
import { formCreatePaymentMethodObject } from '@views/Delivery/Delivery.service';
import { ContainerTypes } from '@views/MojitoCheckout/MojitoCheckOut.layout';
import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { useBilling } from './BillingProvider';
import { useContainer } from './ContainerStateProvider';
import { useDelivery } from './DeliveryProvider';

export interface PaymentData {
  creditCardData?: CreditCardFormType;
  wireData? : {
    accountNumber: string,
    routingNumber: string,
    bankAddress: {
      bankName: string;
      country: string;
    };
  };
  paymentId?: string;
  paymentType?: string;
  destinationAddress?: string;
  deliveryStatus?: string;
  sessionKey?: string;
}

export interface Payment {
  paymentInfo?: PaymentData;
  setPaymentInfo: (value: PaymentData) => void;
  onConfirmCreditCardPurchase:(deliveryAddress:string)=>void;
  onConfirmWireTransferPurchase:(deliveryAddress:string)=>void;
}
const PaymentContext = createContext<Payment>({} as Payment);

const PaymentProvider = ({ children }: { children?: React.ReactNode }) => {
  const [paymentInfo, setPaymentInfo] = useState<PaymentData>();


  const { billingInfo, collectionData, taxes } = useBilling();
  const { orgId, lotId, quantity, invoiceId } = useDelivery();
  const { setContainerState } = useContainer();
  const [createPaymentMethod] = useMutation(createPaymentMethodQuery);
  const [createPayment] = useMutation(createPaymentQuery);
  const [encryptCardData] = useEncryptCardData({ orgID: orgId });
  const [paymentMethodStatus] = useLazyQuery(getPaymentMethodStatus);
  const [paymentNotification] = useLazyQuery(getPaymentNotificationQuery);
  const [reserveNow] = useMutation(reserveNowBuyLotQuery);

  const getInvoiceData = useCallback(async () => {
    if (invoiceId) {
      return {
        invoiceID: invoiceId,
        items: [],
        status: '',
        __typename: 'BuyNowReserve',
      } as ReserveNow;
    }
    const reserveData = await reserveNow({
      variables: {
        input: {
          marketplaceBuyNowLotID: lotId,
          itemCount: quantity,
        },
      },
    });

    return reserveData?.data?.reserveMarketplaceBuyNowLot?.invoice as ReserveNow;
  }, [invoiceId, reserveNow, lotId, quantity]);

  const saveToCookies = useCallback((paymentData: PaymentData, reserveLotData:ReserveNow) => {
    CookieService.billing.setValue(JSON.stringify(billingInfo));
    CookieService.paymentInfo.setValue(JSON.stringify(paymentData));
    CookieService.taxes.setValue(JSON.stringify(taxes));
    CookieService.collectionData.setValue(JSON.stringify(collectionData));
    CookieService.reserveLotData.setValue(JSON.stringify(reserveLotData));
  }, [billingInfo, collectionData, taxes]);

  const onConfirmCreditCardPurchase = useCallback(async (deliveryAddress = '') => {
    try {
      console.log('deliveryAddress', deliveryAddress);
      const { keyID, encryptedCardData } = await encryptCardData({
        number: paymentInfo?.creditCardData?.isNew
          ? paymentInfo?.creditCardData?.cardNumber?.replace(/\s/g, '')
          : undefined,
        cvv: paymentInfo?.creditCardData?.cvv ?? '',
      });
      let paymentMethodId = paymentInfo?.creditCardData?.isNew
        ? undefined
        : paymentInfo?.creditCardData?.cardId;
      console.log('encryptedCardData', encryptedCardData);
      if (paymentInfo?.creditCardData?.isNew) {
        const inputData = formCreatePaymentMethodObject(
          orgId,
          paymentInfo,
          billingInfo,
          keyID,
          encryptedCardData,
        );
        const createPaymentMethodResult = await createPaymentMethod({
          variables: {
            orgID: orgId,
            input: inputData,
          },
        });
        paymentMethodId =
          createPaymentMethodResult?.data?.createPaymentMethod?.id;
        if (
          createPaymentMethodResult?.data?.createPaymentMethod?.status !==
          'complete'
        ) {
          await paymentMethodStatus({
            variables: {
              paymentMethodID: paymentMethodId,
            },
          });
        }
      }
      console.log('paymentMethodId', paymentMethodId);
      const reserveLotData = await getInvoiceData();
      console.log('reserveLotData', reserveLotData);

      if (paymentMethodId) {
        console.log('PAYMENT', paymentMethodId, {
          paymentMethodID: paymentMethodId,
          invoiceID: reserveLotData?.invoiceID,
          metadata: {
            destinationAddress: deliveryAddress,
            creditCardData: {
              keyID,
              encryptedData: encryptedCardData,
            },
          },
        });
        await createPayment({
          variables: {
            paymentMethodID: paymentMethodId,
            invoiceID: reserveLotData?.invoiceID,
            metadata: {
              destinationAddress: deliveryAddress,
              creditCardData: {
                keyID,
                encryptedData: encryptedCardData,
              },
            },
          },
        });
        const notificationData = await paymentNotification();
        const paymentData: PaymentData = {
          ...paymentInfo,
          paymentId: paymentMethodId,
          destinationAddress: deliveryAddress,
        };
        saveToCookies(paymentData, reserveLotData);

        window.location.href =
          notificationData?.data?.getPaymentNotification?.message?.redirectURL;
      }
    } catch (e) {
      console.error('ERROR', e);
    }
  }, [
    orgId,
    paymentInfo,
    billingInfo,
    paymentNotification,
    createPayment,
    createPaymentMethod,
    encryptCardData,
    paymentMethodStatus,
    getInvoiceData,
    saveToCookies,
  ]);

  const onConfirmWireTransferPurchase = useCallback(async (deliveryAddress = '') => {
    try {
      const inputData: any = {};
      const copiedBillingDetails = {
        ...billingInfo,
        district: billingInfo?.state,
        address1: billingInfo?.street1,
      };
      delete copiedBillingDetails.state;
      delete copiedBillingDetails.street1;
      delete copiedBillingDetails.email;
      delete copiedBillingDetails.phoneNumber;
      inputData.paymentType = 'Wire';
      inputData.wireData = {
        ...paymentInfo?.wireData,
        billingDetails: copiedBillingDetails,
      };
      const result = await createPaymentMethod({
        variables: {
          orgID: orgId,
          input: inputData,
        },
      });
      if (result?.data?.createPaymentMethod?.id) {
        if (result?.data?.createPaymentMethod?.status !== 'complete') {
          await paymentMethodStatus({
            variables: {
              paymentMethodID: result?.data?.createPaymentMethod?.id,
            },
          });
        }

        const reserveLotData = await getInvoiceData();

        const result1 = await createPayment({
          variables: {
            paymentMethodID: result?.data?.createPaymentMethod?.id,
            invoiceID: reserveLotData?.invoiceID,
            metadata: {
              destinationAddress: deliveryAddress,
            },
          },
        });
        const paymentData: PaymentData = {
          ...paymentInfo,
          deliveryStatus: result1?.data?.createPayment?.status,
          paymentId: result?.data?.createPaymentMethod?.id ?? '',
          destinationAddress: deliveryAddress,
        };
        setPaymentInfo(paymentData);
        saveToCookies(paymentData, reserveLotData);

        setContainerState(ContainerTypes.CONFIRMATION);
      }
    } catch (e) {
      console.error('ERROR', e);
    }
  }, [
    paymentInfo,
    billingInfo,
    orgId,
    paymentMethodStatus,
    setContainerState,
    setPaymentInfo,
    createPaymentMethod,
    createPayment,
    getInvoiceData,
    saveToCookies,
  ]);


  const values = useMemo<Payment>(() => {
    return {
      paymentInfo,
      setPaymentInfo,
      onConfirmCreditCardPurchase,
      onConfirmWireTransferPurchase,
    };
  }, [paymentInfo, setPaymentInfo, onConfirmCreditCardPurchase, onConfirmWireTransferPurchase]);

  return (
    <PaymentContext.Provider value={ values }>{ children }</PaymentContext.Provider>
  );
};
export default PaymentProvider;
export const usePayment = () => {
  return useContext(PaymentContext);
};
