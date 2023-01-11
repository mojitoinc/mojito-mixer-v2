import {
  useCityOptions,
  useCountryOptions,
  useStateOptions,
} from '@lib/hooks/dropdowns';
import { BillingFormData } from '@lib/providers/UserProvider';
import { FormikErrors } from 'formik';
import React from 'react';
import BillingFormLayout from './BillingFormLayout';

interface BillingFormProps {
  values: BillingFormData;
  errors: FormikErrors<BillingFormData>;
  onChange: any;
}

const BillingForm = ({ values, errors, onChange }: BillingFormProps) => {
  const countries = useCountryOptions();
  const states = useStateOptions(values?.country);
  const cities = useCityOptions(values?.country, values?.state);

  return (
    <BillingFormLayout
      values={ values }
      errors={ errors }
      onChange={ onChange }
      countries={ countries }
      states={ states }
      cities={ cities } />
  );
};
export default BillingForm;
