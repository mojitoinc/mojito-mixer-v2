import { Box, useTheme } from '@mui/material';
import React from 'react';
import { useConfiguration } from '@providers/ConfigurationProvider';
import { UserType } from '@providers/UserProvider';
import { ContainerTypes } from '@lib/constants/states';
import Header from '@lib/components/shared/Header';
import LinedText from '@lib/components/shared/LinedText';
import Stepper from '@lib/components/shared/Stepper';
import BillingForm from '@components/BillingForm';
import { FormikErrors } from 'formik';
import { SelectOption } from '@lib/interfaces/Components';
import SummaryContainer from '@components/shared/Summary';
import Button from '@components/shared/Button';
import { MixTheme } from '../../theme/ThemeOptions';

interface CheckOutProps {
  isEditing: boolean;
  values: UserType;
  errors: FormikErrors<UserType>;
  handleChange: any;
  handleSubmit: () => void;
  countriesList: SelectOption[];
  statesList: SelectOption[];
  citiesList: SelectOption[];
}

const CheckOutLayout = ({
  isEditing,
  values,
  errors,
  handleChange,
  handleSubmit,
  countriesList,
  statesList,
  citiesList,
}: CheckOutProps) => {
  const theme = useTheme<MixTheme>();
  const config = useConfiguration();

  return (
    <Box
      sx={{
        backgroundColor: theme.global?.background,
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Box width="100%" padding="30px">
        <Header />
        <Stepper currentState={ ContainerTypes.CHECKOUT } />
        { !config.hideExpressCheckout && (
          <Box margin="8px 0px">
            <LinedText text="Express Checkout" />
            <LinedText text="OR" />
          </Box>
        ) }
        { isEditing && (
          <BillingForm
            countriesList={ countriesList }
            values={ values }
            errors={ errors }
            handleChange={ handleChange }
            handleSubmit={ handleSubmit }
            statesList={ statesList }
            citiesList={ citiesList } />
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
      <SummaryContainer />
    </Box>
  );
};
export default CheckOutLayout;
