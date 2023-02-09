'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var paymentConfiguration = require('./paymentConfiguration.js');

const DefaultUIConfiguration = {
    billing: {
        isEnableExpressCheckout: true,
        gpay: true,
        applepay: true,
        walletConnect: true,
        metaMask: true,
    },
    payment: {
        gpay: true,
        applepay: true,
        walletConnect: true,
        wire: true,
        creditCard: true,
    },
    costBreakdown: {
        showDiscountCode: true,
    },
    paymentConfirmation: {
        wireTransferInstructions: paymentConfiguration.wireTransferInstructions,
        creditCardInstructions: paymentConfiguration.creditCardInstructions,
        onGoToMarketPlace: () => undefined,
    },
};
const makeUIConfiguration = (configurations) => {
    return {
        billing: Object.assign(Object.assign({}, DefaultUIConfiguration === null || DefaultUIConfiguration === void 0 ? void 0 : DefaultUIConfiguration.billing), configurations === null || configurations === void 0 ? void 0 : configurations.billing),
        costBreakdown: Object.assign(Object.assign({}, DefaultUIConfiguration === null || DefaultUIConfiguration === void 0 ? void 0 : DefaultUIConfiguration.costBreakdown), configurations === null || configurations === void 0 ? void 0 : configurations.costBreakdown),
        payment: Object.assign(Object.assign({}, DefaultUIConfiguration === null || DefaultUIConfiguration === void 0 ? void 0 : DefaultUIConfiguration.payment), configurations === null || configurations === void 0 ? void 0 : configurations.payment),
        paymentConfirmation: Object.assign(Object.assign({}, DefaultUIConfiguration.paymentConfirmation), configurations.paymentConfirmation),
    };
};

exports.DefaultUIConfiguration = DefaultUIConfiguration;
exports.makeUIConfiguration = makeUIConfiguration;
//# sourceMappingURL=UIConfiguration.js.map
