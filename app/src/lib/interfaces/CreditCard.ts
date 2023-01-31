import { PaymentMethod } from './PaymentMethods';

export interface CreditCardFormType {
    isNew : boolean;
    expiry?:string;
    cvv?:string;
    firstName?:string;
    cardNumber?:string;
    lastName?:string;
    cardId?:string;
    save?:boolean;
    cardData?:PaymentMethod
}
