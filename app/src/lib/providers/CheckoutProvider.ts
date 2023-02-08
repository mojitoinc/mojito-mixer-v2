import { createContext, useContext } from 'react';


export interface CheckoutOptions {
  orgId?: string;
  lotId?: string;
  quantity?: number;
  paymentId?: string;
  collectionItemId?: string;
  invoiceId?: string;
}

export const CheckoutContext = createContext<CheckoutOptions>({} as CheckoutOptions);


export const useCheckout = () => {
  return useContext(CheckoutContext);
};
