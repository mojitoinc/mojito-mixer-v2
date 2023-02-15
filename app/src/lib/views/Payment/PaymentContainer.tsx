import { Box, Card, Typography, useTheme } from '@mui/material';
import React, { useCallback, useMemo } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { MixTheme } from '../../theme';
import { PaymentTypes } from '../../constants';
import { Icons } from '../../assets';
import { Button } from '../../components';
import { CreditCardFormType, PaymentMethod } from '../../interfaces';
import { BillingFormData, PaymentData, PaymentMethodLimit } from '../../providers';
import { PaymentInfoCards } from './InfoCards';
import { PaymentMethodView } from './PaymentMethodView';
import { WireTransferForm, WireTransferFormData, Countries } from './WireTransferForm';
import { CreditCardForm } from './CreditCardForm';
import { DebugBox } from '../../components/shared/DebugBox';

interface PaymentContainerProps {
  paymentType: string;
  onChoosePaymentType: (name: PaymentTypes, value: boolean) => void;
  creditCardList: PaymentMethod[];
  config?: {
    gpay?: boolean;
    applepay?: boolean;
    walletConnect?: boolean;
    wire?: boolean;
    creditCard?: boolean;
  };
  billingInfo: BillingFormData | undefined;
  paymentMethodLimit: PaymentMethodLimit | undefined;
  screeningError?: string;
  paymentInfo?: PaymentData;
  onSubmitWireTransfer: (values: WireTransferFormData) => void;
  onSubmitCreditCard: (values: CreditCardFormType) => void
}

const validationSchema = Yup.object().shape({
  country: Yup.string().required('Please select country'),
  bankCountry: Yup.string().when('country', {
    is: Countries.INTERNATIONAL,
    then: Yup.string().required('Please select bank country'),
    otherwise: Yup.string(),
  }),
  accountNumber: Yup.string().when('country', {
    is: Countries.US,
    then: Yup.string().matches(/^[\d\s]+$/, 'Invalid account number')
      .min(8, 'Invalid account number')
      .required('Please enter account number'),
    otherwise: Yup.string(),
  }),
  aba: Yup.string().when('country', {
    is: Countries.US,
    then: Yup.string().matches(/^[\d\s]+$/, 'Invalid aba')
      .min(9, 'Invalid aba')
      .required('Please enter aba'),
    otherwise: Yup.string(),
  }),
  iban: Yup.string().when('country', {
    is: Countries.INTERNATIONAL,
    then: Yup.string().matches(/^([0-9]{2})(?=(?:[ -]?[A-Z0-9]){9,30}$)((?:[ -]?[A-Z0-9]{3,5}){2,7})([ -]?[A-Z0-9]{1,3})?$/,
      'Invalid International Bank Account Number')
      .min(20, 'Invalid International Bank Account Number')
      .required('Please enter International Bank Account Number'),
    otherwise: Yup.string(),
  }),
  bankName: Yup.string().min(2, 'Invalid Bank name').required('Please enter bank name'),
  city: Yup.string().min(2, 'Invalid city').required('Please enter city'),
});

const creditCardSchema = Yup.object().shape({
  isNew: Yup.boolean(),
  expiry: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Invalid expiry')
    .required('Please enter expiry')
    .test('is-expiry', 'Invalid expiry', value => moment(value, 'MM/YY').isValid() && moment().isBefore(moment(value, 'MM/YY'))),
  cvv: Yup.string()
    .matches(/^[\d\s]+$/, 'Invalid account number')
    .min(3, 'Invalid CVV')
    .required('Please enter CVV'),
  cardNumber: Yup.string().when('isNew', {
    is: true,
    then: Yup.string()
      .required('Please enter card number')
      .min(12, 'Please enter valid card number'),
    otherwise: Yup.string(),
  }),
  cardId: Yup.string().when('isNew', {
    is: (isNew?: boolean) => !isNew,
    then: Yup.string().required('Please select a card'),
    otherwise: Yup.string().nullable(),
  }),
});

const PaymentContainer = ({
  paymentType,
  onChoosePaymentType,
  creditCardList,
  config,
  billingInfo,
  paymentMethodLimit,
  screeningError,
  paymentInfo,
  onSubmitCreditCard,
  onSubmitWireTransfer,
}: PaymentContainerProps) => {
  const theme = useTheme<MixTheme>();

  const {
    values: wireTransferFormValues,
    handleChange: onChangeWireTransferField,
    setFieldValue: onSetWireTransferField,
    errors: wireTransferFormErrors,
    isValid: isValidWireTransfer,
    handleSubmit: handleWireTransferSubmit,
    dirty: wireHasDirty,
  } = useFormik({
    initialValues: {
      accountNumber: paymentInfo?.wireData?.accountNumber ?? '',
      aba: paymentInfo?.wireData?.routingNumber ?? '',
      bankCountry: paymentInfo?.wireData?.bankAddress?.country ?? '',
      bankName: paymentInfo?.wireData?.bankAddress?.bankName ?? '',
      iban: paymentInfo?.wireData?.iban ?? '',
      city: paymentInfo?.wireData?.bankAddress?.city ?? '',
      country: paymentInfo?.wireData?.country ?? '',
    } as WireTransferFormData,
    validationSchema,
    onSubmit: onSubmitWireTransfer,
  });

  const {
    values: creditCardFormValues,
    handleChange: onChangeCreditCardField,
    setFieldValue: onSetCreditCardField,
    errors: creditCardFormErrors,
    isValid: isValidCreditCardValues,
    handleSubmit: handleCreditCardSubmit,
    dirty: creditHasDirty,
  } = useFormik({
    initialValues: {
      isNew: paymentInfo?.creditCardData?.isNew ?? creditCardList.length === 0 ?? false,
      cardData: paymentInfo?.creditCardData?.cardData ?? undefined,
      cardId: paymentInfo?.creditCardData?.cardId ?? creditCardList[0]?.id ?? '',
      cardNumber: paymentInfo?.creditCardData?.cardNumber ?? '',
      cvv: paymentInfo?.creditCardData?.cvv ?? '',
      expiry: paymentInfo?.creditCardData?.expiry ?? '',
      save: paymentInfo?.creditCardData?.save ?? false,
    } as CreditCardFormType,
    validationSchema: creditCardSchema,
    onSubmit: onSubmitCreditCard,
    enableReinitialize: true,
  });


  const onClickDelivery = useCallback(() => {
    if (paymentType === PaymentTypes.CREDIT_CARD) {
      handleCreditCardSubmit();
    }
    if (paymentType === PaymentTypes.WIRE_TRANSFER) {
      handleWireTransferSubmit();
    }
  }, [paymentType, handleCreditCardSubmit, handleWireTransferSubmit]);

  const buttonDisabled = useMemo<boolean>(() => {
    if (paymentType === PaymentTypes.CREDIT_CARD) {
      return !creditHasDirty || !isValidCreditCardValues;
    }
    if (paymentType === PaymentTypes.WIRE_TRANSFER) {
      return !wireHasDirty || !isValidWireTransfer;
    }
    return true;
  }, [isValidCreditCardValues, isValidWireTransfer, paymentType, wireHasDirty, creditHasDirty]);

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
        { config?.creditCard && paymentMethodLimit?.exceedCreditCard && (
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
                errors={ creditCardFormErrors }
                screeningError={ screeningError } />
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
        { config?.wire && paymentMethodLimit?.exceedWire && (
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
          backgroundColor={ theme.global?.checkout?.continueButtonBackground }
          textColor={ theme.global?.checkout?.continueButtonTextColor }
          onClick={ onClickDelivery }
          disabled={ buttonDisabled }
          sx={{
            margin: '24px 0',
            '&: hover': {
              backgroundColor: 'rgba(102, 99, 253, 0.8)',
            },
          }} />
      </Box>
      <DebugBox
        value={{ creditCardFormValues, wireTransferFormValues, creditCardList }} />
    </>
  );
};

export default PaymentContainer;
