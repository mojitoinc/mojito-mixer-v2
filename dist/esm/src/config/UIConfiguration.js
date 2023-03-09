import { Icons } from '../assets/index.js';
import { wireTransferInstructions, creditCardInstructions } from './paymentConfiguration.js';

const DefaultUIConfiguration = {
    global: {
        logoSrc: Icons.logo,
        loaderImageSrc: Icons.loading,
        errorImageSrc: Icons.ErrorLoader,
    },
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
        coinbase: true,
    },
    costBreakdown: {
        showDiscountCode: true,
    },
    paymentConfirmation: {
        wireTransferInstructions,
        creditCardInstructions,
        onGoTo: () => undefined,
    },
    delivery: {
        gpay: {
            enableMultiSig: true,
            enableConnectWallet: false,
        },
        applepay: {
            enableMultiSig: true,
            enableConnectWallet: false,
        },
        coinbase: {
            enableMultiSig: true,
            enableConnectWallet: false,
        },
        creditCard: {
            enableMultiSig: true,
            enableConnectWallet: false,
        },
        walletConnect: {
            enableMultiSig: true,
            enableConnectWallet: false,
        },
        wire: {
            enableMultiSig: true,
            enableConnectWallet: false,
        },
    },
};
const makeUIConfiguration = (configurations) => {
    return {
        global: Object.assign(Object.assign({}, DefaultUIConfiguration.global), configurations.global),
        billing: Object.assign(Object.assign({}, DefaultUIConfiguration === null || DefaultUIConfiguration === void 0 ? void 0 : DefaultUIConfiguration.billing), configurations === null || configurations === void 0 ? void 0 : configurations.billing),
        costBreakdown: Object.assign(Object.assign({}, DefaultUIConfiguration === null || DefaultUIConfiguration === void 0 ? void 0 : DefaultUIConfiguration.costBreakdown), configurations === null || configurations === void 0 ? void 0 : configurations.costBreakdown),
        payment: Object.assign(Object.assign({}, DefaultUIConfiguration === null || DefaultUIConfiguration === void 0 ? void 0 : DefaultUIConfiguration.payment), configurations === null || configurations === void 0 ? void 0 : configurations.payment),
        paymentConfirmation: Object.assign(Object.assign({}, DefaultUIConfiguration.paymentConfirmation), configurations.paymentConfirmation),
        delivery: Object.assign(Object.assign({}, DefaultUIConfiguration.delivery), configurations.delivery),
    };
};

export { DefaultUIConfiguration, makeUIConfiguration };
//# sourceMappingURL=UIConfiguration.js.map
