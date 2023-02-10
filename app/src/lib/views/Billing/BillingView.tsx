import { Box, Card, Typography, useTheme } from '@mui/material';
import React from 'react';
import { FormikErrors } from 'formik';
import { useUIConfiguration, BillingFormData } from '../../providers';
import { Button, TextInput } from '../../components';
import { MixTheme } from '../../theme';
import BillingForm from './BillingForm';
import ExpressCheckoutView from './ExpressCheckout';
import BillingDetails from './BillingDetails';
import { DebugBox } from '../../components/shared/DebugBox';

interface BillingProps {
  isEditing: boolean;
  values: BillingFormData;
  errors: FormikErrors<BillingFormData>;
  onChange: any;
  onClickEdit: () => void;
  onClickContinue: () => void;
  isValid: boolean;
  isValidBillingForm: boolean;
  pincodeError?: boolean;
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
  pincodeError,
}: BillingProps) => {
  const theme = useTheme<MixTheme>();
  const uiConfiguration = useUIConfiguration();
  return (
    <Box width="100%">
      { !uiConfiguration?.billing?.isEnableExpressCheckout && (
        <ExpressCheckoutView config={ uiConfiguration?.billing } />
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
          backgroundColor={ theme.global?.checkout?.continueButtonBackground }
          textColor={ theme.global?.checkout?.continueButtonTextColor }
          onClick={ onClickContinue }
          sx={{
            margin: '24px 0px',
            '&: hover': {
              backgroundColor: 'rgba(102, 99, 253, 0.8)',
            },
          }}
          disabled={ !isValid || pincodeError || !isValidBillingForm } />
      </Box>
      <DebugBox value={ values } />
    </Box>
  );
};
export default BillingView;
