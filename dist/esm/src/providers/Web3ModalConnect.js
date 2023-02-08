import { __awaiter } from '../../node_modules/tslib/tslib.es6.js';
import '../../node_modules/@ethersproject/providers/lib.esm/index.js';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { useState, useCallback } from 'react';
import Web3Modal from 'web3modal';
import { useConnect } from './ConnectContext.js';
import { Web3Provider } from '../../node_modules/@ethersproject/providers/lib.esm/web3-provider.js';

const setupAll = (tag) => __awaiter(void 0, void 0, void 0, function* () {
    const providerOptions = tag === 'wallet' ? {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                infuraId: process.env.NEXT_PUBLIC_RUNTIME_WALLETCONNECT_ID,
            },
        },
    }
        : {
            walletconnect: {
                package: null,
                options: {
                    infuraId: process.env.NEXT_PUBLIC_RUNTIME_WALLETCONNECT_ID,
                },
            },
        };
    const web3Modal = new Web3Modal({
        network: 'rinkeby',
        cacheProvider: true,
        providerOptions, // required
    });
    // web3Modal.clearCachedProvider();
    return web3Modal;
});
const onConnect = (web3Modal, tag) => __awaiter(void 0, void 0, void 0, function* () {
    if (web3Modal) {
        try {
            const provider = tag === 'metamask' ? yield web3Modal.connect() : yield web3Modal.connect();
            const web3Provider = new Web3Provider(provider);
            console.log('web3Provider');
            const signedAddress = (yield provider.selectedAddress) || provider.accounts[0];
            return {
                provider: web3Provider,
                web3: provider,
                account: signedAddress,
                success: true,
            };
        }
        catch (err) {
            console.log('error connecting Web3: ', err);
        }
    }
    else {
        console.log('No Web3Modal...');
    }
    return undefined;
});
const useWeb3ModalConnect = () => {
    const { connect, setConnect } = useConnect();
    const [networkId, setNetworkID] = useState();
    const getSignedAddress = useCallback((message) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const signer = (_a = connect === null || connect === void 0 ? void 0 : connect.provider) === null || _a === void 0 ? void 0 : _a.getSigner(connect.account);
        if (signer) {
            const signature = yield signer.signMessage(message);
            const address = yield signer.getAddress();
            return { address, signature };
        }
        return undefined;
    }), [connect]);
    const onWalletConnect = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        const modal = yield setupAll('wallet');
        console.log('modal', modal);
        const provider = yield onConnect(modal, 'wallet');
        console.log('provider', provider);
        if (provider) {
            let { chainId } = provider.web3;
            if (typeof chainId === 'string') {
                chainId = parseInt(chainId, 16);
            }
            setNetworkID('f7babe75-2dfc-434a-9e3b-a28e101c4863');
            setConnect({
                account: provider.account,
                signer: provider.provider.getSigner(provider.account),
                provider: provider.provider,
                connected: provider.success,
                chainId,
                modal,
            });
            console.log('provider', provider);
            provider.web3.on('accountsChanged', (accounts) => {
                setConnect(prevValue => (Object.assign(Object.assign({}, prevValue), { account: accounts[0], signer: provider.provider.getSigner(accounts[0]) })));
            });
            provider.web3.on('chainChanged', (_chainId) => {
                let updatedChainId = _chainId;
                if (typeof chainId === 'string') {
                    updatedChainId = parseInt(chainId, 16);
                }
                setConnect(prevValue => (Object.assign(Object.assign({}, prevValue), { chainId: updatedChainId })));
            });
        }
    }), [setConnect]);
    const onMetaMaskConnect = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        localStorage.clear();
        const modal = yield setupAll('metamask');
        const provider = yield onConnect(modal, 'metamask');
        if (provider) {
            let { chainId } = provider.web3;
            if (typeof chainId === 'string') {
                chainId = parseInt(chainId, 16);
            }
            setNetworkID('f7babe75-2dfc-434a-9e3b-a28e101c4863');
            setConnect({
                account: provider.account,
                signer: provider.provider.getSigner(provider.account),
                provider: provider.provider,
                connected: provider.success,
                chainId,
                modal,
            });
            provider.web3.on('accountsChanged', (accounts) => {
                setConnect(prevValue => (Object.assign(Object.assign({}, prevValue), { account: accounts[0], signer: provider.provider.getSigner(accounts[0]) })));
            });
            provider.web3.on('chainChanged', (_chainId) => {
                let updatedChainId = _chainId;
                if (typeof chainId === 'string') {
                    updatedChainId = parseInt(chainId, 16);
                }
                setConnect(prevValue => (Object.assign(Object.assign({}, prevValue), { chainId: updatedChainId })));
            });
        }
    }), [setConnect]);
    const onDisconnect = useCallback(() => {
        var _a;
        (_a = connect.modal) === null || _a === void 0 ? void 0 : _a.clearCachedProvider();
        setConnect({
            connected: false,
            account: '',
            chainId: 4,
        });
    }, [connect, setConnect]);
    return { connect, setConnect, networkId, onWalletConnect, getSignedAddress, onMetaMaskConnect, onDisconnect };
};

export { onConnect, setupAll, useWeb3ModalConnect };
//# sourceMappingURL=Web3ModalConnect.js.map
