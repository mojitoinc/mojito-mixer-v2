import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { paymentMethodsQuery } from '@lib/queries/billing';
import { usePayment, useDelivery } from '@lib/providers';
import { PaymentMethod } from '@lib/interfaces';
import ConfirmationView from './ConfirmationView';

const ConfirmationContainer = () => {
  const { orgId } = useDelivery();
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
export default ConfirmationContainer;
