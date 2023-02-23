import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { MojitoCheckout, THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY } from 'lib';

const SuccessPage: NextPage = () => {
  const router = useRouter();
  const [paymentId, setPaymentId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const paymentIdParam = params.get(THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY) || '';

    setPaymentId(paymentIdParam);
  }, []);

  useEffect(() => {
    console.log('paymentId', { paymentId });
    if (paymentId === '') router.replace('/');
  }, [paymentId, router]);

  const onClickGoToMarketPlace = useCallback(() => {
    router.replace('/');
  }, [router]);

  return paymentId ? (

    <MojitoCheckout
      userInfo={{
        email: 'Showrisrinivas@ionixxtech.com',
      }}
      checkoutOptions={{
        paymentId,
      }}
      show
      uiConfiguration={{
        paymentConfirmation: {
          onGoTo: onClickGoToMarketPlace,
        },
      }} />
  ) : null;
};

export default SuccessPage;
