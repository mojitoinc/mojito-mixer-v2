import { Box, Card, Typography, useTheme } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useUIConfiguration, BillingFormData, useUserInfo } from '../../providers';
import { Button, TextInput } from '../../components';
import { MixTheme } from '../../theme';
import BillingForm from './BillingForm';
import ExpressCheckoutView from './ExpressCheckout';
import BillingDetails from './BillingDetails';
import { DebugBox } from '../../components/shared/DebugBox';
import { PaymentMethod } from '../../interfaces';

interface BillingProps {
  isEditing: boolean;
  onClickEdit: () => void;
  onClickContinue: (values:BillingFormData) => void;
  pincodeError?: boolean;
  paymentItem?: PaymentMethod;
  billingInfo?:BillingFormData;
  onChangeValues:(isValid:boolean, values:BillingFormData)=>void;
}
const schema = Yup.object().shape({
  country: Yup.string().required('Please select a country'),
  state: Yup.string().required('Please select a state'),
  city: Yup.string().required('Please select a city'),
  postalCode: Yup.string().min(5, 'Invalid zipcode').required('Please enter zipcode'),
  email: Yup.string()
    .email('Please enter valid email')
    .required('Please enter email'),
  phoneNumber: Yup.string().matches(/^\+[1-9]{1}[0-9]{3,14}$/, 'Invalid mobile number').required('Please enter a mobile number'),
  street1: Yup.string().required('Please enter your address'),
  firstName: Yup.string().min(2, 'Invalid first name').required('Please enter first name'),
  lastName: Yup.string().min(2, 'Invalid last name').required('Please enter last name'),
});
const BillingView = ({
  isEditing,
  onClickEdit,
  onClickContinue,
  pincodeError,
  billingInfo,
  paymentItem,
  onChangeValues,
}: BillingProps) => {
  const { email } = useUserInfo();

  const { values, errors, handleChange: onChange, isValid, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      email,
      country: billingInfo?.country ?? paymentItem?.billingDetails?.country,
      state: billingInfo?.state ?? paymentItem?.billingDetails?.district,
      city: billingInfo?.city ?? paymentItem?.billingDetails?.city,
      postalCode: billingInfo?.postalCode ?? paymentItem?.billingDetails?.postalCode,
      phoneNumber: billingInfo?.phoneNumber ?? paymentItem?.metadata?.phoneNumber,
      street1: billingInfo?.street1 ?? paymentItem?.billingDetails?.address1,
      name: billingInfo?.name ?? paymentItem?.billingDetails?.name,
      firstName: billingInfo?.firstName ?? paymentItem?.billingDetails?.name?.split(' ')?.[0],
      lastName: billingInfo?.lastName ?? paymentItem?.billingDetails?.name?.split(' ')?.[1],
    } as BillingFormData,
    onSubmit: onClickContinue,
    validationSchema: schema,
    enableReinitialize: true,
  });

  const isValidBillingForm = useMemo<boolean>(() => {
    return !(
      errors?.country ||
      errors?.state ||
      errors?.city ||
      errors?.postalCode ||
      errors?.phoneNumber ||
      errors?.name
    );
  }, [errors]);

  useEffect(() => {
    onChangeValues(isValidBillingForm, values);
  }, [isValidBillingForm, values, onChangeValues]);

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
          inputProps={{
            readOnly: true,
          }}
          disabled
          sx={{
            marginTop: '16px',
          }} />
      </Card>
      { isEditing ? (
        <BillingForm
          values={ values }
          setFieldValue={ setFieldValue }
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
          onClick={ handleSubmit }
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
