import { createContext, useContext } from 'react';
import { wireTransferInstructions, creditCardInstructions } from '../config';

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
    wireTransferInstructions,
    creditCardInstructions,
    onClickGoToMarketPlace: () => undefined,
  },
};

export const ConfigurationContext =
  createContext<ConfigurationType>(DefaultConfiguration);

export const useUIConfiguration = () => {
  return useContext(ConfigurationContext);
};

export const makeUIConfiguration = (configurations: ConfigurationType) => {
  return {
    billing: {
      showDiscountCode:
        configurations?.billing?.showDiscountCode ??
        DefaultConfiguration?.billing?.showDiscountCode,
      expressCheckoutConfig: {
        ...DefaultConfiguration?.billing?.expressCheckoutConfig,
        ...configurations?.billing?.expressCheckoutConfig,
      },
      hideExpressCheckout:
        configurations?.billing?.hideExpressCheckout ??
        DefaultConfiguration?.billing?.hideExpressCheckout,
      paymentMethods: {
        ...DefaultConfiguration?.billing?.paymentMethods,
        ...configurations?.billing?.paymentMethods,
      },
    },
    paymentConfiguration: {
      ...DefaultConfiguration.paymentConfiguration,
      ...configurations.paymentConfiguration,
    },
  } as ConfigurationType;
};
