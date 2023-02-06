import React, { useCallback, useEffect, useState } from "react";
import { DropdownOptions } from "@components/shared/Dropdown";
import { PaymentData, usePayment } from "@lib/providers/PaymentProvider";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { meQuery } from "@lib/queries/me";
import {
  addressScreeningQuery,
  createPaymentMethodQuery,
  createPaymentQuery,
  getPaymentMethodStatus,
} from "@lib/queries/Payment";
import { reserveNowBuyLotQuery } from "@lib/queries/invoiceDetails";
import { useDelivery } from "@lib/providers/DeliveryProvider";
import { useBilling } from "@lib/providers/BillingProvider";
import { useContainer } from "@lib/providers/ContainerStateProvider";
import { ContainerTypes } from "@views/MojitoCheckout/MojitoCheckOut.layout";
import { PaymentTypes } from "@lib/constants/states";
import { getPaymentNotificationQuery } from "@lib/queries/creditCard";
import { useEncryptCardData } from "@lib/hooks/useEncryptCard";
import { CookieService } from "@lib/storage/CookieService";
import { ReserveNow } from "@lib/interfaces/Invoice";
import { RiskRating } from "@lib/constants/riskRating";
import { formCreatePaymentMethodObject } from "./Delivery.service";
import DeliveryLayout from "./Delivery.layout";
import { useWeb3ModalConnect } from "@lib/state/Web3ModalConnect";

export const Delivery = () => {
  const [selectedDeliveryAddress, setSelectedDeliveryAddress] =
    useState<string>("");
  const [walletOptions, setWalletOptions] = useState<DropdownOptions[]>([]);
  const { billingInfo, collectionData, taxes } = useBilling();
  const { orgId, lotId, quantity, invoiceId } = useDelivery();
  const { paymentInfo, setPaymentInfo,onConfirmCreditCardPurchase,onConfirmWireTransferPurchase } = usePayment();
  const { setContainerState } = useContainer();
  const [createPaymentMethod] = useMutation(createPaymentMethodQuery);
  const [createPayment] = useMutation(createPaymentQuery);
  const { data: meData } = useQuery(meQuery);
  const [encryptCardData] = useEncryptCardData({ orgID: orgId });
  const [paymentMethodStatus] = useLazyQuery(getPaymentMethodStatus);
  const [paymentNotification] = useLazyQuery(getPaymentNotificationQuery);
  const [reserveNow] = useMutation(reserveNowBuyLotQuery);
  const [addressScreening] = useMutation(addressScreeningQuery);

  const {
    connect,
    onWalletConnect,
  } = useWeb3ModalConnect();


  const handleChange = useCallback((value: string) => {
    setSelectedDeliveryAddress(value);
    setPaymentInfo({
      ...paymentInfo,
      destinationAddress:value,
    })
  }, [paymentInfo]);

  useEffect(()=>{
    if(connect?.account) {
      handleChange(connect?.account)
    }
  },[connect])

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
        label: "I don’t have a wallet / Create a new Multi-sig",
        value: "new-multi-sig",
      });
      setWalletOptions(formattedWallets);
    }
  }, [meData]);

  const getInvoiceData = useCallback(async () => {
    if (invoiceId) {
      return {
        invoiceID: invoiceId,
        items: [],
        status: '',
        __typename: 'BuyNowReserve',
      } as ReserveNow;
    }
    const reserveData = await reserveNow({
      variables: {
        input: {
          marketplaceBuyNowLotID: lotId,
          itemCount: quantity,
        },
      },
    });

    return reserveData?.data?.reserveMarketplaceBuyNowLot?.invoice as ReserveNow;
  }, [invoiceId, reserveNow, lotId, quantity]);



  const onClickConfirmPurchase = useCallback(async () => {
    try {
      const screeningData = await addressScreening({
        variables: {
          orgID: orgId,
          input: {
            address: selectedDeliveryAddress,
            network: "ethereum",
            asset: "ETH",
          },
        },
      });
      if (screeningData.data?.addressScreening === RiskRating.High) {
        return;
      }
      if (paymentInfo?.paymentType === PaymentTypes.WIRE_TRANSFER) {
        onConfirmWireTransferPurchase(selectedDeliveryAddress);
      }
      if (paymentInfo?.paymentType === PaymentTypes.CREDIT_CARD) {
        onConfirmCreditCardPurchase(selectedDeliveryAddress);
      }
    } catch (e) {
      console.error("ERROR", e);
    }
  }, [
    onConfirmCreditCardPurchase,
    onConfirmWireTransferPurchase,
    paymentInfo,
    orgId,
    selectedDeliveryAddress,
    addressScreening,
  ]);

useEffect(() => {
    if (connect?.account) {

    }
}, [connect]);


  return (
    <DeliveryLayout
      onWalletChange={handleChange}
      walletOptions={walletOptions}
      selectedDeliveryAddress={selectedDeliveryAddress}
      onClickConfirmPurchase={onClickConfirmPurchase}
      organizationName={meData?.me?.userOrgs[0]?.organization?.name}
      billingInfo={billingInfo}
      paymentInfo={paymentInfo}
      onClickConnectWallet={onWalletConnect}
    />
  );
};
