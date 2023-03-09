export declare enum RiskRating {
    High = "High",
    Low = "Low"
}
export declare enum PaymentTypes {
    CREDIT_CARD = "CreditCard",
    WALLET_CONNECT = "Crypto",
    APPLE_PAY = "ApplePayCheckout",
    GOOGLE_PAY = "GooglePayCheckout",
    WIRE_TRANSFER = "Wire",
    COIN_BASE = "Coinbase"
}
export declare const BanksList: string[];
export declare enum PaymentStatus {
    PENDING = "pending",
    COMPLETED = "completed",
    PAID = "Paid",
    ACTIVE = "active"
}
export declare const IS_BROWSER: boolean;
export declare const IS_SERVER: boolean;
export declare function isLocalhost(): boolean;
export declare const CIRCLE_URL = "https://www.circle.com/en/";
