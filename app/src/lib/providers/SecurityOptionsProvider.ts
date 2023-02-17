import { createContext, useContext } from 'react';
import { SardineEnvironment } from '../config';

export interface SecurityOptions {
    sardineEnvironment?: SardineEnvironment;
    enableSardine?: boolean;
}
export const SecurityContext = createContext<SecurityOptions>({} as SecurityOptions);


export const useSecurityOptions = () => {
  return useContext(SecurityContext);
};
