import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { useCreatePayment } from '../hooks';
import { CreditCardFormType, ReserveNow } from '../interfaces';
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

export interface ShowPaymentMethods {
  showCreditCard?: boolean;
  showWire?: boolean;
}

export interface Payment {
  paymentInfo?: PaymentData;
  setPaymentInfo: React.Dispatch<React.SetStateAction<PaymentData | undefined>>;
  onConfirmCreditCardPurchase: (deliveryAddress: string) => void;
  onConfirmWireTransferPurchase: (deliveryAddress: string) => void;
  paymentMethods?: ShowPaymentMethods;
  setPaymentMethods: React.Dispatch<
    React.SetStateAction<ShowPaymentMethods | undefined>
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
  const [paymentMethods, setPaymentMethods] = useState<ShowPaymentMethods>();
  const { billingInfo, collectionData, taxes } = useBilling();
  const { orgId, lotId, quantity, invoiceId } = useCheckout();
  const { setContainerState } = useContainer();
  const { makeCreditCardPurchase, makeWireTransferPurchase } = useCreatePayment(
    paymentInfo,
    orgId,
  );

  const saveToCookies = useCallback(
    (paymentData: PaymentData, reserveLotData: ReserveNow) => {
      CookieService.billing.setValue(JSON.stringify(billingInfo));
      CookieService.paymentInfo.setValue(JSON.stringify(paymentData));
      CookieService.taxes.setValue(JSON.stringify(taxes));
      CookieService.collectionData.setValue(JSON.stringify(collectionData));
      CookieService.reserveLotData.setValue(JSON.stringify(reserveLotData));
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
