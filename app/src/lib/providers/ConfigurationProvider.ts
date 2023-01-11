import { createContext, useContext } from 'react';


export interface ConfigurationType {
    billing:{
      hideExpressCheckout : boolean;
    }
}

export const DefaultConfiguration:ConfigurationType = {
  billing: {
    hideExpressCheckout: false,
  },
};
const ConfigurationContext = createContext<ConfigurationType>(DefaultConfiguration);
export default ConfigurationContext;


export const useUIConfiguration = () => {
  return useContext(ConfigurationContext);
};
