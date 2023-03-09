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
    PaymentTypes["COIN_BASE"] = "Coinbase";
})(exports.PaymentTypes || (exports.PaymentTypes = {}));
exports.PaymentStatus = void 0;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["COMPLETED"] = "completed";
    PaymentStatus["PAID"] = "Paid";
    PaymentStatus["ACTIVE"] = "active";
})(exports.PaymentStatus || (exports.PaymentStatus = {}));
const IS_BROWSER = typeof window !== 'undefined';
const IS_SERVER = !IS_BROWSER;
function isLocalhost() {
    if (IS_SERVER)
        return false;
    return window.location.hostname === 'localhost';
}
const CIRCLE_URL = 'https://www.circle.com/en/';

exports.CIRCLE_URL = CIRCLE_URL;
exports.IS_BROWSER = IS_BROWSER;
exports.IS_SERVER = IS_SERVER;
exports.isLocalhost = isLocalhost;
//# sourceMappingURL=index.js.map
