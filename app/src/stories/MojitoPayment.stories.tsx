import React from 'react';
import { storiesOf } from '@storybook/react';
import MojitoCheckout from '@lib/public/MojitoCheckout';

const stories = storiesOf('Payment', module);

stories.add('SHOW Express checkout', () => {
  return (
    <MojitoCheckout
      show
      deliveryConfiguration={{
        orgId: 'd086ea16-d40d-454c-84a4-64b5e940670a',
        lotId: '17cd1000-323d-4a20-8e5f-7a8598ffae2a',
        itemCount: 1,
      }} />
  );
});

stories.add('Hide Express checkout', () => {
  return (
    <MojitoCheckout
      show
      uiConfiguration={{
        billing: {
          hideExpressCheckout: true,
          expressCheckoutConfig: {
            gpay: true,
            applepay: true,
            walletConnect: true,
            metaMask: true,
          },
          paymentMethods: {
            creditCard: true,
            gpay: true,
            applepay: true,
            walletConnect: true,
            wire: true,
          },
        },
      }}
      deliveryConfiguration={{
        orgId: 'd086ea16-d40d-454c-84a4-64b5e940670a',
        lotId: '17cd1000-323d-4a20-8e5f-7a8598ffae2a',
        itemCount: 1,
      }} />
  );
});

export default stories;
