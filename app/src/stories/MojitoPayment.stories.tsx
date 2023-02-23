import React from 'react';
import { storiesOf } from '@storybook/react';
import { MojitoCheckout } from 'lib';

const stories = storiesOf('Mojito Payment', module);

stories.add('SHOW Express checkout', () => {
  return (
    <MojitoCheckout
      show
      debug
      checkoutOptions={{
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
      userInfo={{
        email: 'Showri.srinivas@ionixxtech.com',
      }}
      show
      debug
      uiConfiguration={{
        billing: { isEnableExpressCheckout: false },
      }}
      checkoutOptions={{
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
      userInfo={{
        email: 'Showri.srinivas@ionixxtech.com',
      }}
      show
      debug
      uri=""
      uiConfiguration={{

        billing: {
          gpay: false,
          applepay: false,
        },
        payment: {
          gpay: false,
          applepay: false,
        },
      }}
      checkoutOptions={{
        orgId: 'd086ea16-d40d-454c-84a4-64b5e940670a',
        lotId: '17cd1000-323d-4a20-8e5f-7a8598ffae2a',
        quantity: 1,
        collectionItemId: '',
        invoiceId: '',
      }} />
  );
});

export default stories;
