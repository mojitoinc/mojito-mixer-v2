import { createContext, useContext } from 'react';


export interface Delivery {
  orgId : string;
  lotId : string;
  itemCount : number;
}

const DeliveryContext = createContext<Delivery>({} as Delivery);
export default DeliveryContext;


export const useDelivery = () => {
  return useContext(DeliveryContext);
};
