import MojitoCheckout from '@lib/public/MojitoCheckout';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY } from '../../lib';

const SuccessPage: NextPage = () => {
  const router = useRouter();
  const [paymentId, setPaymentId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const paymentIdParam = params.get(THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY) || '';

    setPaymentId(paymentIdParam);
  }, []);

  useEffect(() => {
    if (paymentId === '') router.replace('/');
  }, [paymentId, router]);

  const onClickGoToMarketPlace = useCallback(() => {
    router.replace('/');
  }, [router]);

  return paymentId ? (

    <MojitoCheckout
      deliveryConfiguration={{
        orgId: 'd086ea16-d40d-454c-84a4-64b5e940670a',
        lotId: '17cd1000-323d-4a20-8e5f-7a8598ffae2a',
        quantity: 1,
        paymentId,
        collectionItemId: '64e99437-ac2e-45bc-b4a6-4750985b4e81',
      }}
      show
      uiConfiguration={{
        paymentConfiguration: {
          onClickGoToMarketPlace,
        },
      }} />
  ) : null;
};

export default SuccessPage;
