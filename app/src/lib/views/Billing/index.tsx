import { BillingFormData, useBilling } from '@lib/providers/BillingProvider';
import React, { useCallback, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useLazyQuery } from '@apollo/client';
import { paymentMethodsQuery } from '@lib/queries/billing';
import { useDelivery } from '@lib/providers/DeliveryProvider';
import { PaymentMethod } from '@lib/interfaces';
import * as Yup from 'yup';
import { useContainer } from '@lib/providers/ContainerStateProvider';
import { ContainerTypes } from '@views/MojitoCheckout/MojitoCheckOut.layout';
import { uuid } from 'uuidv4';
import { usePayment } from '@lib/providers/PaymentProvider';
import { useDebug } from '@lib/providers';
import BillingView from './BillingView';

const BillingContainer = () => {
  const debug = useDebug('Billing');
  const { orgId } = useDelivery();
  const { setBillingInfo, billingInfo,refetchTaxes } = useBilling();

  const [isEditing, setIsEditing] = useState<boolean>(true);
  const { setContainerState } = useContainer();
  const { setPaymentInfo,paymentInfo } = usePayment();

  const [fetchBilling, { data: paymentData }] = useLazyQuery(paymentMethodsQuery);

  useEffect(() => {
    debug.info('load', {orgId})
    if (orgId) {
      fetchBilling({
        variables: {
          orgID: orgId,
        },
      });
    }
  }, [fetchBilling, orgId]);

  const schema = Yup.object().shape({
    country: Yup.string().required('Please select a country'),
    state: Yup.string().required('Please select a state'),
    city: Yup.string().required('Please select a city'),
    postalCode: Yup.string().required('Please enter zipcode'),
    email: Yup.string()
      .email('Please enter valid email')
      .required('Please enter email'),
    phoneNumber: Yup.string().required('Please enter a mobile number'),
  });

  const { values, errors, handleChange, setValues, isValid } = useFormik({
    initialValues: {
      email: '',
      country: '',
      state: '',
      city: '',
      postalCode: '',
      phoneNumber: '',
      street1: '',
      name: '',
    } as BillingFormData,
    onSubmit: () => undefined,
    validationSchema: schema,
  });

  const setBillingValues = useCallback(() => {
    const paymentItem: PaymentMethod = paymentData?.getPaymentMethodList?.find(
      (item: PaymentMethod) => item.type === 'CreditCard' && item.billingDetails,
    );
    if (paymentItem) {
      setIsEditing(false);
      const billingValues: BillingFormData = {
        city: billingInfo?.city ?? paymentItem?.billingDetails?.city,
        country: billingInfo?.country ?? paymentItem?.billingDetails?.country,
        postalCode:
          billingInfo?.postalCode ?? paymentItem?.billingDetails?.postalCode,
        state: billingInfo?.state ?? paymentItem?.billingDetails?.district,
        email: billingInfo?.email ?? paymentItem?.metadata?.email,
        phoneNumber:
          billingInfo?.phoneNumber ?? paymentItem?.metadata?.phoneNumber,
        street1: billingInfo?.street1 ?? paymentItem?.billingDetails?.address1,
        name: billingInfo?.name ?? paymentItem?.billingDetails?.name,
      };
      setValues(billingValues);
    } else {
      setIsEditing(true);
    }
  }, [billingInfo, paymentData, setValues]);

  useEffect(() => {
    debug.info('paymentData',paymentData)
    if (paymentData) {
      setBillingValues();
    }
  }, [paymentData, setBillingValues]);

  const onClickEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  useEffect(()=>{
    refetchTaxes(values)
  },[values])

  const onClickContinue = useCallback(async () => {
    if (isEditing && !isValid) return;
    if (!isEditing) {
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const isValidEmail = emailRegex.test(values?.email ?? '');
      if (!isValidEmail) return;
    }
    setBillingInfo({ ...values });

    setPaymentInfo({
      sessionKey: uuid(),
      ...paymentInfo,
    });
    setContainerState(ContainerTypes.PAYMENT);
  }, [values, setBillingInfo, isEditing, isValid, setContainerState,paymentInfo]);

  return (
    <BillingView
      isEditing={ isEditing }
      values={ values }
      errors={ errors }
      onChange={ handleChange }
      onClickEdit={ onClickEdit }
      onClickContinue={ onClickContinue } />
  );
};

export default BillingContainer;
