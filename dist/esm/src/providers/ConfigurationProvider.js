import { createContext, useContext } from 'react';
import '../config/RuntimeConfiguration.js';
import { wireTransferInstructions, creditCardInstructions } from '../config/paymentConfiguration.js';

const DefaultConfiguration = {
    billing: {
        hideExpressCheckout: false,
        expressCheckoutConfig: {
            gpay: true,
            applepay: true,
            walletConnect: true,
            metaMask: true,
        },
        paymentMethods: {
            gpay: true,
            applepay: true,
            walletConnect: true,
            wire: true,
            creditCard: true,
        },
        showDiscountCode: true,
    },
    paymentConfiguration: {
        wireTransferInstructions,
        creditCardInstructions,
        onClickGoToMarketPlace: () => undefined,
    },
};
const ConfigurationContext = createContext(DefaultConfiguration);
const useUIConfiguration = () => {
    return useContext(ConfigurationContext);
};
const makeUIConfiguration = (configurations) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return {
        billing: {
            showDiscountCode: (_b = (_a = configurations === null || configurations === void 0 ? void 0 : configurations.billing) === null || _a === void 0 ? void 0 : _a.showDiscountCode) !== null && _b !== void 0 ? _b : (_c = DefaultConfiguration === null || DefaultConfiguration === void 0 ? void 0 : DefaultConfiguration.billing) === null || _c === void 0 ? void 0 : _c.showDiscountCode,
            expressCheckoutConfig: Object.assign(Object.assign({}, (_d = DefaultConfiguration === null || DefaultConfiguration === void 0 ? void 0 : DefaultConfiguration.billing) === null || _d === void 0 ? void 0 : _d.expressCheckoutConfig), (_e = configurations === null || configurations === void 0 ? void 0 : configurations.billing) === null || _e === void 0 ? void 0 : _e.expressCheckoutConfig),
            hideExpressCheckout: (_g = (_f = configurations === null || configurations === void 0 ? void 0 : configurations.billing) === null || _f === void 0 ? void 0 : _f.hideExpressCheckout) !== null && _g !== void 0 ? _g : (_h = DefaultConfiguration === null || DefaultConfiguration === void 0 ? void 0 : DefaultConfiguration.billing) === null || _h === void 0 ? void 0 : _h.hideExpressCheckout,
            paymentMethods: Object.assign(Object.assign({}, (_j = DefaultConfiguration === null || DefaultConfiguration === void 0 ? void 0 : DefaultConfiguration.billing) === null || _j === void 0 ? void 0 : _j.paymentMethods), (_k = configurations === null || configurations === void 0 ? void 0 : configurations.billing) === null || _k === void 0 ? void 0 : _k.paymentMethods),
        },
        paymentConfiguration: Object.assign(Object.assign({}, DefaultConfiguration.paymentConfiguration), configurations.paymentConfiguration),
    };
};

export { ConfigurationContext, DefaultConfiguration, makeUIConfiguration, useUIConfiguration };
//# sourceMappingURL=ConfigurationProvider.js.map
