var RiskRating;
(function (RiskRating) {
    RiskRating["High"] = "High";
    RiskRating["Low"] = "Low";
})(RiskRating || (RiskRating = {}));
var PaymentTypes;
(function (PaymentTypes) {
    PaymentTypes["CREDIT_CARD"] = "CreditCard";
    PaymentTypes["WALLET_CONNECT"] = "Crypto";
    PaymentTypes["APPLE_PAY"] = "ApplePayCheckout";
    PaymentTypes["GOOGLE_PAY"] = "GooglePayCheckout";
    PaymentTypes["WIRE_TRANSFER"] = "Wire";
    PaymentTypes["COIN_BASE"] = "Coinbase";
})(PaymentTypes || (PaymentTypes = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["COMPLETED"] = "completed";
    PaymentStatus["PAID"] = "Paid";
    PaymentStatus["ACTIVE"] = "active";
})(PaymentStatus || (PaymentStatus = {}));
const IS_BROWSER = typeof window !== 'undefined';
const IS_SERVER = !IS_BROWSER;
function isLocalhost() {
    if (IS_SERVER)
        return false;
    return window.location.hostname === 'localhost';
}
const CIRCLE_URL = 'https://www.circle.com/en/';

export { CIRCLE_URL, IS_BROWSER, IS_SERVER, PaymentStatus, PaymentTypes, RiskRating, isLocalhost };
//# sourceMappingURL=index.js.map
