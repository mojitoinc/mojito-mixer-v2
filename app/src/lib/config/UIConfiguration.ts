import { wireTransferInstructions, creditCardInstructions } from '.';

export interface UIConfiguration {
    hideExpressCheckout?: boolean;
    billing?: {
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
    showDiscountCode?: boolean;
    paymentConfiguration?: {
    wireTransferInstructions?: JSX.Element;
    creditCardInstructions?: JSX.Element;
    onClickGoToMarketPlace?: () => void;
  };
}

export const DefaultUIConfiguration: UIConfiguration = {
  hideExpressCheckout: false,
  billing: {
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
  showDiscountCode: true,
  paymentConfiguration: {
    wireTransferInstructions,
    creditCardInstructions,
    onClickGoToMarketPlace: () => undefined,
  },
};


export const makeUIConfiguration = (configurations: UIConfiguration) => {
  return {
    uiConfiguration: {
      showDiscountCode:
          configurations?.showDiscountCode ??
          DefaultUIConfiguration?.showDiscountCode,
      billing: {
        ...DefaultUIConfiguration?.billing,
        ...configurations?.billing,
      },
      hideExpressCheckout:
          configurations?.hideExpressCheckout ??
          DefaultUIConfiguration?.hideExpressCheckout,
      payment: {
        ...DefaultUIConfiguration?.payment,
        ...configurations?.payment,
      },
    },
    paymentConfiguration: {
      ...DefaultUIConfiguration.paymentConfiguration,
      ...configurations.paymentConfiguration,
    },
  } as UIConfiguration;
};
