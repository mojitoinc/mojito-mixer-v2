import React from 'react';
import { CreditCardFormType } from '../interfaces';
export interface OnChainForm {
    walletAddress: string;
}
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
    onChainPayment?: OnChainForm;
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
    onConfirmCoinbasePurchase: (deliveryAddress: string) => void;
    onConfirmOnChainPurchase: (deliveryAddress: string) => void;
    paymentMethods?: PaymentMethodLimit;
    setPaymentMethods: React.Dispatch<React.SetStateAction<PaymentMethodLimit | undefined>>;
}
export declare const PaymentProvider: ({ children, }: {
    children?: React.ReactNode;
}) => JSX.Element;
export declare const usePayment: () => Payment;
