import { Taxes } from '../../interfaces';
import { BillingFormData, PaymentData } from '../../providers';
export declare const formCardScreeningVariable: (orgId: string, paymentInfo?: PaymentData, billingInfo?: BillingFormData, taxes?: Taxes, meData?: any) => {
    orgID: string;
    input: {
        flow: string;
        sessionKey: string | undefined;
        customer: {
            firstName: string | undefined;
            lastName: string | undefined;
            emailAddress: string | undefined;
            isEmailVerified: boolean;
            isPhoneVerified: boolean;
            address: {
                street1: string | undefined;
                street2: string;
                city: string | undefined;
                regionCode: string | undefined;
                postalCode: string | undefined;
                countryCode: string | undefined;
            };
        };
        transaction: {
            id: string;
            currencyCode: string;
            actionType: string;
            amount: number | undefined;
            paymentMethod: {
                type: string;
                card: {
                    first6: string | undefined;
                    last4: string | undefined;
                    hash: string;
                };
            };
        };
    };
};
export declare const formCreatePaymentMethodObject: (orgId: string, paymentInfo?: PaymentData, billingInfo?: BillingFormData, keyID?: string, encryptedCardData?: string) => any;
