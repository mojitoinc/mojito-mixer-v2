import React from 'react';
import { PaymentTypes } from '@lib/constants';
import PaymentContainer from '@views/Payment/PaymentContainer';

export const CreditCardStories = () => {
  return (
    <PaymentContainer
      onSubmitCoinBase={ () => undefined }
      billingInfo={{}}
      creditCardList={ [] }
      onChoosePaymentType={ () => undefined }
      onSubmitCreditCard={ () => undefined }
      onSubmitWireTransfer={ () => undefined }
      paymentType={ PaymentTypes.CREDIT_CARD }
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
  title: 'views/payments/CreditCard',
  component: PaymentContainer,
};
export default stories;
