import { Signer } from '@ethersproject/abstract-signer';
import { Web3Provider } from '@ethersproject/providers';
import React from 'react';
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
export declare const useConnect: () => ContextType;
export declare const ConnectProvider: ({ children }: {
    children?: React.ReactNode;
}) => JSX.Element;
