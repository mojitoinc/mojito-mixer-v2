import { useLazyQuery, useMutation } from '@apollo/client';
import { useEncryptCardData } from '@lib/hooks/useEncryptCard';
import { CreditCardFormType } from '@lib/interfaces/CreditCard';
import { ReserveNow } from '@lib/interfaces/Invoice';
import { getPaymentNotificationQuery } from '@lib/queries/creditCard';
import { reserveNowBuyLotQuery } from '@lib/queries/invoiceDetails';
import { addressScreeningQuery, createPaymentMethodQuery, createPaymentQuery, getPaymentMethodStatus } from '@lib/queries/Payment';
import { CookieService } from '@lib/storage/CookieService';
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
}
const PaymentContext = createContext<Payment>({} as Payment);

const PaymentProvider = ({ children }: { children?: React.ReactNode }) => {
  const [paymentInfo, setPaymentInfo] = useState<PaymentData>();


  const { billingInfo, collectionData, taxes } = useBilling();
  const { orgId, lotId, quantity } = useDelivery();
  const { setContainerState } = useContainer();
  const [createPaymentMethod] = useMutation(createPaymentMethodQuery);
  const [createPayment] = useMutation(createPaymentQuery);
  const [encryptCardData] = useEncryptCardData({ orgID: orgId });
  const [paymentMethodStatus] = useLazyQuery(getPaymentMethodStatus);
  const [paymentNotification] = useLazyQuery(getPaymentNotificationQuery);
  const [reserveNow] = useMutation(reserveNowBuyLotQuery);
  const [addressScreening] = useMutation(addressScreeningQuery);

  const onConfirmCreditCardPurchase = useCallback(async(deliveryAddress:string = "")=>{
    try {
      const { keyID, encryptedCardData } = await encryptCardData({
        number: paymentInfo?.creditCardData?.isNew
          ? paymentInfo?.creditCardData?.cardNumber?.replace(/\s/g, "")
          : undefined,
        cvv: paymentInfo?.creditCardData?.cvv ?? "",
      });
      let paymentMethodId = paymentInfo?.creditCardData?.isNew
        ? undefined
        : paymentInfo?.creditCardData?.cardId;
      if (paymentInfo?.creditCardData?.isNew) {
        const inputData = formCreatePaymentMethodObject(
          orgId,
          paymentInfo,
          billingInfo,
          keyID,
          encryptedCardData
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
          "complete"
        ) {
          await paymentMethodStatus({
            variables: {
              paymentMethodID: paymentMethodId,
            },
          });
        }
      }

      const reserveData = await reserveNow({
        variables: {
          input: {
            marketplaceBuyNowLotID: lotId,
            itemCount: quantity,
          },
        },
      });

      const reserveLotData: ReserveNow =
        reserveData?.data?.reserveMarketplaceBuyNowLot?.invoice;

      if (paymentMethodId) {
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

        window.location.href =
          notificationData?.data?.getPaymentNotification?.message?.redirectURL;
      }
    } catch (e) {
      console.error("ERROR", e);
    }
  },[])

  const saveToCookies = useCallback((paymentData: PaymentData)=>{

    CookieService.billing.setValue(JSON.stringify(billingInfo));
    CookieService.paymentInfo.setValue(JSON.stringify(paymentData));
    CookieService.taxes.setValue(JSON.stringify(taxes));
    CookieService.collectionData.setValue(JSON.stringify(collectionData));
    CookieService.reserveLotData.setValue(JSON.stringify(reserveLotData));
  },[])

  const values = useMemo<Payment>(() => {
    return {
      paymentInfo,
      setPaymentInfo,
    };
  }, [paymentInfo, setPaymentInfo]);
  return (
    <PaymentContext.Provider value={ values }>{ children }</PaymentContext.Provider>
  );
};
export default PaymentProvider;
export const usePayment = () => {
  return useContext(PaymentContext);
};
