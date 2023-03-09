import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { DropdownOptions } from '../../components';
import { meQuery } from '../../queries/me';
import {
  addressScreeningQuery,
} from '../../queries/Payment';
import { useCheckout, useBilling, usePayment, useDebug, useSecurityOptions } from '../../providers';
import { PaymentTypes, RiskRating } from '../../constants';
import { useWeb3ModalConnect } from '../../providers/Web3ModalConnect';
import DeliveryLayout from './Delivery';

export const NEW_MULTI_SIG = 'NEW_MULTI_SIG';

export const Delivery = () => {
  const debug = useDebug('Delivery');
  const [selectedDeliveryAddress, setSelectedDeliveryAddress] =
    useState<string>('');
  const [walletOptions, setWalletOptions] = useState<DropdownOptions[]>([]);
  const { billingInfo } = useBilling();
  const { orgId } = useCheckout();
  const { paymentInfo, onConfirmCreditCardPurchase, onConfirmWireTransferPurchase, onConfirmCoinbasePurchase, onConfirmOnChainPurchase } = usePayment();
  const { data: meData } = useQuery(meQuery);
  const [addressScreening, { loading: isLoading }] = useMutation(addressScreeningQuery);
  const [error, setError] = useState<string>();
  const { enableSardine } = useSecurityOptions();

  const {
    connect,
    onWalletConnect,
    onDisconnect,
  } = useWeb3ModalConnect();


  const handleChange = useCallback((value: string) => {
    setSelectedDeliveryAddress(value);
  }, []);

  const formatWallets = (wallets: any) => {
    return wallets.map((item: any) => ({
      label: item.address,
      value: item.address,
    }));
  };

  useEffect(() => {
    let formattedWallets = [];
    if (meData?.me?.wallets) {
      formattedWallets = formatWallets(meData.me?.wallets);
      formattedWallets.push({
        label: 'I don’t have a wallet / Create a new Multi-sig',
        value: NEW_MULTI_SIG,
      });
      setWalletOptions(formattedWallets);
    }
  }, [meData]);

  const connectedWalletAddress = useMemo(() => {
    if (paymentInfo?.paymentType === PaymentTypes.WALLET_CONNECT) return paymentInfo.onChainPayment?.walletAddress;
    if (connect?.connected) return connect?.account;
    return undefined;
  }, [connect, paymentInfo]);

  const onClickConfirmPurchase = useCallback(async () => {
    try {
      const deliveryAddress = connectedWalletAddress ?? (selectedDeliveryAddress === NEW_MULTI_SIG ? '' : selectedDeliveryAddress);
      if (!deliveryAddress && selectedDeliveryAddress !== NEW_MULTI_SIG) {
        setError('Please select a delivery address');
        return;
      }
      if (deliveryAddress !== '' && enableSardine) {
        const screeningData = await addressScreening({
          variables: {
            orgID: orgId,
            input: {
              address: deliveryAddress,
              network: 'ethereum',
              asset: 'ETH',
            },
          },
        });
        debug.info('onConfirm-start', { screeningData, paymentInfo });
        if (screeningData.data?.addressScreening === RiskRating.High) {
          setError('Please contact support team to use this delivery address');
          return;
        }
      }
      if (paymentInfo?.paymentType === PaymentTypes.WIRE_TRANSFER) {
        onConfirmWireTransferPurchase(deliveryAddress);
      }
      if (paymentInfo?.paymentType === PaymentTypes.CREDIT_CARD) {
        onConfirmCreditCardPurchase(deliveryAddress);
      }
      if (paymentInfo?.paymentType === PaymentTypes.COIN_BASE) {
        onConfirmCoinbasePurchase(deliveryAddress);
      }
      if (paymentInfo?.paymentType === PaymentTypes.WALLET_CONNECT) {
        onConfirmOnChainPurchase(deliveryAddress);
      }
    } catch (e) {
      debug.error('onConfirm-start', { e });
    }
  }, [
    debug,
    onConfirmCreditCardPurchase,
    onConfirmWireTransferPurchase,
    onConfirmCoinbasePurchase,
    onConfirmOnChainPurchase,
    paymentInfo,
    orgId,
    selectedDeliveryAddress,
    addressScreening,
    enableSardine,
    connectedWalletAddress,
  ]);

  return (
    <DeliveryLayout
      onWalletChange={ handleChange }
      walletOptions={ walletOptions }
      selectedDeliveryAddress={ selectedDeliveryAddress }
      onClickConfirmPurchase={ onClickConfirmPurchase }
      organizationName={ meData?.me?.userOrgs[0]?.organization?.name }
      billingInfo={ billingInfo }
      paymentInfo={ paymentInfo }
      onClickConnectWallet={ onWalletConnect }
      connectedWalletAddress={ connectedWalletAddress }
      onDisconnect={ onDisconnect }
      error={ error }
      isLoading={ isLoading } />
  );
};
