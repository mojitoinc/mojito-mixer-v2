import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { paymentMethodsQuery } from '../../queries/billing';
import { usePayment, useCheckout } from '../../providers';
import { PaymentMethod } from '../../interfaces';
import ConfirmationView from './ConfirmationView';

const PaymentConfirmationContainer = () => {
  const { orgId } = useCheckout();
  const { paymentInfo } = usePayment();
  const [paymentStatus, setPaymentStatus] = useState<string>('');
  const { data: paymentMethodsData } = useQuery(paymentMethodsQuery, {
    variables: {
      orgID: orgId,
    },
    fetchPolicy: 'no-cache',
    skip: !orgId,
  });
  useEffect(() => {
    if (paymentMethodsData?.getPaymentMethodList) {
      const filteredData = paymentMethodsData?.getPaymentMethodList.filter((item:PaymentMethod) => item.id === paymentInfo?.paymentId);
      setPaymentStatus(filteredData[0]?.status);
    }
  }, [paymentMethodsData, paymentInfo]);
  return (
    <ConfirmationView paymentStatus={ paymentStatus } />
  );
};
export default PaymentConfirmationContainer;
