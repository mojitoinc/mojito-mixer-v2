import { CreditCardFormType, ReserveNow, CreatePaymentResult } from '../interfaces';
import { BillingFormData } from '../providers';
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
export interface PaymentOptions {
    deliveryAddress: string | undefined;
    lotId: string | undefined;
    quantity: number;
    invoiceId?: string | undefined;
    billingInfo: BillingFormData | undefined;
}
export declare const Countries: {
    US: string;
    INTERNATIONAL: string;
};
export interface PaymentReceiptData {
    paymentData: PaymentData;
    reserveLotData: ReserveNow;
    notificationData?: any | undefined;
    paymentResult?: CreatePaymentResult;
}
export interface UseCreatePaymentData {
    makeCreditCardPurchase: (options: PaymentOptions) => Promise<PaymentReceiptData>;
    makeWireTransferPurchase: (options: PaymentOptions) => Promise<PaymentReceiptData>;
}
export declare const useCreatePayment: (paymentInfo: PaymentData | undefined, orgId: string | undefined) => UseCreatePaymentData;
