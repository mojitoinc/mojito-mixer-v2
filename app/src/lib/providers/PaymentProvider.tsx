import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { useCreatePayment } from '../hooks';
import { CreditCardFormType, ReserveNow, CreatePaymentResult } from '../interfaces';
import { CookieService } from '../service/CookieService';
import { useDebug, useError } from '.';
import { useContainer } from './ContainerStateProvider';
import { ContainerTypes } from '../interfaces/ContextInterface';

import { useBilling } from './BillingProvider';
import { useCheckout } from './CheckoutProvider';

export interface PaymentData {
  creditCardData?: CreditCardFormType;
  wireData?: {
    accountNumber: string;
    routingNumber: string;
    iban: string;
    bankAddress: {
      bankName: string;
      country: string;
      city: string;
    };
    country: string;
  };
  paymentId?: string;
  paymentType?: string;
  destinationAddress?: string;
  deliveryStatus?: string;
  sessionKey?: string;
}

export interface PaymentMethodLimit {
  exceedCreditCard?: boolean;
  exceedWire?: boolean;
}

export interface Payment {
  paymentInfo?: PaymentData;
  setPaymentInfo: React.Dispatch<React.SetStateAction<PaymentData | undefined>>;
  onConfirmCreditCardPurchase: (deliveryAddress: string) => void;
  onConfirmWireTransferPurchase: (deliveryAddress: string) => void;
  paymentMethods?: PaymentMethodLimit;
  setPaymentMethods: React.Dispatch<
    React.SetStateAction<PaymentMethodLimit | undefined>
  >;
}
const PaymentContext = createContext<Payment>({} as Payment);

export const PaymentProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const debug = useDebug('PaymentProvider');
  const { setError } = useError();
  const [paymentInfo, setPaymentInfo] = useState<PaymentData>();
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethodLimit>();
  const { billingInfo, collectionData, taxes } = useBilling();
  const { orgId, lotId, quantity, invoiceId } = useCheckout();
  const { setContainerState } = useContainer();
  const { makeCreditCardPurchase, makeWireTransferPurchase } = useCreatePayment(
    paymentInfo,
    orgId,
  );

  const saveToCookies = useCallback(
    (paymentData: PaymentData, reserveLotData: ReserveNow, paymentResult?:CreatePaymentResult) => {
      CookieService.billing.setValue(JSON.stringify(billingInfo));
      CookieService.paymentInfo.setValue(JSON.stringify(paymentData));
      CookieService.taxes.setValue(JSON.stringify(taxes));
      CookieService.collectionData.setValue(JSON.stringify(collectionData));
      CookieService.reserveLotData.setValue(JSON.stringify(reserveLotData));
      CookieService.paymentResult.setValue(JSON.stringify(paymentResult));
    },
    [billingInfo, collectionData, taxes],
  );

  const onConfirmCreditCardPurchase = useCallback(
    async (deliveryAddress = '') => {
      setContainerState(ContainerTypes.LOADING);
      try {
        const paymentReceipt = await makeCreditCardPurchase({
          deliveryAddress,
          lotId,
          quantity: quantity ?? 1,
          invoiceId,
          billingInfo,
        });

        debug.success('paymentData', { paymentReceipt });

        saveToCookies(
          paymentReceipt.paymentData,
          paymentReceipt.reserveLotData,
          paymentReceipt.paymentResult,
        );

        window.location.href =
          paymentReceipt.notificationData?.getPaymentNotification?.message?.redirectURL;
      } catch (e: any) {
        const message = e.message ?? '';
        debug.error('confirm', { message });
        setError(message);
      }
    },
    [
      debug,
      billingInfo,
      invoiceId,
      lotId,
      quantity,
      setError,
      saveToCookies,
      setContainerState,
      makeCreditCardPurchase,
    ],
  );

  const onConfirmWireTransferPurchase = useCallback(
    async (deliveryAddress = '') => {
      setContainerState(ContainerTypes.LOADING);
      try {
        const paymentReceipt = await makeWireTransferPurchase({
          deliveryAddress,
          lotId,
          quantity: quantity ?? 1,
          invoiceId,
          billingInfo,
        });

        debug.success('paymentData-wire', { paymentReceipt });

        saveToCookies(
          paymentReceipt.paymentData,
          paymentReceipt.reserveLotData,
          paymentReceipt.paymentResult,
        );
        setPaymentInfo(paymentReceipt.paymentData);
        setContainerState(ContainerTypes.CONFIRMATION);
      } catch (e: any) {
        const message = e.message ?? '';
        debug.error('confirm', { message });
        setError(message);
      }
    },
    [
      debug,
      billingInfo,
      invoiceId,
      lotId,
      quantity,
      setError,
      setContainerState,
      setPaymentInfo,
      saveToCookies,
      makeWireTransferPurchase,
    ],
  );

  const values = useMemo<Payment>(() => {
    return {
      paymentInfo,
      setPaymentInfo,
      onConfirmCreditCardPurchase,
      onConfirmWireTransferPurchase,
      setPaymentMethods,
      paymentMethods,
    };
  }, [
    paymentInfo,
    setPaymentInfo,
    onConfirmCreditCardPurchase,
    onConfirmWireTransferPurchase,
    setPaymentMethods,
    paymentMethods,
  ]);

  return (
    <PaymentContext.Provider value={ values }>{ children }</PaymentContext.Provider>
  );
};

export const usePayment = () => {
  return useContext(PaymentContext);
};
