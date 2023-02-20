/// <reference types="react" />
export interface ConfigurationType {
    billing?: {
        hideExpressCheckout?: boolean;
        expressCheckoutConfig?: {
            gpay?: boolean;
            applepay?: boolean;
            walletConnect?: boolean;
            metaMask?: boolean;
        };
        paymentMethods?: {
            gpay?: boolean;
            applepay?: boolean;
            walletConnect?: boolean;
            wire?: boolean;
            creditCard?: boolean;
        };
        showDiscountCode?: boolean;
    };
    paymentConfiguration?: {
        wireTransferInstructions?: JSX.Element;
        creditCardInstructions?: JSX.Element;
        onClickGoToMarketPlace?: () => void;
    };
}
export declare const DefaultConfiguration: ConfigurationType;
export declare const ConfigurationContext: import("react").Context<ConfigurationType>;
export declare const useUIConfiguration: () => ConfigurationType;
export declare const makeUIConfiguration: (configurations: ConfigurationType) => ConfigurationType;
