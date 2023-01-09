
import { createContext, useContext } from 'react';


export interface UserType {
  email : string;
}

const UserContext = createContext<UserType>({} as UserType);
export default UserContext;


export const  useUser =()=> {
  return useContext(UserContext);
};
