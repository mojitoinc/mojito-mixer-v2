import { createContext, useContext } from 'react';

const DeliveryContext = createContext({});
const useDelivery = () => {
    return useContext(DeliveryContext);
};

export { DeliveryContext, useDelivery };
//# sourceMappingURL=DeliveryProvider.js.map
