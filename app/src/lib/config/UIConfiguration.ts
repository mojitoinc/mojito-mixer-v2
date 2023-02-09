import { wireTransferInstructions, creditCardInstructions } from '.';
import { UIConfiguration } from '../interfaces/ContextInterface';

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
