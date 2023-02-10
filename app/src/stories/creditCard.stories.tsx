import React from 'react';
import { PaymentTypes } from '@lib/constants';
import PaymentContainer from '@views/Payment/PaymentContainer';

export const CreditCardStories = () => {
  return (
    <PaymentContainer
      creditCardFormErrors={{}}
      creditCardFormValues={{
        isNew: false,
      }}
      billingInfo={{}}
      creditCardList={ [] }
      onChangeCreditCardField={ () => undefined }
      onSetCreditCardField={ async () => undefined }
      onChangeWireTransferField={ () => undefined }
      onChoosePaymentType={ () => undefined }
      onSetWireTransferField={ async () => undefined }
      onClickDelivery={ () => undefined }
      paymentType={ PaymentTypes.CREDIT_CARD }
      wireTransferFormErrors={{}}
      wireTransferFormValues={{
        aba: '',
        accountNumber: '',
        bankCountry: 'US',
        bankName: 'Bank of America',
      }}
      config={{
        gpay: true,
        applepay: true,
        walletConnect: true,
        wire: true,
        creditCard: true,
      }}
      buttonDisabled={ false }
      paymentMethodLimit={{
        exceedCreditCard: true,
        exceedWire: true,
      }} />
  );
};
const stories = {
  title: 'views/payments/CreditCard',
  component: PaymentContainer,
};
export default stories;
