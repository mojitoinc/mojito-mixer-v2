import { Icons } from '../assets';
import { wireTransferInstructions, creditCardInstructions } from '.';
import { UIConfiguration, MojitoUIConfiguration } from '../interfaces/ContextInterface';

export const DefaultUIConfiguration: UIConfiguration = {
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
    onChain: true,
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


export const makeUIConfiguration = (configurations: MojitoUIConfiguration) => {
  return {
    global: {
      ...DefaultUIConfiguration.global,
      ...configurations.global,
    },
    billing: {
      ...DefaultUIConfiguration?.billing,
      ...configurations?.billing,
    },
    costBreakdown: {
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
    delivery: {
      ...DefaultUIConfiguration.delivery,
      ...configurations.delivery,
    },
  } as UIConfiguration;
};
