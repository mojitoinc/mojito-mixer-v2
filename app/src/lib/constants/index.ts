export enum RiskRating {
  High = 'High',
  Low = 'Low',
}

export enum PaymentTypes {
  CREDIT_CARD = 'CreditCard',
  WALLET_CONNECT = 'Crypto',
  APPLE_PAY = 'ApplePayCheckout',
  GOOGLE_PAY = 'GooglePayCheckout',
  WIRE_TRANSFER = 'Wire',
  COIN_BASE = 'Coinbase',
}

export const BanksList = ['Bank of America', 'Capitol One', 'Chase', 'Citi Bank', 'Wells Fargo', 'US Bank'];

export enum PaymentStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  ACTIVE = 'active'
}

export const IS_BROWSER = typeof window !== 'undefined';
export const IS_SERVER = !IS_BROWSER;

export function isLocalhost() {
  if (IS_SERVER) return false;

  return window.location.hostname === 'localhost';
}
export const CIRCLE_URL = 'https://www.circle.com/en/'