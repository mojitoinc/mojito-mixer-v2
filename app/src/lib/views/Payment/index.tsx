import React, { useCallback, useEffect, useState } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { paymentMethodsQuery } from '../../queries/billing';
import { CreditCardFormType, PaymentMethod } from '../../interfaces';
import { PaymentTypes } from '../../constants';
import { ContainerTypes } from '../../interfaces/ContextInterface';
import {
  useContainer,
  useCheckout,
  useBilling,
  useUIConfiguration,
  PaymentData,
  usePayment,
} from '../../providers';
import { formCardScreeningVariable } from '../Delivery/Delivery.service';
import { cardScreeningQuery } from '../../queries/creditCard';
import { meQuery } from '../../queries/me';
import PaymentContainerView from './PaymentContainer';
import { WireTransferFormData } from './WireTransferForm';

export const PaymentContainer = () => {
  const { orgId } = useCheckout();

  const { setPaymentInfo, paymentInfo, paymentMethods } = usePayment();
  const { setContainerState } = useContainer();

  const { billingInfo, taxes } = useBilling();
  const uiConfiguration = useUIConfiguration();

  const [paymentType, setPaymentType] = useState<string>(
    PaymentTypes.CREDIT_CARD,
  );
  const onChoosePaymentType = useCallback(
    (name: PaymentTypes, value: boolean) => {
      setPaymentType(value ? name : paymentType);
    },
    [paymentType],
  );
  useEffect(() => {
    setPaymentType(paymentInfo?.paymentType ?? PaymentTypes.CREDIT_CARD);
  }, [paymentInfo]);

  const { data: paymentData } = useQuery(paymentMethodsQuery, {
    variables: {
      orgID: orgId,
    },
  });

  const [cardScreening] = useLazyQuery(cardScreeningQuery);
  const { data: meData } = useQuery(meQuery);
  const [creditCardList, setCreditCardList] = useState<PaymentMethod[]>([]);
  const [screeningError, setScreeningError] = useState<string>();


  useEffect(() => {
    if (paymentData) {
      const creditCards: PaymentMethod[] =
        paymentData?.getPaymentMethodList?.filter(
          (item: PaymentMethod) => item.type === 'CreditCard',
        );

      const filteredCreditCards = creditCards.filter(
        (item, index, array) => index ===
          array.findIndex(
            foundItem => foundItem.last4Digit === item.last4Digit &&
              foundItem.network === item.network,
          ),
      );
      setCreditCardList(filteredCreditCards);
    }
  }, [paymentData]);

  const onSubmitCreditCard = useCallback(async (creditCardFormValues : CreditCardFormType) => {
    const selectedCard = creditCardList.find(
      (item: PaymentMethod) => item.id === creditCardFormValues?.cardId,
    );
    const paymentInfoData: PaymentData = {
      ...paymentInfo,
      paymentType,
      creditCardData: {
        ...creditCardFormValues,
        cardData: selectedCard,
      },
    };
    try {
      if (creditCardFormValues?.isNew) {
        const variables = formCardScreeningVariable(
          orgId ?? '',
          paymentInfoData,
          billingInfo,
          taxes,
          meData,
        );
        const cardScreeningData = await cardScreening({
          variables,
        });

        if (cardScreeningData.data?.cardScreening?.level !== 'high') {
          setPaymentInfo(paymentInfoData);
          setContainerState(ContainerTypes.DELIVERY);
        } else {
          setScreeningError('Please enter a valid card number.');
        }
      } else {
        setPaymentInfo(paymentInfoData);
        setContainerState(ContainerTypes.DELIVERY);
      }
    } catch (e) {
      console.error('ERROR', e);
    }
  }, [
    creditCardList,
    paymentInfo,
    paymentType,
    orgId,
    billingInfo,
    taxes,
    meData,
    cardScreening,
    setContainerState,
    setPaymentInfo,
  ]);

  const onSubmitWireTransfer = useCallback((wireTransferFormValues : WireTransferFormData) => {
    setPaymentInfo({
      ...paymentInfo,
      paymentType,
      wireData: {
        accountNumber: wireTransferFormValues.accountNumber.split(' ').join(''),
        routingNumber: wireTransferFormValues.aba.split(' ').join(''),
        bankAddress: {
          bankName: wireTransferFormValues.bankName,
          country: wireTransferFormValues.bankCountry,
        },
      },
    });
    setContainerState(ContainerTypes.DELIVERY);
  }, [
    paymentInfo,
    setPaymentInfo,
    paymentType,
    setContainerState,
  ]);


  return (
    <PaymentContainerView
      paymentType={ paymentType }
      onChoosePaymentType={ onChoosePaymentType }
      creditCardList={ creditCardList }
      config={ uiConfiguration?.payment }
      billingInfo={ billingInfo }
      paymentMethodLimit={ paymentMethods }
      screeningError={ screeningError }
      paymentInfo={ paymentInfo }
      onSubmitWireTransfer={ onSubmitWireTransfer }
      onSubmitCreditCard={ onSubmitCreditCard } />
  );
};
