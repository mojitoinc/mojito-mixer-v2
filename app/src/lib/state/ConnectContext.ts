import { Signer } from '@ethersproject/abstract-signer';
import { Web3Provider } from '@ethersproject/providers';
import { createContext, useContext } from 'react';
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

export default Context;

export const  useConnect =()=> {
  return useContext(Context);
};
