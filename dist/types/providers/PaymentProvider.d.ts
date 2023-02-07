import { CreditCardFormType } from '../interfaces';
import React from 'react';
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
export interface Payment {
    paymentInfo?: PaymentData;
    setPaymentInfo: (value: PaymentData) => void;
    onConfirmCreditCardPurchase: (deliveryAddress: string) => void;
    onConfirmWireTransferPurchase: (deliveryAddress: string) => void;
}
export declare const PaymentProvider: ({ children }: {
    children?: React.ReactNode;
}) => JSX.Element;
export declare const usePayment: () => Payment;
