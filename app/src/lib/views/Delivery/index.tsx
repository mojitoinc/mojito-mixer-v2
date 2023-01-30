import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { DropdownOptions } from '@components/shared/Dropdown';
import DeliveryLayout from './Delivery.layout';
import { usePayment } from '@lib/providers/PaymentProvider';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { meQuery } from '@lib/queries/me';
import { createPaymentMethod, createPayment, getPaymentMethodStatus } from '@lib/queries/Payment';
import { useDelivery } from '@lib/providers/DeliveryProvider';
import { useBilling } from '@lib/providers/BillingProvider';
import { useContainer } from '@lib/providers/ContainerStateProvider';
import { ContainerTypes } from '@views/MojitoCheckout/MojitoCheckOut.layout';
import { PaymentTypes } from '@lib/constants/states';
import { cardScreeningQuery, publicKeyQuery } from '@lib/queries/creditCard';
import { formCardScreeningVariable } from './Delivery.service';

export const Delivery = () => {
  const [selectedDeliveryAddress, setSelectedDeliveryAddress] = useState<string>('');
  const [walletOptions, setWalletOptions] = useState<DropdownOptions[]>([]);
  const { billingInfo, reserveLotData, taxes }  = useBilling()
  const { orgId } = useDelivery()
  const { paymentInfo, setPaymentInfo } = usePayment()
  const { setContainerState } = useContainer()
  const [CreatePaymentMethod] = useMutation(createPaymentMethod)
  const [CreatePayment] = useMutation(createPayment)
  const {data: meData } = useQuery(meQuery)
  const [getPublicKey] = useLazyQuery(publicKeyQuery)
  const [skipPaymentMethodStatus, setSkipPaymentMethodStatus] = useState<boolean>(true)
  const {refetch: refetchPaymentMethod} = useQuery(getPaymentMethodStatus, {
    skip: skipPaymentMethodStatus
  })
  const formatWallets =  (wallets:any)=> {
    return wallets.map((item:any)=> ({
      label: item.address,
      value: item.address,
    }))
  }

  useEffect(()=> {
    let formattedWallets = []
    if (meData?.me?.wallets) {
      formattedWallets = formatWallets(meData.me?.wallets)
      formattedWallets.push({
        label: 'I don’t have a wallet / Create a new Multi-sig',
        value: 'new-multi-sig',
      })
      setWalletOptions(formattedWallets)
    }
  }, [meData])


  const handleChange = useCallback((value:string) => {
    setSelectedDeliveryAddress(value);
  }, []);

  const onConfirmCreditCardPurchase = useCallback(async()=>{
    try {
      const publickeyData = await getPublicKey({
        variables:{
          orgID:orgId
        }
      })

      
    }catch(e) {

    }
  },[orgId])

  const onClickConfirmPurchase = useCallback(async ()=> {
    let inputData:any = {}
    const copiedBillingDetails = {...billingInfo, district: billingInfo?.state, address1: billingInfo?.street1}
    delete copiedBillingDetails.state
    delete copiedBillingDetails.street1
    delete copiedBillingDetails.email
    if (paymentInfo?.paymentType === PaymentTypes.WIRE_TRANSFER) {
      inputData.paymentType = 'Wire'
      inputData.wireData = { ...paymentInfo?.wireData, billingDetails: copiedBillingDetails}      
      const result = await CreatePaymentMethod({
        variables: {
          orgID: orgId,
          input: inputData
        }
      })
      if (result?.data?.createPaymentMethod?.id) {
        if (result?.data?.createPaymentMethod?.status !== 'complete') {
          setSkipPaymentMethodStatus(false)
          const paymentStatus = refetchPaymentMethod({
            paymentMethodID: result?.data?.createPaymentMethod?.id
          })
      }
        setSkipPaymentMethodStatus(true)
        const result1 = await CreatePayment({
          variables: {
            paymentMethodID: result?.data?.createPaymentMethod?.id,
            invoiceID: reserveLotData?.invoiceID,
            metadata: {
              destinationAddress: selectedDeliveryAddress
            }
          }
        })
        setPaymentInfo({
          ...paymentInfo,
          deliveryStatus: result1?.data?.createPayment?.status,
          paymentId: result?.data?.createPaymentMethod?.id ?? '',
          destinationAddress: selectedDeliveryAddress
        })
        setContainerState(ContainerTypes.CONFIRMATION)
      }
    }
    if (paymentInfo?.paymentType === PaymentTypes.CREDIT_CARD) {
      onConfirmCreditCardPurchase();
    }
  }, [paymentInfo, reserveLotData, selectedDeliveryAddress])

  return (
    <DeliveryLayout 
      isCreditCard= {paymentInfo?.paymentType === PaymentTypes.CREDIT_CARD}
      onWalletChange = {handleChange}
      walletOptions = {walletOptions}
      selectedDeliveryAddress = {selectedDeliveryAddress}
      onClickConfirmPurchase={onClickConfirmPurchase}
      organizationName = {meData?.me?.userOrgs[0]?.organization?.name}
    />
  );
};
