import { createContext, useContext } from 'react';
import { DefaultUIConfiguration } from '../config/UIConfiguration.js';

const UIConfigurationContext = createContext(DefaultUIConfiguration);
const useUIConfiguration = () => {
    return useContext(UIConfigurationContext);
};

export { UIConfigurationContext, useUIConfiguration };
//# sourceMappingURL=UIConfigurationProvider.js.map
