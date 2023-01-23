export enum ContainerTypes {
  CHECKOUT = 'CHECKOUT',
  PAYMENT = 'PAYMENT',
  DELIVERY = 'DELIVERY',
  CONFIRMATION = 'CONFIRMATION',
}
export enum PaymentTypes {
  CREDIT_CARD = 'Credit Card',
  WALLET_CONNECT = 'Walletconnect',
  APPLE_PAY = 'Apple Pay',
  GOOGLE_PAY = 'Google Pay',
  WIRE_TRANSFER = 'Wire Transfer'
}

export const BanksList = ['Bank of America', 'Capitol One', 'Chase', 'Citi Bank', 'Wells Fargo', 'US Bank']