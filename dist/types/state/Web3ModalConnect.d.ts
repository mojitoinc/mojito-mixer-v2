import { Web3Provider } from '@ethersproject/providers';
import Web3Modal from 'web3modal';
export declare const setupAll: (tag: string) => Promise<Web3Modal>;
export declare const onConnect: (web3Modal: Web3Modal, tag: string) => Promise<{
    provider: Web3Provider;
    web3: any;
    account: any;
    success: boolean;
} | undefined>;
export declare const useWeb3ModalConnect: () => {
    connect: import("./ConnectContext").ConnectType;
    setConnect: (f: import("./ConnectContext").ConnectType | ((prev: import("./ConnectContext").ConnectType) => import("./ConnectContext").ConnectType)) => void;
    networkId: string | undefined;
    onWalletConnect: () => Promise<void>;
    getSignedAddress: (message: string) => Promise<{
        address: string;
        signature: string;
    } | undefined>;
    onMetaMaskConnect: () => Promise<void>;
    onDisconnect: () => void;
};
