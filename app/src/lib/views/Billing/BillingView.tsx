import { Box, Card, Typography, useTheme } from '@mui/material';
import React from 'react';
import { FormikErrors } from 'formik';
import { useUIConfiguration, BillingFormData } from '../../providers';
import { Button, TextInput } from '../../components';
import { MixTheme } from '../../theme';
import BillingForm from './BillingForm';
import ExpressCheckoutView from './ExpressCheckout';
import BillingDetails from './BillingDetails';

interface BillingProps {
  isEditing: boolean;
  values: BillingFormData;
  errors: FormikErrors<BillingFormData>;
  onChange: any;
  onClickEdit: () => void;
  onClickContinue: () => void;
  isValid: boolean;
  isValidBillingForm: boolean;
}

const BillingView = ({
  isEditing,
  values,
  errors,
  onChange,
  onClickEdit,
  onClickContinue,
  isValid,
  isValidBillingForm,
}: BillingProps) => {
  const theme = useTheme<MixTheme>();
  const { billing } = useUIConfiguration();

  return (
    <Box width="100%">
      { !billing?.hideExpressCheckout && (
        <ExpressCheckoutView config={ billing?.expressCheckoutConfig } />
      ) }
      <Card
        sx={{
          border: `1px solid ${ theme.global?.cardBorder }`,
          backgroundColor: theme.global?.cardBackground,
          boxShadow: `0px 4px 16px ${ theme.global?.cardShadow }`,
          marginBottom: '24px',
          padding: '24px',
        }}>
        <Typography
          color={ theme.palette?.text?.primary }
          fontWeight="500"
          fontSize="20px">
          Contact info
        </Typography>
        <TextInput
          value={ values?.email }
          onChange={ onChange('email') }
          error={ errors?.email }
          placeholder="Email"
          sx={{
            marginTop: '16px',
          }} />
      </Card>
      { isEditing ? (
        <BillingForm
          values={ values }
          errors={ errors }
          onChange={ onChange }
          isValid={ isValidBillingForm } />
      ) : (
        <BillingDetails values={ values } onClickEdit={ onClickEdit } />
      ) }

      <Box display="flex" justifyContent="flex-end">
        <Button
          title="Continue to Payment"
          backgroundColor={ theme.global?.checkOutColors?.continueButtonBackground }
          textColor={ theme.global?.checkOutColors?.continueButtonTextColor }
          onClick={ onClickContinue }
          sx={{
            margin: '24px 0px',
            '&: hover': {
              backgroundColor: 'rgba(102, 99, 253, 0.8)',
            },
          }}
          disabled={ !isValid } />
      </Box>
    </Box>
  );
};
export default BillingView;
