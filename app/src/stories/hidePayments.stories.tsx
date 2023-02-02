import React from 'react';
import { MojitoCheckout } from '@lib/index';

export const HidePaymentsStories = () => {
  return (
    <MojitoCheckout
      show
      uiConfiguration={{
        billing: {
          expressCheckoutConfig: {
            gpay: false,
            applepay: false,
          },
          paymentMethods: {
            gpay: false,
            applepay: false,
          },
        },
      }}
      deliveryConfiguration={{
        orgId: 'd086ea16-d40d-454c-84a4-64b5e940670a',
        lotId: '17cd1000-323d-4a20-8e5f-7a8598ffae2a',
        quantity: 1,
        collectionItemId: '',
        invoiceId: '',
      }} />
  );
};
const stories = {
  title: 'views/HidePaymentsStories',
  component: HidePaymentsStories,
};
export default stories;
