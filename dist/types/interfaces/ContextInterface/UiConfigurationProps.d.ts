/// <reference types="react" />
export interface MojitoDeliveryType {
    enableConnectWallet?: boolean;
    enableMultiSig?: boolean;
}
export interface MojitoUIConfiguration {
    global?: {
        logoSrc?: string;
        loaderImageSrc?: string;
        errorImageSrc?: string;
    };
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
        coinbase?: boolean;
        onChain?: boolean;
    };
    costBreakdown?: {
        showDiscountCode?: boolean;
    };
    paymentConfirmation?: {
        wireTransferInstructions?: JSX.Element;
        creditCardInstructions?: JSX.Element;
        onGoTo?: () => void;
    };
    delivery?: {
        gpay?: MojitoDeliveryType;
        applepay?: MojitoDeliveryType;
        walletConnect?: MojitoDeliveryType;
        wire?: MojitoDeliveryType;
        creditCard?: MojitoDeliveryType;
        coinbase?: MojitoDeliveryType;
    };
}
