import {
  Box,
  Checkbox,
  FormHelperText,
  Typography,
  useTheme,
} from '@mui/material';
import { FormikErrors } from 'formik';
import React, { useCallback } from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import { TextInput, CreditCardDropdown } from '../../components';
import { CreditCardFormType, PaymentMethod } from '../../interfaces';
import { useBilling } from '../../providers';
import { MixTheme } from '../../theme';

interface CreditCardProps {
  creditCardList: PaymentMethod[];
  values: CreditCardFormType;
  handleChange: any;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<CreditCardFormType>>;
  errors: FormikErrors<CreditCardFormType>;
  screeningError?:string;
}

export const CreditCardForm = ({
  creditCardList,
  values,
  setFieldValue,
  errors,
  handleChange,
  screeningError,
}: CreditCardProps) => {
  const theme = useTheme<MixTheme>();
  const { billingInfo } = useBilling();

  const handleCardChange = useCallback(
    (val: string) => {
      setFieldValue('isNew', val === 'true');
      setFieldValue('cardId', val);
    },
    [setFieldValue],
  );

  const formatCardNumber = useCallback(
    async (value: string) => {
      const cardNumberLength = values?.cardNumber
        ? values?.cardNumber?.length
        : 0;
      if (cardNumberLength > value.length) {
        await setFieldValue('cardNumber', value);
        return;
      }
      const isValid = value.match(/^[\d\s]+$/);
      if (isValid) {
        const cardNumber = value.split(' ').join('');
        await setFieldValue(
          'cardNumber',
          cardNumber.replace(/\d{4}(?=.)/g, '$& '),
        );
      }
    },
    [setFieldValue, values],
  );

  const formatExpiry = useCallback(
    async (value: string) => {
      const expiryLength = values?.expiry ? values?.expiry?.length : 0;

      const isValid = value.split('/').join('').match(/^[\d\s]+$/);

      if (expiryLength > value.length) {
        await setFieldValue('expiry', value);
        return;
      }
      if (isValid || value === '') {
        const expiry = value.split('/').join('');

        await setFieldValue('expiry', expiry.replace(/\d{2}(?=.)/g, '$&/'));
      }
    },
    [setFieldValue, values],
  );
  const formatCVV = useCallback(
    async (value: string) => {
      const isValid = value.match(/^[\d\s]+$/);
      if (isValid || value === '') {
        await setFieldValue('cvv', value);
      }
    },
    [setFieldValue],
  );

  return (
    <>

      { screeningError && (
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        marginTop="16px"
        sx={{
          background: theme.global?.errorBackground,
          padding: '14px',
          borderRadius: '4px',
        }}>
        <ErrorIcon
          sx={{
            color: theme.global?.required,
            marginRight: '10px',
          }} />
        <Typography fontWeight="400" fontSize="16px">
          { screeningError }
        </Typography>
      </Box>
      ) }
      <CreditCardDropdown
        value={ values?.isNew ? 'true' : values?.cardId }
        onChange={ handleCardChange }
        error={ errors?.cardId }
        title="Card info"
        sx={{ marginRight: '8px', marginTop: 2 }}
        options={ creditCardList } />

      { !billingInfo?.phoneNumber && (
        <FormHelperText error>
          Phone number is mandatory for credit card payment
        </FormHelperText>
      ) }
      { values?.isNew && (
        <TextInput
          value={ values?.cardNumber }
          onChange={ formatCardNumber }
          error={ errors?.cardNumber }
          inputProps={{
            maxLength: 19,
          }}
          type="text"
          title="Card info"
          sx={{
            marginTop: '16px',
          }}
          placeholder="4242 4242 4242 4242" />
      ) }
      <Box display="flex" justifyContent="space-between">
        <TextInput
          value={ values?.expiry }
          onChange={ formatExpiry }
          error={ errors?.expiry }
          sx={{
            marginTop: '16px',
            width: '48%',
          }}
          inputProps={{
            maxLength: 5,
          }}
          type="text"
          placeholder="MM/YY" />
        <TextInput
          value={ values?.cvv }
          onChange={ formatCVV }
          error={ errors?.cvv }
          inputProps={{
            maxLength: 3,
          }}
          type="text"
          sx={{
            marginTop: '16px',
            width: '48%',
          }}
          placeholder="CVV" />
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: theme.global?.cardGrayedText,
          padding: '12px 16px',
          marginTop: 2,
          backgroundColor: theme.global?.grayBackground,
          borderRadius: '4px',
        }}>
        NFTs purchased by credit card can only be transferred to your multi-sig
        wallet and cannot be transferred out for 14 days.
      </Typography>
      { values?.isNew && (
        <Box display="flex" alignItems="center" marginTop={ 2 }>
          <Checkbox
            sx={{ padding: 0 }}
            checked={ values?.save }
            onChange={ handleChange('save') } />
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            Save my credit card info for faster checkout
          </Typography>
        </Box>
      ) }
    </>
  );
};
