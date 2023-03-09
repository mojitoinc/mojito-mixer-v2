import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import ConfirmationView from './ConfirmationView';
import { invoiceDetailsQuery } from '../../queries/invoiceDetails';
import { usePaymentInfo } from '../../hooks';

const PaymentConfirmationContainer = () => {
  const { lotData } = usePaymentInfo();
  const [paymentStatus, setPaymentStatus] = useState<string>('');
  const { data: invoiceData } = useQuery(invoiceDetailsQuery, {
    variables: {
      invoiceID: lotData?.invoiceID,
    },
    skip: !lotData?.invoiceID,
    fetchPolicy: 'network-only',
  });

  console.log('invoiceData?.getInvoiceDetails?.status', invoiceData?.getInvoiceDetails.status);

  useEffect(() => {
    if (invoiceData?.getInvoiceDetails) {
      setPaymentStatus(invoiceData?.getInvoiceDetails.status);
    }
  }, [invoiceData]);
  return (
    <ConfirmationView paymentStatus={ paymentStatus } />
  );
};
export default PaymentConfirmationContainer;
