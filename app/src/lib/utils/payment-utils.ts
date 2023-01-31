export interface CardType {
    displayName: string;
    type: string;
    startPattern: RegExp;
}
export type CreditCardNetwork = 'amex' | 'dinersclub' | 'discover' | 'hipercard' | 'jcb' | 'unionpay' | 'mastercard' | 'maestro' | 'elo' | 'visa' | 'placeholder';

export const CARD_TYPES: CardType[] = [{
  displayName: 'Visa',
  type: 'visa',
  startPattern: /^4/,
}, {
  displayName: 'MasterCard',
  type: 'mastercard',
  startPattern: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
}, {
  displayName: 'American Express',
  type: 'amex',
  startPattern: /^3[47]/,
}, {
  displayName: 'Diners Club',
  type: 'dinersclub',
  startPattern: /^(36|38|30[0-5])/,
}, {
  displayName: 'Discover',
  type: 'discover',
  startPattern: /^(6011|65|64[4-9]|622)/,
}, {
  displayName: 'JCB',
  type: 'jcb',
  startPattern: /^35/,
}, {
  displayName: 'UnionPay',
  type: 'unionpay',
  startPattern: /^62/,
}, {
  displayName: 'Maestro',
  type: 'maestro',
  startPattern: /^(5018|5020|5038|6304|6703|6708|6759|676[1-3])/,
}, {
  displayName: 'Elo',
  type: 'elo',
  startPattern: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|4(0[5-9]|3[0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8])|9([2-6][0-9]|7[0-8])|541|700|720|901)|651652|655000|655021)/,
}, {
  displayName: 'Hipercard',
  type: 'hipercard',
  startPattern: /^(384100|384140|384160|606282|637095|637568|60(?!11))/,
}, {
  displayName: 'Credit Card',
  type: 'placeholder',
  startPattern: /^\d+$/,
}];


const CARD_TYPES_BY_TYPE = CARD_TYPES.reduce((cardsAcc: Record<CreditCardNetwork, CardType>, cardType: CardType) => {
  cardsAcc[cardType.type as CreditCardNetwork] = cardType;
  return cardsAcc;
}, {} as Record<CreditCardNetwork, CardType>);

export function getCardTypeByValue(cardNumber: string): CardType {
  return CARD_TYPES.find(cardType => cardType.startPattern.test(cardNumber)) || CARD_TYPES_BY_TYPE.placeholder;
}
