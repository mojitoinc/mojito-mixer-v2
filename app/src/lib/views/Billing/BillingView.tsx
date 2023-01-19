import { Box, useTheme } from '@mui/material';
import React from 'react';
import { useUIConfiguration } from '@providers/ConfigurationProvider';
import { BillingFormData } from '@providers/UserProvider';
import { FormikErrors } from 'formik';
import Button from '@components/shared/Button';
import { MixTheme } from '../../theme/ThemeOptions';
import BillingForm from './BillingForm';
import ExpressCheckoutView from './ExpressCheckout';

interface BillingProps {
  isEditing: boolean;
  values: BillingFormData;
  errors: FormikErrors<BillingFormData>;
  onChange: any;
  handleSubmit: () => void;
}

const BillingView = ({
  isEditing,
  values,
  errors,
  onChange,
  handleSubmit,
}: BillingProps) => {
  const theme = useTheme<MixTheme>();
  const { billing } = useUIConfiguration();

  return (
    <Box width="100%">
      { !billing.hideExpressCheckout && (
        <ExpressCheckoutView />
      ) }
      { isEditing && (
      <BillingForm
        values={ values }
        errors={ errors }
        onChange={ onChange } />
      ) }

      <Box
        display="flex"
        justifyContent="flex-end">

        <Button
          title="Continue to Payment"
          backgroundColor={ theme.global?.checkOutColors?.continueButtonBackground }
          textColor={ theme.global?.checkOutColors?.continueButtonTextColor }
          onClick={ handleSubmit }
          sx={{
            marginTop: '24px',
          }} />
      </Box>
    </Box>
  );
};
export default BillingView;
