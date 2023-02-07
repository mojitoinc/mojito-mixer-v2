import { createContext, useContext } from 'react';


export interface ConfigurationType {
  billing?: {
    hideExpressCheckout?: boolean;
    expressCheckoutConfig?: {
      gpay?: boolean;
      applepay?: boolean;
      walletConnect?: boolean;
      metaMask?: boolean;
    },
    paymentMethods?: {
      gpay?: boolean;
      applepay?: boolean;
      walletConnect?: boolean;
      wire?: boolean;
      creditCard?: boolean;
    },
    showDiscountCode?: boolean;
  },
  paymentConfiguration?:{
    instruction? : string;
    onClickGoToMarketPlace? : ()=>void;
  }
}

export const DefaultConfiguration: ConfigurationType = {
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
    instruction: `If you selected to have your NFT(s) transferred directly to your
    non-custodial wallet (such as MetaMask), we will do so as soon as
    payment confirmation is received; otherwise, your NFT(s) will be
    transferred to a MultiSig wallet (also known as a custodial wallet)
    for safekeeping. You can view your NFT(s) on your Account page at
    any time.`,
    onClickGoToMarketPlace: () => undefined,
  },
};

export const ConfigurationContext = createContext<ConfigurationType>(DefaultConfiguration);


export const useUIConfiguration = () => {
  return useContext(ConfigurationContext);
};


export const makeUIConfiguration = (configurations: ConfigurationType) => {
  return {
    billing: {
      showDiscountCode: configurations?.billing?.showDiscountCode ?? DefaultConfiguration?.billing?.showDiscountCode,
      expressCheckoutConfig: { ...DefaultConfiguration?.billing?.expressCheckoutConfig, ...configurations?.billing?.expressCheckoutConfig },
      hideExpressCheckout: configurations?.billing?.hideExpressCheckout ?? DefaultConfiguration?.billing?.hideExpressCheckout,
      paymentMethods: { ...DefaultConfiguration?.billing?.paymentMethods, ...configurations?.billing?.paymentMethods },
    },
    paymentConfiguration: {
      ...DefaultConfiguration.paymentConfiguration,
      ...configurations.paymentConfiguration,
    },
  } as ConfigurationType;
};
