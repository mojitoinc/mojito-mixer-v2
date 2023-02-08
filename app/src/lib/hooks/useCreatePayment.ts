import { useLazyQuery, useMutation } from '@apollo/client';
import { formCreatePaymentMethodObject } from '@views/Delivery/Delivery.service';
import { useMemo, useCallback } from 'react';
import { useEncryptCardData } from './useEncryptCard';
import { CreditCardFormType, ReserveNow } from '../interfaces';
import { reserveNowBuyLotQuery } from '../queries/invoiceDetails';
import { createPaymentMethodQuery, createPaymentQuery, getPaymentMethodStatus } from '../queries/Payment';
import { BillingFormData, useDebug } from '../providers';
import { useAPIService } from './useAPIService';


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

export interface PaymentOptions {
  deliveryAddress: string | undefined;
  lotId: string | undefined;
  quantity: number;
  invoiceId?: string | undefined;
  billingInfo: BillingFormData | undefined;
}


export interface PaymentReceiptData {
  paymentData: PaymentData;
  reserveLotData: ReserveNow
  notificationData?: any | undefined
}
export interface UseCreatePaymentData {
  makeCreditCardPurchase:(options: PaymentOptions)=>Promise<PaymentReceiptData>;
  makeWireTransferPurchase:(options: PaymentOptions)=>Promise<PaymentReceiptData>;
}

export const useCreatePayment = (paymentInfo: PaymentData | undefined, orgId: string | undefined): UseCreatePaymentData => {
  const debug = useDebug('useCreatePayment');
  const { getPaymentNotification } = useAPIService();
  const [createPaymentMethod] = useMutation(createPaymentMethodQuery);
  const [createPayment] = useMutation(createPaymentQuery);
  const [encryptCardData] = useEncryptCardData({ orgID: orgId ?? '' });
  const [paymentMethodStatus] = useLazyQuery(getPaymentMethodStatus);
  const [reserveNow] = useMutation(reserveNowBuyLotQuery);

  const getInvoiceData = useCallback(async (invoiceId: string | undefined, lotId: string | undefined, quantity: number) => {
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
  }, [reserveNow]);


  const makeCreditCardPurchase = useCallback(async (options: PaymentOptions): Promise<PaymentReceiptData> => {
    debug.info('onConfirm-start', { paymentInfo, options });

    const newCreditCard = paymentInfo?.creditCardData?.isNew ?? false;

    const creditCardPayload = newCreditCard ? {
      number: paymentInfo?.creditCardData?.cardNumber?.replace(/\s/g, ''),
      cvv: paymentInfo?.creditCardData?.cvv ?? '',
    }
      : { cvv: paymentInfo?.creditCardData?.cvv ?? '' };

    debug.info('onConfirm-encryptCardData', { newCreditCard, creditCardPayload });

    const { keyID, encryptedCardData } = await encryptCardData(creditCardPayload);

    debug.info('onConfirm-encrypt', encryptedCardData);

    let paymentMethodId = paymentInfo?.creditCardData?.isNew
      ? undefined
      : paymentInfo?.creditCardData?.cardId;

    debug.info('onConfirm-paymentMethodId', paymentInfo);

    if (paymentInfo?.creditCardData?.isNew) {
      const inputData = formCreatePaymentMethodObject(
        orgId ?? '',
        paymentInfo,
        options.billingInfo,
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
      debug.info('onConfirm-createPaymentMethod', createPaymentMethodResult);

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
    debug.info('onConfirm-paymentMethodId', paymentMethodId);
    const reserveLotData = await getInvoiceData(options.invoiceId, options.lotId, options.quantity);
    debug.info('onConfirm-reserveLotData', reserveLotData);

    if (paymentMethodId) {
      debug.info('ready-paymentMethodId', {
        paymentMethodID: paymentMethodId,
        invoiceID: reserveLotData?.invoiceID,
        metadata: {
          destinationAddress: options.deliveryAddress,
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
            destinationAddress: options.deliveryAddress,
            creditCardData: {
              keyID,
              encryptedData: encryptedCardData,
            },
          },
        },
      });
      debug.info('ready-createPayment');
      const notificationData = await getPaymentNotification();
      const paymentData: PaymentData = {
        ...paymentInfo,
        paymentId: paymentMethodId,
        destinationAddress: options.deliveryAddress,
      };
      debug.success('paymentData', { paymentData, notificationData });

      return { paymentData, reserveLotData, notificationData: notificationData?.data };
    }
    throw new Error('unable to create paymentMethod');
  }, [
    debug,
    orgId,
    paymentInfo,
    createPayment,
    createPaymentMethod,
    encryptCardData,
    paymentMethodStatus,
    getPaymentNotification,
    getInvoiceData,
  ]);

  const makeWireTransferPurchase = useCallback(async (options: PaymentOptions):Promise<PaymentReceiptData> => {
    const inputData: any = {};
    const copiedBillingDetails = {
      ...options.billingInfo,
      district: options.billingInfo?.state,
      address1: options.billingInfo?.street1,
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

      const reserveLotData = await getInvoiceData(options.invoiceId, options.lotId, options.quantity);

      const result1 = await createPayment({
        variables: {
          paymentMethodID: result?.data?.createPaymentMethod?.id,
          invoiceID: reserveLotData?.invoiceID,
          metadata: {
            destinationAddress: options.deliveryAddress,
          },
        },
      });
      const paymentData: PaymentData = {
        ...paymentInfo,
        deliveryStatus: result1?.data?.createPayment?.status,
        paymentId: result?.data?.createPaymentMethod?.id ?? '',
        destinationAddress: options.deliveryAddress,
      };
      return { paymentData, reserveLotData };
    }
    throw new Error('unable to create paymentMethod');
  }, [
    paymentInfo,
    orgId,
    paymentMethodStatus,
    createPaymentMethod,
    createPayment,
    getInvoiceData,
  ]);


  const values = useMemo<UseCreatePaymentData>(() => {
    return {
      makeCreditCardPurchase,
      makeWireTransferPurchase,
    };
  }, [makeCreditCardPurchase, makeWireTransferPurchase]);

  return values;
};
