import React from 'react';
import { PaymentTypes } from '@lib/constants/states';
import PaymentLayout from '@lib/views/Payment/Payment.layout';

export const WireTransferStories = () => {
  return (
    <PaymentLayout
      onChangeWireTransferField={ () => undefined }
      onChoosePaymentType={ () => undefined }
      onSetWireTransferField={ async () => undefined }
      onClickDelivery={ () => undefined }
      paymentType={ PaymentTypes.WIRE_TRANSFER }
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
      }} />
  );
};
const stories = {
  title: 'views/payments/WireTransfer',
  component: PaymentLayout,
};
export default stories;
