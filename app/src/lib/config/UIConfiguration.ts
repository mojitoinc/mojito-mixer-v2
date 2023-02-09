import { wireTransferInstructions, creditCardInstructions } from '.';

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
    },
    paymentConfirmation?: {
      wireTransferInstructions?: JSX.Element;
      creditCardInstructions?: JSX.Element;
      onGoToMarketPlace?: () => void;
  };
}

export const DefaultUIConfiguration: UIConfiguration = {
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
    wireTransferInstructions,
    creditCardInstructions,
    onGoToMarketPlace: () => undefined,
  },
};


export const makeUIConfiguration = (configurations: UIConfiguration) => {
  return {
      billing: {
        ...DefaultUIConfiguration?.billing,
        ...configurations?.billing,
      },
      costBreakdown:{
        ...DefaultUIConfiguration?.costBreakdown,
        ...configurations?.costBreakdown,
        },
      payment: {
        ...DefaultUIConfiguration?.payment,
        ...configurations?.payment,
      },
      paymentConfirmation: {
        ...DefaultUIConfiguration.paymentConfirmation,
        ...configurations.paymentConfirmation,
      },
  } as UIConfiguration;
};
