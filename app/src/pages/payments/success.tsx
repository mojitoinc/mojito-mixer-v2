import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { CheckoutComponent } from '../../component/CheckoutComponent';
import { Config } from '../../lib';

const SuccessPage: NextPage = () => {
  const router = useRouter();
  const [paymentId, setPaymentId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const paymentIdParam = params.get(Config.THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY) || '';

    setPaymentId(paymentIdParam);
  }, []);

  useEffect(() => {
    if (paymentId === '') router.replace('/');
  }, [paymentId, router]);

  return paymentId ? (
    <CheckoutComponent
      success
      show
      paymentId={ paymentId } />
  ) : null;
};

export default SuccessPage;
