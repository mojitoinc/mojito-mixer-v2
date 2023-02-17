import { createContext, useContext } from 'react';

const SecurityContext = createContext({});
const useSecurityOptions = () => {
    return useContext(SecurityContext);
};

export { SecurityContext, useSecurityOptions };
//# sourceMappingURL=SecurityOptionsProvider.js.map
