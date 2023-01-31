import { createContext, useContext } from 'react';


export interface ConfigurationType {
  billing: {
    hideExpressCheckout: boolean;
    expressCheckoutConfig: {
      gpay?: boolean;
      applepay?: boolean;
      walletConnect?: boolean;
      metaMask?: boolean;
    },
    paymentMethods: {
      gpay?: boolean;
      applepay?: boolean;
      walletConnect?: boolean;
      wire?: boolean;
      creditCard?: boolean;
    },
    showDiscountCode: boolean;
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
    showDiscountCode: true
  },
};
const ConfigurationContext = createContext<ConfigurationType>(DefaultConfiguration);
export default ConfigurationContext;


export const useUIConfiguration = () => {
  return useContext(ConfigurationContext);
};
