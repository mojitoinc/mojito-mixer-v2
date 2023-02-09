import { createContext, useContext } from 'react';

const CheckoutContext = createContext({});
const useCheckout = () => {
    return useContext(CheckoutContext);
};

export { CheckoutContext, useCheckout };
//# sourceMappingURL=CheckoutProvider.js.map
