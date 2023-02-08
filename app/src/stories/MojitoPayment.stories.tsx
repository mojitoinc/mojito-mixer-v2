import React from 'react';
import { storiesOf } from '@storybook/react';
import MojitoCheckout from '@lib/public/MojitoCheckout';

const stories = storiesOf('Mojito Payment', module);

stories.add('SHOW Express checkout', () => {
  return (
    <MojitoCheckout
      show
      debug
      deliveryConfiguration={{
        orgId: 'd086ea16-d40d-454c-84a4-64b5e940670a',
        lotId: '17cd1000-323d-4a20-8e5f-7a8598ffae2a',
        quantity: 1,
        collectionItemId: '',
        invoiceId: '',
      }} />
  );
});

stories.add('Hide Express checkout', () => {
  return (
    <MojitoCheckout
      show
      debug
      uiConfiguration={{
        billing: {
          hideExpressCheckout: true,
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
});

stories.add('Hide GooglePay', () => {
  return (
    <MojitoCheckout
      show
      debug
      uri={''}
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
});

export default stories;
