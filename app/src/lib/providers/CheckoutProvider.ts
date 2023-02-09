import { createContext, useContext } from 'react';

import { CheckoutOptions } from '../interfaces/ContextInterface'

export const CheckoutContext = createContext<CheckoutOptions>({} as CheckoutOptions);


export const useCheckout = () => {
  return useContext(CheckoutContext);
};
