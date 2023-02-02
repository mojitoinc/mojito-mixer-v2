import { createContext, useContext } from 'react';


export interface Delivery {
  orgId: string;
  lotId?: string;
  quantity: number;
  paymentId?: string;
  collectionItemId: string;
  invoiceId?: string;
}

const DeliveryContext = createContext<Delivery>({} as Delivery);
export default DeliveryContext;


export const useDelivery = () => {
  return useContext(DeliveryContext);
};
