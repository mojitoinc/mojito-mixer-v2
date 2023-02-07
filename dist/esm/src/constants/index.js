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

export { BanksList, PaymentStatus, PaymentTypes, RiskRating };
//# sourceMappingURL=index.js.map
