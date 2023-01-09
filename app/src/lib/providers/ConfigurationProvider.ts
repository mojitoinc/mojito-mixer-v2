import { createContext, useContext } from "react";


export interface ConfigurationType {
    hideExpressCheckout : boolean;
}

export const DefaultConfiguration:ConfigurationType = {
  hideExpressCheckout: false,
};
const ConfigurationContext = createContext<ConfigurationType>(DefaultConfiguration);
export default ConfigurationContext;


export const useConfiguration = () => {
  return useContext(ConfigurationContext);
};
