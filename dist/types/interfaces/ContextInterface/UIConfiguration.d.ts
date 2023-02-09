/// <reference types="react" />
export interface UIConfiguration {
    billing?: {
        isEnableExpressCheckout?: boolean;
        gpay?: boolean;
        applepay?: boolean;
        walletConnect?: boolean;
        metaMask?: boolean;
    };
    payment?: {
        gpay?: boolean;
        applepay?: boolean;
        walletConnect?: boolean;
        wire?: boolean;
        creditCard?: boolean;
    };
    costBreakdown?: {
        showDiscountCode?: boolean;
    };
    paymentConfirmation?: {
        wireTransferInstructions?: JSX.Element;
        creditCardInstructions?: JSX.Element;
        onGoToMarketPlace?: () => void;
    };
}
