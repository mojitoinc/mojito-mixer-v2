import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLazyQuery, useQuery } from '@apollo/client';
import { uuid } from 'uuidv4';
import {
  paymentMethodsQuery,
  validatePaymentLimitQuery,
} from '../../queries/billing';
import { PaymentMethod } from '../../interfaces';
import {
  useContainer,
  useCheckout,
  BillingFormData,
  useBilling,
  useDebug,
  usePayment,
} from '../../providers';
import BillingView from './BillingView';
import { ContainerTypes } from '../../interfaces/ContextInterface';

const BillingContainer = () => {
  const debug = useDebug('Billing');
  const { orgId, collectionItemId, quantity } = useCheckout();
  const { setBillingInfo, billingInfo, refetchTaxes, pincodeError } =
    useBilling();

  const [isEditing, setIsEditing] = useState<boolean>(true);
  const { setContainerState } = useContainer();
  const { setPaymentInfo, paymentInfo, setPaymentMethods } = usePayment();

  const [fetchBilling, { data: paymentData }] =
    useLazyQuery(paymentMethodsQuery);
  const { data: validPaymnetMethods, loading: validpaymentMethodLoading } =
    useQuery(validatePaymentLimitQuery, {
      variables: {
        collectionId: collectionItemId,
        itemsCount: quantity,
      },
      skip: !collectionItemId || !quantity,
    });

  useEffect(() => {
    if (
      validPaymnetMethods?.validatePaymentLimit &&
      !validpaymentMethodLoading
    ) {
      setPaymentMethods({
        exceedCreditCard:
          !validPaymnetMethods?.validatePaymentLimit?.creditCard
            ?.isLimitExceeded,
        exceedWire:
          !validPaymnetMethods?.validatePaymentLimit?.wire?.isLimitExceeded,
      });
    }
  }, [validPaymnetMethods, setPaymentMethods, validpaymentMethodLoading]);

  useEffect(() => {
    debug.info('load', { orgId });
    if (orgId) {
      fetchBilling({
        variables: {
          orgID: orgId,
        },
      });
    }
  }, [fetchBilling, orgId, debug]);

  const schema = Yup.object().shape({
    country: Yup.string().required('Please select a country'),
    state: Yup.string().required('Please select a state'),
    city: Yup.string().required('Please select a city'),
    postalCode: Yup.string().required('Please enter zipcode'),
    email: Yup.string()
      .email('Please enter valid email')
      .required('Please enter email'),
    phoneNumber: Yup.string().required('Please enter a mobile number'),
    street1: Yup.string().required('Please enter your address'),
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

  const isValidBillingForm = useMemo<boolean>(() => {
    return !(
      errors?.country ||
      errors?.state ||
      errors?.city ||
      errors?.postalCode ||
      errors?.phoneNumber ||
      errors?.name
    );
  }, [errors]);

  const setBillingValues = useCallback(async () => {
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
    debug.info('paymentData', paymentData);
    if (paymentData) {
      setBillingValues();
    }
  }, [paymentData, setBillingValues, debug]);

  const onClickEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  useEffect(() => {
    if (isValidBillingForm) {
      refetchTaxes(values);
    } else {
      setIsEditing(true);
    }
  }, [values, refetchTaxes, isValidBillingForm]);

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
  }, [
    values,
    setBillingInfo,
    isEditing,
    isValid,
    setContainerState,
    paymentInfo,
    setPaymentInfo,
  ]);

  return (
    <BillingView
      isEditing={ isEditing }
      values={ values }
      errors={ errors }
      onChange={ handleChange }
      onClickEdit={ onClickEdit }
      onClickContinue={ onClickContinue }
      isValidBillingForm={ isValidBillingForm }
      pincodeError={ pincodeError }
      isValid={ isValid } />
  );
};

export default BillingContainer;
