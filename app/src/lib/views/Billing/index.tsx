import { BillingFormData, useBilling } from '@lib/providers/BillingProvider';
import React, { useCallback, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useQuery } from '@apollo/client';
import { paymentMethodsQuery } from '@lib/queries/billing';
import { useDelivery } from '@lib/providers/DeliveryProvider';
import { PaymentMethod } from '@lib/interfaces/PaymentMethods';
import * as Yup from 'yup';
import BillingView from './BillingView';

const BillingContainer = () => {
  const { orgId } = useDelivery();
  const { setBillingInfo } = useBilling();

  const [isEditing, setIsEditing] = useState<boolean>(true);

  const { data: paymentData } = useQuery(paymentMethodsQuery, {
    variables: {
      orgID: orgId,
    },
  });

  const schema = Yup.object().shape({
    country: Yup.string().required('Please select a country'),
    state: Yup.string().required('Please select a state'),
    city: Yup.string().required('Please select a city'),
    postalCode: Yup.string().required('Please enter zipcode'),
    email: Yup.string().email().required('Please enter email'),
    phoneNumber: Yup.string().required('Please enter a mobile number'),
  });


  const { values, errors, handleChange, handleSubmit, setValues } = useFormik({
    initialValues: {
    } as BillingFormData,
    onSubmit: () => undefined,
    validationSchema: schema,
  });

  useEffect(() => {
    if (paymentData) {
      const paymentItem : PaymentMethod = paymentData?.getPaymentMethodList?.find((item:PaymentMethod) => item.billingDetails);
      if (paymentItem) {
        setIsEditing(false);
        setValues({
          city: paymentItem?.billingDetails?.city,
          country: paymentItem?.billingDetails?.country,
          postalCode: paymentItem?.billingDetails?.postalCode,
          state: paymentItem?.billingDetails?.district,
          email: paymentItem?.metadata?.email,
          phoneNumber: paymentItem?.metadata?.phoneNumber,
          street1: paymentItem?.billingDetails?.address1,
        });
      } else {
        setIsEditing(true);
      }
    }
  }, [paymentData, setValues]);

  useEffect(() => {
    setBillingInfo({ ...values });
  }, [values, setBillingInfo]);

  const onClickEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const onClickContinue = useCallback(async () => {
    const isValidEmail = await schema.isValid({
      email: values?.email,
    });
    if (isValidEmail) {

    }
  }, [values, schema]);

  return (
    <BillingView
      isEditing={ isEditing }
      values={ values }
      errors={ errors }
      onChange={ handleChange }
      handleSubmit={ handleSubmit }
      onClickEdit={ onClickEdit }
      onClickContinue={ onClickContinue } />
  );
};

export default BillingContainer;
