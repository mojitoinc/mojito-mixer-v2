import { Web3Provider, JsonRpcSigner } from '@ethersproject/providers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { useCallback, useState } from 'react';
import Web3Modal, { IProviderOptions } from 'web3modal';
import { useConnect } from './ConnectContext';

export const setupAll = async (tag: string) => {
  const providerOptions:IProviderOptions = tag === 'wallet' ? {
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
    network: 'rinkeby', // process.env.NEXT_PUBLIC_RUNTIME_NETWORK, // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });
  // web3Modal.clearCachedProvider();
  return web3Modal;
};


export const onConnect = async (web3Modal: Web3Modal, tag: string) => {
  if (web3Modal) {
    try {
      const provider = tag === 'metamask' ? await web3Modal.connect() : await web3Modal.connect();
      const web3Provider = new Web3Provider(provider);
      console.log('web3Provider');

      const signedAddress =
        (await provider.selectedAddress) || provider.accounts[0];
      return {
        provider: web3Provider,
        web3: provider,
        account: signedAddress,
        success: true,
      };
    } catch (err) {
      console.log('error connecting Web3: ', err);
    }
  } else {
    console.log('No Web3Modal...');
  }
  return undefined;
};

export const useWeb3ModalConnect = () => {
  const { connect, setConnect } = useConnect();
  const [networkId, setNetworkID] = useState<string | undefined>();

  const getSignedAddress = useCallback(async (message: string) => {
    const signer: JsonRpcSigner | undefined = connect?.provider?.getSigner(
      connect.account,
    );
    if (signer) {
      const signature = await signer.signMessage(message);
      const address = await signer.getAddress();
      return { address, signature };
    }
    return undefined;
  }, [connect]);

  const onWalletConnect = useCallback(async () => {
    const modal = await setupAll('wallet');

    console.log('modal', modal);
    const provider = await onConnect(modal, 'wallet');
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

      provider.web3.on('accountsChanged', (accounts: string[]) => {
        setConnect(prevValue => ({
          ...prevValue,
          account: accounts[0],
          signer: provider.provider.getSigner(accounts[0]),
        }));
      });

      provider.web3.on('chainChanged', (_chainId: number) => {
        let updatedChainId = _chainId;
        if (typeof chainId === 'string') {
          updatedChainId = parseInt(chainId, 16);
        }
        setConnect(prevValue => ({
          ...prevValue,
          chainId: updatedChainId,
        }));
      });
    }
  }, [setConnect]);


  const onMetaMaskConnect = useCallback(async () => {
    localStorage.clear();
    const modal = await setupAll('metamask');

    const provider = await onConnect(modal, 'metamask');

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

      provider.web3.on('accountsChanged', (accounts: string[]) => {
        setConnect(prevValue => ({
          ...prevValue,
          account: accounts[0],
          signer: provider.provider.getSigner(accounts[0]),
        }));
      });

      provider.web3.on('chainChanged', (_chainId: number) => {
        let updatedChainId = _chainId;
        if (typeof chainId === 'string') {
          updatedChainId = parseInt(chainId, 16);
        }
        setConnect(prevValue => ({
          ...prevValue,
          chainId: updatedChainId,
        }));
      });
    }
  }, [setConnect]);

  const onDisconnect = useCallback(() => {
    connect.modal?.clearCachedProvider();
    setConnect({
      connected: false,
      account: '',
      chainId: 4,
    });
  }, [connect]);
  return { connect, setConnect, networkId, onWalletConnect, getSignedAddress, onMetaMaskConnect, onDisconnect };
};
