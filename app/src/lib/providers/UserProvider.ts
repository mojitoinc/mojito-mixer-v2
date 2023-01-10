import { createContext, useContext } from 'react';


export interface UserType {
  email : string;
  country? : string;
  state? : string;
  city? : string;
  zipcode? : string;
  phoneNumber? : string;
}

const UserContext = createContext<UserType>({} as UserType);
export default UserContext;


export const useUser = () => {
  return useContext(UserContext);
};
