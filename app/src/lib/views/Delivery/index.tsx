import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { DropdownOptions } from '@components/shared/Dropdown';
import { usePayment } from '@lib/providers/PaymentProvider';
import { useMutation, useQuery } from '@apollo/client';
import { meQuery } from '@lib/queries/me';
import { createPaymentMethod, createPayment, getPaymentMethodStatus } from '@lib/queries/Payment';
import { useDelivery } from '@lib/providers/DeliveryProvider';
import { useBilling } from '@lib/providers/BillingProvider';
import { useContainer } from '@lib/providers/ContainerStateProvider';
import { ContainerTypes } from '@views/MojitoCheckout/MojitoCheckOut.layout';
import DeliveryLayout from './Delivery.layout';

export const Delivery = () => {
  const [selectedDeliveryAddress, setSelectedDeliveryAddress] = useState<string>('');
  const [walletOptions, setWalletOptions] = useState<DropdownOptions[]>([]);
  const { billingInfo, reserveLotData } = useBilling();
  const { orgId } = useDelivery();
  const { paymentInfo, setPaymentInfo } = usePayment();
  const { setContainerState } = useContainer();
  const isCreditCard = useMemo(() => Object.keys(paymentInfo?.creditCardData ?? {}).length > 0, [paymentInfo]);
  const [CreatePaymentMethod] = useMutation(createPaymentMethod);
  const [CreatePayment] = useMutation(createPayment);
  const { data: meData } = useQuery(meQuery);
  const [skipPaymentMethodStatus, setSkipPaymentMethodStatus] = useState<boolean>(true);
  const { refetch: refetchPaymentMethod } = useQuery(getPaymentMethodStatus, {
    skip: skipPaymentMethodStatus,
  });
  const formatWallets = (wallets:any) => {
    return wallets.map((item:any) => ({
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
        value: 'new-multi-sig',
      });
      setWalletOptions(formattedWallets);
    }
  }, [meData]);


  const handleChange = useCallback((value:string) => {
    setSelectedDeliveryAddress(value);
  }, []);

  const onClickConfirmPurchase = useCallback(async () => {
    const inputData:any = {};
    const copiedBillingDetails = { ...billingInfo, district: billingInfo?.state, address1: billingInfo?.street1 };
    delete copiedBillingDetails.state;
    delete copiedBillingDetails.street1;
    delete copiedBillingDetails.email;
    if (!isCreditCard) {
      inputData.paymentType = 'Wire';
      inputData.wireData = { ...paymentInfo?.wireData, billingDetails: copiedBillingDetails };
      const result = await CreatePaymentMethod({
        variables: {
          orgID: orgId,
          input: inputData,
        },
      });
      if (result?.data?.createPaymentMethod?.id) {
        if (result?.data?.createPaymentMethod?.status !== 'complete') {
          setSkipPaymentMethodStatus(false);
          refetchPaymentMethod({
            paymentMethodID: result?.data?.createPaymentMethod?.id,
          });
        }
        setSkipPaymentMethodStatus(true);
        const result1 = await CreatePayment({
          variables: {
            paymentMethodID: result?.data?.createPaymentMethod?.id,
            invoiceID: reserveLotData?.invoiceID,
            metadata: {
              destinationAddress: selectedDeliveryAddress,
            },
          },
        });
        setPaymentInfo({
          ...paymentInfo,
          deliveryStatus: result1?.data?.createPayment?.status,
          paymentId: result?.data?.createPaymentMethod?.id ?? '',
          destinationAddress: selectedDeliveryAddress,
        });
        setContainerState(ContainerTypes.CONFIRMATION);
      }
    }
  }, [isCreditCard,
    reserveLotData,
    selectedDeliveryAddress,
    setPaymentInfo,
    setContainerState,
    CreatePayment,
    refetchPaymentMethod,
    CreatePaymentMethod,
    orgId,
    billingInfo,
    paymentInfo,
  ]);

  return (
    <DeliveryLayout
      isCreditCard={ isCreditCard }
      onWalletChange={ handleChange }
      walletOptions={ walletOptions }
      selectedDeliveryAddress={ selectedDeliveryAddress }
      onClickConfirmPurchase={ onClickConfirmPurchase }
      organizationName={ meData?.me?.userOrgs[0]?.organization?.name } />
  );
};
