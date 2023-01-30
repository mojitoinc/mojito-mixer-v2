import React, { useCallback, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PaymentLayout from './Payment.layout';
import { WireTransferFormData } from './WireTransferForm';
import { paymentMethodsQuery } from '@lib/queries/billing';
import { useQuery } from '@apollo/client';
import { useDelivery } from '@lib/providers/DeliveryProvider';
import { PaymentMethod } from '@lib/interfaces/PaymentMethods';
import { getCardTypeByValue } from '@lib/utils/payment-utils';
import { CreditCardFormType } from '@lib/interfaces/CreditCard';
import { PaymentTypes } from '@lib/constants/states';
import { usePayment } from '@lib/providers/PaymentProvider';
import { useContainer } from '@lib/providers/ContainerStateProvider';
import { ContainerTypes } from '@views/MojitoCheckout/MojitoCheckOut.layout';

export const PaymentContainer = () => {
  const { orgId } = useDelivery();

  const { setPaymentInfo } = usePayment() 
  const {  setContainerState } = useContainer()

  const [paymentType, setPaymentType] = useState<string>('');
  const onChoosePaymentType = useCallback((name: string, value: boolean) => {
    setPaymentType(value ? name : paymentType);
  }, [paymentType]);

  const validationSchema = Yup.object().shape({
    accountNumber: Yup.string().matches(/^[\d\s]+$/, 'Invalid account number').min(14, 'Invalid account number'),
    aba: Yup.string().matches(/^[\d\s]+$/, 'Invalid aba').min(14, 'Invalid aba'),
    bankCountry: Yup.string(),
    bankName: Yup.string(),
  });
  const creditCardSchema = Yup.object().shape({
    isNew: Yup.boolean(),
    expiry:Yup.string().matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/,'Invalid expiry').required('Please enter expiry'),
    cvv: Yup.string().matches(/^[\d\s]+$/, 'Invalid account number').min(3, 'Invalid CVV').required('Please enter CVV'),
    cardNumber : Yup.string().when('isNew',{
      is:true,
      then:Yup.string().required('Please enter card number').min(12,"Please enter valid card number"),
      otherwise:Yup.string()
    }),
    firstName : Yup.string().when('isNew',{
      is:true,
      then:Yup.string().required('Please enter first name'),
      otherwise:Yup.string()
    }),
    lastName : Yup.string().when('isNew',{
      is:true,
      then:Yup.string().required('Please enter last name'),
      otherwise:Yup.string()
    }),
    cardId:Yup.string().when('isNew',{
      is:(isNew?:boolean)=>!Boolean(isNew),
      then:Yup.string().required('Please select a card'),
      otherwise:Yup.string().nullable()
    }),
  });
  const { data: paymentData } = useQuery(paymentMethodsQuery, {
    variables: {
      orgID: orgId,
    },
  });

  const [creditCardList,setCreditCardList] = useState<PaymentMethod[]>([])


  useEffect(() => {
    if (paymentData) {
      const creditCards : PaymentMethod[] = paymentData?.getPaymentMethodList?.filter((item:PaymentMethod) => item.type === 'CreditCard');
      setCreditCardList(creditCards)
    }
  }, [paymentData]);

  const {
    values: wireTransferFormValues,
    handleChange: onChangeWireTransferField,
    setFieldValue: onSetWireTransferField,
    errors: wireTransferFormErrors,
  } = useFormik({
    initialValues: {
      accountNumber: '',
      aba: '',
      bankCountry: '',
      bankName: '',
    } as WireTransferFormData,
    validationSchema,
    onSubmit: () => undefined,
  });

  const {
    values: creditCardFormValues,
    handleChange: onChangeCreditCardField,
    setFieldValue: onSetCreditCardField,
    errors: creditCardFormErrors,
    isValid:isValidCreditCardValues
  } = useFormik({
    initialValues: {
      isNew : false
    } as CreditCardFormType,
    validationSchema:creditCardSchema,
    onSubmit: () => undefined,
  });

  const onSubmitCreditCard = useCallback(()=> {
    if(isValidCreditCardValues) {
      const selectedCard = creditCardList.find((item:PaymentMethod)=>item.id === creditCardFormValues?.cardId)
      setPaymentInfo({
        creditCardData:{
          ...creditCardFormValues,
          cardData:selectedCard
        }
      })
      setContainerState(ContainerTypes.DELIVERY)
    }
  },[creditCardFormValues,isValidCreditCardValues,creditCardList])

  const onClickSubmit = useCallback(()=>{
    if(paymentType === PaymentTypes.CREDIT_CARD ) {
      onSubmitCreditCard()
    }
  },[paymentType,onSubmitCreditCard])

  return (
    <PaymentLayout 
    paymentType={paymentType}
    onChoosePaymentType={onChoosePaymentType}
    wireTransferFormValues={wireTransferFormValues}
    onChangeWireTransferField={onChangeWireTransferField}
    onSetWireTransferField={onSetWireTransferField}
    wireTransferFormErrors={wireTransferFormErrors}
    creditCardFormValues={creditCardFormValues}
    onChangeCreditCardField={onChangeCreditCardField}
    onSetCreditCardField={onSetCreditCardField}
    creditCardFormErrors={creditCardFormErrors}
    creditCardList={creditCardList}
    onClickSubmit={onClickSubmit}
    />
  );
};
