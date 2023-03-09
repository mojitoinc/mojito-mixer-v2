export interface DeliveryType {
  enableConnectWallet:boolean;
  enableMultiSig:boolean;
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
    gpay: DeliveryType;
    applepay: DeliveryType;
    walletConnect: DeliveryType;
    wire: DeliveryType;
    creditCard: DeliveryType;
    coinbase: DeliveryType;
  }
}
