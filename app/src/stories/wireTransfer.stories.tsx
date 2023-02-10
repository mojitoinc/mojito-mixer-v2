import React from 'react';
import { PaymentTypes } from '@lib/constants';
import PaymentContainer from '@views/Payment/PaymentContainer';

export const WireTransferStories = () => {
  return (
    <PaymentContainer
      billingInfo={{}}
      creditCardList={ [] }
      onChoosePaymentType={ () => undefined }
      onSubmitCreditCard={ () => undefined }
      onSubmitWireTransfer={ () => undefined }
      paymentType={ PaymentTypes.WIRE_TRANSFER }
      config={{
        gpay: true,
        applepay: true,
        walletConnect: true,
        wire: true,
        creditCard: true,
      }}
      paymentMethodLimit={{
        exceedCreditCard: true,
        exceedWire: true,
      }}
      paymentInfo={{}} />
  );
};
const stories = {
  title: 'views/payments/WireTransfer',
  component: PaymentContainer,
};
export default stories;
