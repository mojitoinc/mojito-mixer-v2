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
    };
    costBreakdown?: {
      showDiscountCode?: boolean;
    },
    paymentConfirmation?: {
      wireTransferInstructions?: JSX.Element;
      creditCardInstructions?: JSX.Element;
      onGoTo?: () => void;
    };
    delivery?: {
      showConnectWallet?: boolean;
    }
}
export interface UIConfiguration {
  global: {
    logoSrc: string;
    loaderImageSrc: string;
    errorImageSrc: string;
  };
  billing: {
    isEnableExpressCheckout: boolean;
    gpay: boolean;
    applepay: boolean;
    walletConnect: boolean;
    metaMask: boolean;
  };
  payment: {
    gpay: boolean;
    applepay: boolean;
    walletConnect: boolean;
    wire: boolean;
    creditCard: boolean;
    coinbase: boolean;
  };
  costBreakdown: {
    showDiscountCode: boolean;
  },
  paymentConfirmation: {
    wireTransferInstructions: JSX.Element;
    creditCardInstructions: JSX.Element;
    onGoTo: () => void;
  };
  delivery: {
    showConnectWallet: boolean;
  }
}
