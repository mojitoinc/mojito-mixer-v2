import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLazyQuery, useQuery } from '@apollo/client';
import { paymentMethodsQuery } from '../../queries/billing';
import { CreditCardFormType, PaymentMethod } from '../../interfaces';
import { PaymentTypes } from '../../constants';
import {
  ContainerTypes,
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

export const PaymentContainer = () => {
  const { orgId } = useCheckout();

  const { setPaymentInfo, paymentInfo } = usePayment();
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

  const validationSchema = Yup.object().shape({
    accountNumber: Yup.string()
      .matches(/^[\d\s]+$/, 'Invalid account number')
      .min(9, 'Invalid account number')
      .required('Please enter account number'),
    aba: Yup.string()
      .matches(/^[\d\s]+$/, 'Invalid aba')
      .min(10, 'Invalid aba')
      .required('Please enter aba'),
    bankCountry: Yup.string().required('Please select bank country'),
    bankName: Yup.string().required('Please select bank name'),
  });

  const creditCardSchema = Yup.object().shape({
    isNew: Yup.boolean(),
    expiry: Yup.string()
      .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Invalid expiry')
      .required('Please enter expiry'),
    cvv: Yup.string()
      .matches(/^[\d\s]+$/, 'Invalid account number')
      .min(3, 'Invalid CVV')
      .required('Please enter CVV'),
    cardNumber: Yup.string().when('isNew', {
      is: true,
      then: Yup.string()
        .required('Please enter card number')
        .min(12, 'Please enter valid card number'),
      otherwise: Yup.string(),
    }),
    firstName: Yup.string().when('isNew', {
      is: true,
      then: Yup.string().required('Please enter first name'),
      otherwise: Yup.string(),
    }),
    lastName: Yup.string().when('isNew', {
      is: true,
      then: Yup.string().required('Please enter last name'),
      otherwise: Yup.string(),
    }),
    cardId: Yup.string().when('isNew', {
      is: (isNew?: boolean) => !isNew,
      then: Yup.string().required('Please select a card'),
      otherwise: Yup.string().nullable(),
    }),
  });

  const { data: paymentData } = useQuery(paymentMethodsQuery, {
    variables: {
      orgID: orgId,
    },
  });

  const [cardScreening] = useLazyQuery(cardScreeningQuery);
  const { data: meData } = useQuery(meQuery);

  const [creditCardList, setCreditCardList] = useState<PaymentMethod[]>([]);

  const {
    values: wireTransferFormValues,
    handleChange: onChangeWireTransferField,
    setFieldValue: onSetWireTransferField,
    errors: wireTransferFormErrors,
    isValid: isValidWireTransfer,
  } = useFormik({
    initialValues: {
      accountNumber: paymentInfo?.wireData?.accountNumber ?? '',
      aba: paymentInfo?.wireData?.routingNumber ?? '',
      bankCountry: paymentInfo?.wireData?.bankAddress?.country ?? '',
      bankName: paymentInfo?.wireData?.bankAddress?.bankName ?? '',
    },
    validationSchema,
    onSubmit: () => undefined,
    validateOnChange: true,
    validateOnMount: true,
  });

  const {
    values: creditCardFormValues,
    handleChange: onChangeCreditCardField,
    setFieldValue: onSetCreditCardField,
    errors: creditCardFormErrors,
    isValid: isValidCreditCardValues,
    setFieldError,
  } = useFormik({
    initialValues: {
      isNew: paymentInfo?.creditCardData?.isNew ?? false,
      cardData: paymentInfo?.creditCardData?.cardData ?? undefined,
      cardId: paymentInfo?.creditCardData?.cardId ?? '',
      cardNumber: paymentInfo?.creditCardData?.cardNumber ?? '',
      cvv: paymentInfo?.creditCardData?.cvv ?? '',
      expiry: paymentInfo?.creditCardData?.expiry ?? '',
      save: paymentInfo?.creditCardData?.save ?? false,
      firstName: paymentInfo?.creditCardData?.firstName ?? '',
      lastName: paymentInfo?.creditCardData?.lastName ?? '',
    } as CreditCardFormType,
    validationSchema: creditCardSchema,
    onSubmit: () => undefined,
    validateOnChange: true,
    validateOnMount: true,
  });


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
      if (filteredCreditCards.length > 0) {
        onSetCreditCardField('cardId', filteredCreditCards[0].id);
      } else {
        onSetCreditCardField('isNew', filteredCreditCards.length === 0);
      }
      setCreditCardList(filteredCreditCards);
    } else {
      onSetCreditCardField('isNew', true);
    }
  }, [paymentData, onSetCreditCardField]);

  const onSubmitCreditCard = useCallback(async () => {
    if (isValidCreditCardValues) {
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
            setFieldError('cardNumber', 'Please enter a valid card number.');
          }
        } else {
          setPaymentInfo(paymentInfoData);
          setContainerState(ContainerTypes.DELIVERY);
        }
      } catch (e) {
        console.error('ERROR', e);
      }
    }
  }, [
    creditCardFormValues,
    isValidCreditCardValues,
    creditCardList,
    paymentInfo,
    paymentType,
    orgId,
    billingInfo,
    taxes,
    meData,
    cardScreening,
    setContainerState,
    setFieldError,
    setPaymentInfo,
  ]);

  const onSubmitWireTransfer = useCallback(() => {
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
    wireTransferFormValues,
    paymentInfo,
    setPaymentInfo,
    paymentType,
    setContainerState,
  ]);

  const onClickDelivery = useCallback(() => {
    if (paymentType === PaymentTypes.CREDIT_CARD && !billingInfo?.phoneNumber) return;
    if (paymentType === PaymentTypes.WIRE_TRANSFER && isValidWireTransfer) {
      onSubmitWireTransfer();
    }
    if (paymentType === PaymentTypes.CREDIT_CARD) {
      onSubmitCreditCard();
    }
  }, [
    paymentType,
    onSubmitCreditCard,
    onSubmitWireTransfer,
    billingInfo,
    isValidWireTransfer,
  ]);

  const buttonDisabled = useMemo<boolean>(() => {
    if (paymentType === PaymentTypes.CREDIT_CARD) {
      return !isValidCreditCardValues;
    }
    if (paymentType === PaymentTypes.WIRE_TRANSFER) {
      return !isValidWireTransfer;
    }
    return true;
  }, [isValidCreditCardValues, isValidWireTransfer, paymentType]);

  return (
    <PaymentContainerView
      paymentType={ paymentType }
      onChoosePaymentType={ onChoosePaymentType }
      wireTransferFormValues={ wireTransferFormValues }
      onChangeWireTransferField={ onChangeWireTransferField }
      onSetWireTransferField={ onSetWireTransferField }
      wireTransferFormErrors={ wireTransferFormErrors }
      creditCardFormValues={ creditCardFormValues }
      onChangeCreditCardField={ onChangeCreditCardField }
      onSetCreditCardField={ onSetCreditCardField }
      creditCardFormErrors={ creditCardFormErrors }
      creditCardList={ creditCardList }
      onClickDelivery={ onClickDelivery }
      config={ uiConfiguration?.payment }
      billingInfo={ billingInfo }
      buttonDisabled={ buttonDisabled } />
  );
};
