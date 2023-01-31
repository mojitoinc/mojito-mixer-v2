import { MixTheme } from '@lib/theme/ThemeOptions';
import { Box, Card, Typography, useTheme } from '@mui/material';
import React from 'react';

import { PaymentTypes } from '@lib/constants/states';
import { Icons } from '@lib/assets';
import Button from '@components/shared/Button';
import { FormikErrors } from 'formik';
import { CreditCardForm } from './CreditCardForm';
import { WireTransferForm, WireTransferFormData } from './WireTransferForm';
import { PaymentMethod } from './PaymentMethod.layout';
import { PaymentInfoCards } from './InfoCards';

interface PaymentLayoutProps {
  paymentType: string;
  onChoosePaymentType: (name:PaymentTypes, value: boolean)=>void;
  wireTransferFormValues:WireTransferFormData;

  onChangeWireTransferField: any;
  onSetWireTransferField: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<WireTransferFormData>>;
  wireTransferFormErrors: FormikErrors<WireTransferFormData>;
  onClickDelivery: ()=>void;
  config:{
    gpay: boolean;
    applepay: boolean;
    walletConnect: boolean;
    wire: boolean;
    creditCard: boolean;
  }
}

const PaymentLayout = ({
  paymentType,
  onChoosePaymentType,
  wireTransferFormValues,
  onChangeWireTransferField,
  onSetWireTransferField,
  wireTransferFormErrors,
  onClickDelivery,
  config,
}:PaymentLayoutProps) => {
  const theme = useTheme<MixTheme>();

  return (
    <>
      <PaymentInfoCards />
      <Card
        sx={{
          border: `1px solid ${ theme.global?.cardBorder }`,
          backgroundColor: theme.global?.cardBackground,
          boxShadow: `0px 4px 16px ${ theme.global?.cardShadow }`,
          padding: '24px',
        }}>
        <Typography sx={{ fontSize: '20px' }}>Payment Method</Typography>
        {
          config.creditCard && (
            <PaymentMethod
              logo={ Icons.creditCards }
              isSelected={ paymentType }
              name="Credit Card"
              type={ PaymentTypes.CREDIT_CARD }
              bodyContent={ <CreditCardForm /> }
              onChoosePaymentType={ onChoosePaymentType } />
          )
}
        {
          config.walletConnect && (
            <PaymentMethod
              logo={ Icons.walletConnect }
              isSelected={ paymentType }
              name="Walletconnect"
              type={ PaymentTypes.WALLET_CONNECT }
              bodyContent={ <>Test</> }
              onChoosePaymentType={ onChoosePaymentType } />
          )
}
        {
          config.applepay && (
            <PaymentMethod
              logo={ Icons.applepayDark }
              isSelected={ paymentType }
              name="Apple Pay"
              type={ PaymentTypes.APPLE_PAY }
              bodyContent={ <>Test</> }
              onChoosePaymentType={ onChoosePaymentType } />
          )
}
        {
          config.gpay && (
            <PaymentMethod
              logo={ Icons.gpayDark }
              isSelected={ paymentType }
              name="Google Pay"
              type={ PaymentTypes.GOOGLE_PAY }
              bodyContent={ <>Test</> }
              onChoosePaymentType={ onChoosePaymentType } />
          )
}
        {
          config.wire && (
            <PaymentMethod
              logo={ Icons.wireTransfer }
              isSelected={ paymentType }
              name="Wire Transfer"
              type={ PaymentTypes.WIRE_TRANSFER }
              bodyContent={ (
                <WireTransferForm
                  values={ wireTransferFormValues }
                  handleChange={ onChangeWireTransferField }
                  setFieldValue={ onSetWireTransferField }
                  errors={ wireTransferFormErrors } />
              ) }
              onChoosePaymentType={ onChoosePaymentType } />
          )
}

        <Box display="flex" marginTop={ 2 } alignItems="center">
          <img src={ Icons.lock } height={ 28 } width={ 28 } alt="lock-icon" />
          <Typography variant="body2" sx={{ marginLeft: 1 }}>
            We protect your payment information using encryption to provide
            bank-level security
          </Typography>
        </Box>
      </Card>
      <Box display="flex" justifyContent="flex-end">
        <Button
          title="Continue to Delivery"
          backgroundColor={ theme.global?.checkOutColors?.continueButtonBackground }
          textColor={ theme.global?.checkOutColors?.continueButtonTextColor }
          onClick={ onClickDelivery }
          sx={{
            margin: '24px 0',
          }} />
      </Box>
    </>
  );
};

export default PaymentLayout;
