import { CreditCardFormType } from '@lib/interfaces/CreditCard';
import React, { createContext, useContext, useState,useMemo } from 'react';

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
