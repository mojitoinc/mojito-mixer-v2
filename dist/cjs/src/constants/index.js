'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

exports.RiskRating = void 0;
(function (RiskRating) {
    RiskRating["High"] = "High";
    RiskRating["Low"] = "Low";
})(exports.RiskRating || (exports.RiskRating = {}));
exports.PaymentTypes = void 0;
(function (PaymentTypes) {
    PaymentTypes["CREDIT_CARD"] = "CreditCard";
    PaymentTypes["WALLET_CONNECT"] = "Crypto";
    PaymentTypes["APPLE_PAY"] = "ApplePayCheckout";
    PaymentTypes["GOOGLE_PAY"] = "GooglePayCheckout";
    PaymentTypes["WIRE_TRANSFER"] = "Wire";
})(exports.PaymentTypes || (exports.PaymentTypes = {}));
const BanksList = ['Bank of America', 'Capitol One', 'Chase', 'Citi Bank', 'Wells Fargo', 'US Bank'];
exports.PaymentStatus = void 0;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["COMPLETED"] = "completed";
    PaymentStatus["ACTIVE"] = "active";
})(exports.PaymentStatus || (exports.PaymentStatus = {}));

exports.BanksList = BanksList;
//# sourceMappingURL=index.js.map
