import { Box, Card, Typography, useTheme } from '@mui/material';
import React from 'react';
import { FormikErrors } from 'formik';
import { MixTheme } from '../../theme';

import { PaymentTypes } from '../../constants';
import { Icons } from '../../assets';
import { Button } from '../../components';
import { CreditCardFormType, PaymentMethod } from '../../interfaces';
import { BillingFormData } from '../../providers';
import { PaymentInfoCards } from './InfoCards';
import { PaymentMethodView } from './PaymentMethodView';
import { WireTransferForm, WireTransferFormData } from './WireTransferForm';
import { CreditCardForm } from './CreditCardForm';

interface PaymentContainerProps {
  paymentType: string;
  onChoosePaymentType: (name: PaymentTypes, value: boolean) => void;
  wireTransferFormValues: WireTransferFormData;

  onChangeWireTransferField: any;
  onSetWireTransferField: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<WireTransferFormData>>;
  wireTransferFormErrors: FormikErrors<WireTransferFormData>;
  creditCardList: PaymentMethod[];
  creditCardFormValues: CreditCardFormType;
  onChangeCreditCardField: any;
  onSetCreditCardField: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<CreditCardFormType>>;
  creditCardFormErrors: FormikErrors<CreditCardFormType>;
  onClickDelivery: () => void;
  config?: {
    gpay?: boolean;
    applepay?: boolean;
    walletConnect?: boolean;
    wire?: boolean;
    creditCard?: boolean;
  };
  billingInfo: BillingFormData | undefined;
  buttonDisabled: boolean;
}

const PaymentContainer = ({
  paymentType,
  onChoosePaymentType,
  wireTransferFormValues,
  onChangeWireTransferField,
  onSetWireTransferField,
  wireTransferFormErrors,
  creditCardList,
  creditCardFormErrors,
  creditCardFormValues,
  onChangeCreditCardField,
  onSetCreditCardField,
  onClickDelivery,
  config,
  billingInfo,
  buttonDisabled,
}: PaymentContainerProps) => {
  const theme = useTheme<MixTheme>();

  return (
    <>
      <PaymentInfoCards billingInfo={ billingInfo } />
      <Card
        sx={{
          border: `1px solid ${ theme.global?.cardBorder }`,
          backgroundColor: theme.global?.cardBackground,
          boxShadow: `0px 4px 16px ${ theme.global?.cardShadow }`,
          padding: '24px',
        }}>
        <Typography sx={{ fontSize: '20px', fontWeight: 500 }}>
          Payment Method
        </Typography>
        { config?.creditCard && (
          <PaymentMethodView
            logo={ Icons.creditCards }
            isSelected={ paymentType }
            name="Credit Card"
            type={ PaymentTypes.CREDIT_CARD }
            bodyContent={ (
              <CreditCardForm
                creditCardList={ creditCardList }
                values={ creditCardFormValues }
                handleChange={ onChangeCreditCardField }
                setFieldValue={ onSetCreditCardField }
                errors={ creditCardFormErrors } />
            ) }
            onChoosePaymentType={ onChoosePaymentType } />
        ) }
        { config?.walletConnect && (
          <PaymentMethodView
            logo={ Icons.walletConnect }
            isSelected={ paymentType }
            name="Walletconnect"
            type={ PaymentTypes.WALLET_CONNECT }
            bodyContent={ <>Test</> }
            onChoosePaymentType={ onChoosePaymentType } />
        ) }
        { config?.applepay && (
          <PaymentMethodView
            logo={ Icons.applepayDark }
            isSelected={ paymentType }
            name="Apple Pay"
            type={ PaymentTypes.APPLE_PAY }
            bodyContent={ <>Test</> }
            onChoosePaymentType={ onChoosePaymentType } />
        ) }
        { config?.gpay && (
          <PaymentMethodView
            logo={ Icons.gpayDark }
            isSelected={ paymentType }
            name="Google Pay"
            type={ PaymentTypes.GOOGLE_PAY }
            bodyContent={ <>Test</> }
            onChoosePaymentType={ onChoosePaymentType } />
        ) }
        { config?.wire && (
          <PaymentMethodView
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
        ) }
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
          disabled={ buttonDisabled }
          sx={{
            margin: '24px 0',
            '&: hover': {
              backgroundColor: 'rgba(102, 99, 253, 0.8)',
            },
          }} />
      </Box>
    </>
  );
};

export default PaymentContainer;
