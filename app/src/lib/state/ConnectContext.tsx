import { Signer } from '@ethersproject/abstract-signer';
import { Web3Provider } from '@ethersproject/providers';
import { createContext, useContext, useMemo, useState } from 'react';
import Web3Modal from 'web3modal';

export interface ConnectType {
  connected: boolean;
  chainId: number;
  signer?: Signer;
  provider?: Web3Provider;
  account: string;
  modal?: Web3Modal;
}
export interface ContextType {
  connect: ConnectType;
  setConnect(f: ConnectType | ((prev: ConnectType) => ConnectType)): void;
}
const Context = createContext<ContextType>({} as ContextType);

export const useConnect = () => {
  return useContext(Context);
};
export const ConnectProvider = ({ children }: { children?: React.ReactNode }) => {

  const [connect, setConnect] = useState<ConnectType>({
    connected: false,
    account: "",
    chainId: 4,
  });

  const values = useMemo<ContextType>(()=>{
    return {
      connect,setConnect
    } as ContextType
  },[connect,setConnect])

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

