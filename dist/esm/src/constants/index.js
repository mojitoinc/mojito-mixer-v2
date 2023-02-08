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
})(PaymentTypes || (PaymentTypes = {}));
const BanksList = ['Bank of America', 'Capitol One', 'Chase', 'Citi Bank', 'Wells Fargo', 'US Bank'];
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["COMPLETED"] = "completed";
    PaymentStatus["ACTIVE"] = "active";
})(PaymentStatus || (PaymentStatus = {}));
const IS_BROWSER = typeof window !== "undefined";
const IS_SERVER = !IS_BROWSER;
function isLocalhost() {
    if (IS_SERVER)
        return false;
    return window.location.hostname === "localhost";
}

export { BanksList, IS_BROWSER, IS_SERVER, PaymentStatus, PaymentTypes, RiskRating, isLocalhost };
//# sourceMappingURL=index.js.map
