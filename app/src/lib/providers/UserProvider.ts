import { createContext, useContext } from 'react';


export interface BillingFormData {
  email : string;
  country? : string;
  state? : string;
  city? : string;
  zipcode? : string;
  phoneNumber? : string;
}

const UserContext = createContext<BillingFormData>({} as BillingFormData);
export default UserContext;


export const useUser = () => {
  return useContext(UserContext);
};
