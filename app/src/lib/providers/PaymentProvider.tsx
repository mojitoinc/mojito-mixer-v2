import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { ethers } from 'ethers';
import { useCreatePayment } from '../hooks';
import { CreditCardFormType, ReserveNow, CreatePaymentResult } from '../interfaces';
import { CookieService } from '../service/CookieService';
import { useDebug, useError } from '.';
import { useContainer } from './ContainerStateProvider';
import { ContainerTypes } from '../interfaces/ContextInterface';

import { useBilling } from './BillingProvider';
import { useCheckout } from './CheckoutProvider';
import { Assets } from '../assets';
import { computeValue } from '../utils/ethUtils';
import { useWeb3ModalConnect } from './Web3ModalConnect';

export interface OnChainForm {
  walletAddress: string;
}

export interface PaymentData {
  creditCardData?: CreditCardFormType;
  wireData?: {
    accountNumber: string;
    routingNumber: string;
    iban: string;
    bankAddress: {
      bankName: string;
      country: string;
      city: string;
    };
    country: string;
  };
  onChainPayment?:OnChainForm;
  paymentId?: string;
  paymentType?: string;
  destinationAddress?: string;
  deliveryStatus?: string;
  sessionKey?: string;
}

export interface PaymentMethodLimit {
  exceedCreditCard?: boolean;
  exceedWire?: boolean;
}

export interface Payment {
  paymentInfo?: PaymentData;
  setPaymentInfo: React.Dispatch<React.SetStateAction<PaymentData | undefined>>;
  onConfirmCreditCardPurchase: (deliveryAddress: string) => void;
  onConfirmWireTransferPurchase: (deliveryAddress: string) => void;
  onConfirmCoinbasePurchase: (deliveryAddress: string) => void;
  onConfirmOnChainPurchase: (deliveryAddress: string) => void;
  paymentMethods?: PaymentMethodLimit;
  setPaymentMethods: React.Dispatch<
    React.SetStateAction<PaymentMethodLimit | undefined>
  >;
}
const PaymentContext = createContext<Payment>({} as Payment);

export const PaymentProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const debug = useDebug('PaymentProvider');
  const { setError } = useError();
  const [paymentInfo, setPaymentInfo] = useState<PaymentData>();
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethodLimit>();
  const { billingInfo, collectionData, taxes, taxablePrice } = useBilling();
  const { orgId, lotId, quantity, invoiceId, vertexEnabled } = useCheckout();
  const { setContainerState } = useContainer();
  const { makeCreditCardPurchase, makeWireTransferPurchase, makeCoinbasePurchase, makeOnChainPurchase, completeOnChainPayment } = useCreatePayment(
    paymentInfo,
    orgId,
  );

  const {
    connect,
  } = useWeb3ModalConnect();

  const saveToCookies = useCallback(
    (paymentData: PaymentData, reserveLotData: ReserveNow, paymentResult?:CreatePaymentResult, txHash?: string) => {
      CookieService.billing.setValue(JSON.stringify(billingInfo));
      CookieService.paymentInfo.setValue(JSON.stringify(paymentData));
      CookieService.taxes.setValue(JSON.stringify(taxes));
      CookieService.collectionData.setValue(JSON.stringify(collectionData));
      CookieService.reserveLotData.setValue(JSON.stringify(reserveLotData));
      CookieService.paymentResult.setValue(JSON.stringify(paymentResult));
      CookieService.taxablePrice.setValue(taxablePrice);
      CookieService.vertexEnabled.setValue(vertexEnabled);
      CookieService.quantity.setValue(quantity);
      CookieService.txHash.setValue(txHash);
    },
    [billingInfo, collectionData, taxes, quantity, vertexEnabled, taxablePrice],
  );

  const onConfirmCreditCardPurchase = useCallback(
    async (deliveryAddress = '') => {
      setContainerState(ContainerTypes.LOADING);
      try {
        const paymentReceipt = await makeCreditCardPurchase({
          deliveryAddress,
          lotId,
          quantity: quantity ?? 1,
          invoiceId,
          billingInfo,
        });

        debug.success('paymentData', { paymentReceipt });

        saveToCookies(
          paymentReceipt.paymentData,
          paymentReceipt.reserveLotData,
          paymentReceipt.paymentResult,
        );
        window.location.href =
          paymentReceipt.notificationData?.getPaymentNotification?.message?.redirectURL;
      } catch (e: any) {
        const message = e.message ?? '';
        debug.error('confirm', { message });
        setError(message);
      }
    },
    [
      debug,
      billingInfo,
      invoiceId,
      lotId,
      quantity,
      setError,
      saveToCookies,
      setContainerState,
      makeCreditCardPurchase,
    ],
  );

  const onConfirmWireTransferPurchase = useCallback(
    async (deliveryAddress = '') => {
      setContainerState(ContainerTypes.LOADING);
      try {
        const paymentReceipt = await makeWireTransferPurchase({
          deliveryAddress,
          lotId,
          quantity: quantity ?? 1,
          invoiceId,
          billingInfo,
        });

        debug.success('paymentData-wire', { paymentReceipt });

        saveToCookies(
          paymentReceipt.paymentData,
          paymentReceipt.reserveLotData,
          paymentReceipt.paymentResult,
        );
        setPaymentInfo(paymentReceipt.paymentData);
        setContainerState(ContainerTypes.CONFIRMATION);
      } catch (e: any) {
        const message = e.message ?? '';
        debug.error('confirm', { message });
        setError(message);
      }
    },
    [
      debug,
      billingInfo,
      invoiceId,
      lotId,
      quantity,
      setError,
      setContainerState,
      setPaymentInfo,
      saveToCookies,
      makeWireTransferPurchase,
    ],
  );
  const onConfirmCoinbasePurchase = useCallback(
    async (deliveryAddress = '') => {
      setContainerState(ContainerTypes.LOADING);
      try {
        const paymentReceipt = await makeCoinbasePurchase({
          deliveryAddress,
          lotId,
          quantity: quantity ?? 1,
          invoiceId,
          billingInfo,
        });

        debug.success('paymentData-coinbase', { paymentReceipt });

        saveToCookies(
          paymentReceipt.paymentData,
          paymentReceipt.reserveLotData,
          paymentReceipt.paymentResult,
        );

        setPaymentInfo(paymentReceipt.paymentData);

        if (paymentReceipt.paymentResult?.details?.hostedURL) { window.location.href = paymentReceipt.paymentResult?.details?.hostedURL ?? ''; } else setContainerState(ContainerTypes.CONFIRMATION);
      } catch (e: any) {
        const message = e.message ?? '';
        debug.error('confirm', { message });
        setError(message);
      }
    },
    [
      debug,
      billingInfo,
      invoiceId,
      lotId,
      quantity,
      setError,
      setContainerState,
      setPaymentInfo,
      saveToCookies,
      makeCoinbasePurchase,
    ],
  );

  const onConfirmOnChainPurchase = useCallback(async (deliveryAddress = '') => {
    setContainerState(ContainerTypes.LOADING);
    try {
      const options = {
        deliveryAddress,
        lotId,
        quantity: quantity ?? 1,
        invoiceId,
        billingInfo,
      };
      const paymentReceipt = await makeOnChainPurchase(options);

      debug.success('paymentData-coinbase', { paymentReceipt });

      const { provider } = connect;
      if (!provider) return;
      const { signer } = connect;
      const onChainPaymentAddress = paymentReceipt.invoiceDetails?.items[0]?.onChainPaymentInfo?.onchainPaymentAddress ?? '';
      const contract = new ethers.Contract(
        onChainPaymentAddress,
        Assets.abi.abi,
        signer,
      );
      const price = vertexEnabled ? (taxes?.taxablePrice ?? 0) : taxablePrice;
      const value = await computeValue(price ?? 0);

      const nftDetails = [
        collectionData.collectionId,
        paymentReceipt.invoiceDetails?.items[0]?.onChainPaymentInfo?.ownerWalletAddress,
        Number(paymentReceipt.invoiceDetails?.items[0]?.onChainPaymentInfo?.onChainID ?? 1),
        1,
        quantity,
        deliveryAddress,
        ethers.constants.AddressZero,
        value,
      ];
      const tax = taxes?.totalTaxAmount;
      let hash = '';
      try {
        await contract.estimateGas.buy(nftDetails, tax, {
          value,
        });
        const tx = await contract.buy(nftDetails, tax, {
          value,
          gasLimit: 400000,
        });
        hash = tx.hash;

        saveToCookies(
          paymentReceipt.paymentData,
          paymentReceipt.reserveLotData,
          paymentReceipt.paymentResult,
          hash,
        );

        setPaymentInfo(paymentReceipt.paymentData);
        await provider.waitForTransaction(tx.hash, 4);
      } catch (e: any) {
        console.log('error', e);

        const message = e.message ?? '';
        debug.error('confirm', { message });
      } finally {
        try {
          await completeOnChainPayment(options, paymentReceipt, hash);
          setPaymentInfo(paymentReceipt.paymentData);
          setContainerState(ContainerTypes.CONFIRMATION);
        } catch (e: any) {
          console.log('error', e);

          const message = e.message ?? '';
          debug.error('confirm', { message });
          setError(message);
        }
      }
    } catch (e: any) {
      const message = e.message ?? '';
      debug.error('confirm', { message });
      console.log('error', e);
      setError(message);
    }
  }, [
    debug,
    billingInfo,
    invoiceId,
    lotId,
    quantity,
    setError,
    setContainerState,
    setPaymentInfo,
    saveToCookies,
    makeOnChainPurchase,
    collectionData,
    completeOnChainPayment,
    taxablePrice,
    taxes,
    vertexEnabled,
    connect,
  ]);

  const values = useMemo<Payment>(() => {
    return {
      paymentInfo,
      setPaymentInfo,
      onConfirmCreditCardPurchase,
      onConfirmWireTransferPurchase,
      onConfirmCoinbasePurchase,
      setPaymentMethods,
      paymentMethods,
      onConfirmOnChainPurchase,
    };
  }, [
    paymentInfo,
    setPaymentInfo,
    onConfirmCreditCardPurchase,
    onConfirmWireTransferPurchase,
    onConfirmCoinbasePurchase,
    onConfirmOnChainPurchase,
    setPaymentMethods,
    paymentMethods,
  ]);

  return (
    <PaymentContext.Provider value={ values }>{ children }</PaymentContext.Provider>
  );
};

export const usePayment = () => {
  return useContext(PaymentContext);
};
