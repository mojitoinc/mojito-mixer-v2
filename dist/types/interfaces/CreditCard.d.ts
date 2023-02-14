import { PaymentMethod } from './PaymentMethods';
export interface CreditCardFormType {
    isNew: boolean;
    expiry?: string;
    cvv?: string;
    cardNumber?: string;
    cardId?: string;
    save?: boolean;
    cardData?: PaymentMethod;
}
