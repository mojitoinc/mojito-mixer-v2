import React, { useCallback, useEffect, useState } from "react";
import { DropdownOptions } from "@components/shared/Dropdown";
import { usePayment } from "@lib/providers/PaymentProvider";
import {  useMutation, useQuery } from "@apollo/client";
import { meQuery } from "@lib/queries/me";
import {
  addressScreeningQuery,
} from "@lib/queries/Payment";
import { useDelivery } from "@lib/providers/DeliveryProvider";
import { useBilling } from "@lib/providers/BillingProvider";
import { PaymentTypes } from "@lib/constants/states";
import { RiskRating } from "@lib/constants/riskRating";
import DeliveryLayout from "./Delivery.layout";
import { useWeb3ModalConnect } from "@lib/state/Web3ModalConnect";

export const Delivery = () => {
  const [selectedDeliveryAddress, setSelectedDeliveryAddress] =
    useState<string>("");
  const [walletOptions, setWalletOptions] = useState<DropdownOptions[]>([]);
  const { billingInfo } = useBilling();
  const { orgId } = useDelivery();
  const { paymentInfo, setPaymentInfo,onConfirmCreditCardPurchase,onConfirmWireTransferPurchase } = usePayment();
  const { data: meData } = useQuery(meQuery);
  const [addressScreening] = useMutation(addressScreeningQuery);

  const {
    connect,
    onWalletConnect,
  } = useWeb3ModalConnect();


  const handleChange = useCallback((value: string) => {
    setSelectedDeliveryAddress(value);
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
