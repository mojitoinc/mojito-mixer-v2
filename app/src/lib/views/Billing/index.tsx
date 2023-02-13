import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
import { PaymentTypes } from '../../constants';

const BillingContainer = () => {
  const debug = useDebug('Billing');
  const { orgId, collectionItemId, quantity, vertexEnabled } = useCheckout();
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


  const paymentItem = useMemo<PaymentMethod>(() => {
    return paymentData?.getPaymentMethodList?.find(
      (item: PaymentMethod) => item.type === PaymentTypes.CREDIT_CARD && item.billingDetails,
    ) ?? paymentData?.getPaymentMethodList[0];
  }, [paymentData]);

  useEffect(() => {
    debug.info('paymentData', paymentItem);
    if (paymentItem) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }, [paymentItem, debug]);

  const onClickEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const onChangeValues = useCallback((isValid:boolean, values:BillingFormData) => {
    if (isValid) {
      console.log('isValidBillingForm', isValid, values);
      if (vertexEnabled) refetchTaxes(values);
    } else {
      setIsEditing(true);
    }
  }, [vertexEnabled, refetchTaxes]);

  const onClickContinue = useCallback(async (values:BillingFormData) => {
    if (!isEditing) {
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const isValidEmail = emailRegex.test(values?.email ?? '');
      if (!isValidEmail) return;
    }
    setBillingInfo({
      ...values,
      name: `${ values?.firstName } ${ values?.lastName }`,
    });

    setPaymentInfo({
      sessionKey: uuid(),
      ...paymentInfo,
    });
    setContainerState(ContainerTypes.PAYMENT);
  }, [
    setBillingInfo,
    isEditing,
    setContainerState,
    paymentInfo,
    setPaymentInfo,
  ]);

  return (
    <BillingView
      isEditing={ isEditing }
      onClickEdit={ onClickEdit }
      onClickContinue={ onClickContinue }
      pincodeError={ pincodeError }
      billingInfo={ billingInfo }
      paymentItem={ paymentItem }
      onChangeValues={ onChangeValues } />
  );
};

export default BillingContainer;
