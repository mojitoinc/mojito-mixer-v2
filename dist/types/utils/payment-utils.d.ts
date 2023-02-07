export interface CardType {
    displayName: string;
    type: string;
    startPattern: RegExp;
}
export type CreditCardNetwork = 'amex' | 'dinersclub' | 'discover' | 'hipercard' | 'jcb' | 'unionpay' | 'mastercard' | 'maestro' | 'elo' | 'visa' | 'placeholder';
export declare const CARD_TYPES: CardType[];
export declare function getCardTypeByValue(cardNumber: string): CardType;
