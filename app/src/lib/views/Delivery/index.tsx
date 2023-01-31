import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { DropdownOptions } from '@components/shared/Dropdown';
import { PaymentData, usePayment } from '@lib/providers/PaymentProvider';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { meQuery } from '@lib/queries/me';
import { createPaymentMethod, createPayment, getPaymentMethodStatus } from '@lib/queries/Payment';
import { useDelivery } from '@lib/providers/DeliveryProvider';
import { useBilling } from '@lib/providers/BillingProvider';
import { useContainer } from '@lib/providers/ContainerStateProvider';
import { ContainerTypes } from '@views/MojitoCheckout/MojitoCheckOut.layout';
import { PaymentTypes } from '@lib/constants/states';
import { cardScreeningQuery, getPaymentNotificationQuery, publicKeyQuery } from '@lib/queries/creditCard';
import { useEncryptCardData } from '@lib/hooks/useEncryptCard';
import { CookieService } from '@lib/storage/CookieService';
import { formCardScreeningVariable, formCreatePaymentMethodObject } from './Delivery.service';
import DeliveryLayout from './Delivery.layout';

export const Delivery = () => {
  const [selectedDeliveryAddress, setSelectedDeliveryAddress] = useState<string>('');
  const [walletOptions, setWalletOptions] = useState<DropdownOptions[]>([]);
  const { billingInfo, reserveLotData, taxes } = useBilling();
  const { orgId } = useDelivery();
  const { paymentInfo, setPaymentInfo } = usePayment();
  const { setContainerState } = useContainer();
  const [CreatePaymentMethod] = useMutation(createPaymentMethod);
  const [CreatePayment] = useMutation(createPayment);
  const { data: meData } = useQuery(meQuery);
  const [encryptCardData] = useEncryptCardData({ orgID: orgId });
  const [paymentMethodStatus] = useLazyQuery(getPaymentMethodStatus);
  const [paymentNotification] = useLazyQuery(getPaymentNotificationQuery);
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

  const onConfirmCreditCardPurchase = useCallback(async () => {
    try {
      const { keyID, encryptedCardData } = await encryptCardData({
        number: paymentInfo?.creditCardData?.isNew ? paymentInfo?.creditCardData?.cardNumber?.replace(/\s/g, '') : undefined,
        cvv: paymentInfo?.creditCardData?.cvv ?? '',
      });
      let paymentMethodId = paymentInfo?.creditCardData?.isNew ? undefined : paymentInfo?.creditCardData?.cardId
      if( paymentInfo?.creditCardData?.isNew ){
        const inputData = formCreatePaymentMethodObject(orgId, paymentInfo, billingInfo, keyID, encryptedCardData);
        const createPaymentMethodResult = await CreatePaymentMethod({
          variables: {
            orgID: orgId,
            input: inputData,
          },
        });
        paymentMethodId = createPaymentMethodResult?.data?.createPaymentMethod?.id
        if (createPaymentMethodResult?.data?.createPaymentMethod?.status !== 'complete') {
          const paymentStatus = await paymentMethodStatus({
            variables: {
              paymentMethodID: paymentMethodId,
            },
          });
        }
      }
      if (paymentMethodId ) {
        const createPaymentResult = await CreatePayment({
          variables: {
            paymentMethodID: paymentMethodId,
            invoiceID: reserveLotData?.invoiceID,
            metadata: {
              destinationAddress: selectedDeliveryAddress,
              creditCardData: {
                keyID,
                encryptedData: encryptedCardData,
              },
            },
          },
        });
        const notificationData = await paymentNotification();
        const paymentData:PaymentData = {
          ...paymentInfo,
          paymentId: paymentMethodId,
          destinationAddress: selectedDeliveryAddress,
        };
        CookieService.billing.setValue(JSON.stringify(billingInfo));
        CookieService.paymentInfo.setValue(JSON.stringify(paymentData));
        CookieService.taxes.setValue(JSON.stringify(taxes));
        CookieService.reserveLotData.setValue(JSON.stringify(reserveLotData));
        window.location.href = notificationData?.data?.getPaymentNotification?.message?.redirectURL;
      }
    } catch (e) {

    }
  }, [orgId, reserveLotData, paymentInfo, billingInfo, paymentNotification, selectedDeliveryAddress, taxes]);

  const onConfirmWireTransferPurchase = useCallback(async () => {
    const inputData:any = {};
    const copiedBillingDetails = { ...billingInfo, district: billingInfo?.state, address1: billingInfo?.street1 };
    delete copiedBillingDetails.state;
    delete copiedBillingDetails.street1;
    delete copiedBillingDetails.email;
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
        const paymentStatus = await paymentMethodStatus({
          variables: {
            paymentMethodID: result?.data?.createPaymentMethod?.id,
          },
        });
      }
      const result1 = await CreatePayment({
        variables: {
          paymentMethodID: result?.data?.createPaymentMethod?.id,
          invoiceID: reserveLotData?.invoiceID,
          metadata: {
            destinationAddress: selectedDeliveryAddress,
          },
        },
      });
      const paymentData:PaymentData = {
        ...paymentInfo,
        deliveryStatus: result1?.data?.createPayment?.status,
        paymentId: result?.data?.createPaymentMethod?.id ?? '',
        destinationAddress: selectedDeliveryAddress,
      };
      setPaymentInfo(paymentData);

      CookieService.billing.setValue(JSON.stringify(billingInfo));
      CookieService.paymentInfo.setValue(JSON.stringify(paymentData));
      CookieService.taxes.setValue(JSON.stringify(taxes));
      CookieService.reserveLotData.setValue(JSON.stringify(reserveLotData));
      setContainerState(ContainerTypes.CONFIRMATION);
    }
  },[paymentInfo, billingInfo, reserveLotData, selectedDeliveryAddress, taxes])

  const onClickConfirmPurchase = useCallback(async () => {
  
    if (paymentInfo?.paymentType === PaymentTypes.WIRE_TRANSFER) {
      onConfirmWireTransferPurchase()
    }
    if (paymentInfo?.paymentType === PaymentTypes.CREDIT_CARD) {
      onConfirmCreditCardPurchase();
    }
  }, [onConfirmCreditCardPurchase,onConfirmWireTransferPurchase]);

  return (
    <DeliveryLayout
      isCreditCard={ paymentInfo?.paymentType === PaymentTypes.CREDIT_CARD }
      onWalletChange={ handleChange }
      walletOptions={ walletOptions }
      selectedDeliveryAddress={ selectedDeliveryAddress }
      onClickConfirmPurchase={ onClickConfirmPurchase }
      organizationName={ meData?.me?.userOrgs[0]?.organization?.name } />
  );
};
