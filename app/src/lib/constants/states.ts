export enum PaymentTypes {
  CREDIT_CARD = 'CreditCard',
  WALLET_CONNECT = 'Crypto',
  APPLE_PAY = 'ApplePayCheckout',
  GOOGLE_PAY = 'GooglePayCheckout',
  WIRE_TRANSFER = 'Wire'
}

export const BanksList = ['Bank of America', 'Capitol One', 'Chase', 'Citi Bank', 'Wells Fargo', 'US Bank'];

export enum PaymentStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  ACTIVE = 'active'
}