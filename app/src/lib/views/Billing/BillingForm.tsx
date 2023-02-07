import { useCityOptions, useCountryOptions, useStateOptions } from '@lib/hooks';
import { BillingFormData } from '@lib/providers';
import { MixTheme } from '@lib/theme';
import { Card, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { FormikErrors } from 'formik';
import React from 'react';
import { TextInput, Dropdown } from '@lib/components';

interface BillingFormProps {
  values: BillingFormData;
  errors: FormikErrors<BillingFormData>;
  onChange: any;
}

const BillingForm = ({
  values,
  errors,
  onChange,
}: BillingFormProps) => {
  const countries = useCountryOptions();
  const states = useStateOptions(values?.country);
  const cities = useCityOptions(values?.country, values?.state);

  const theme = useTheme<MixTheme>();
  return (
    <Card
      sx={{
        border: `1px solid ${ theme.global?.cardBorder }`,
        backgroundColor: theme.global?.cardBackground,
        boxShadow: `0px 4px 16px ${ theme.global?.cardShadow }`,
        margin: '0px 0px 24px 0px',
      }}>
      <Box padding="14px">
        <Typography
          color={ theme.palette?.text?.primary }
          fontWeight="500"
          fontSize="20px">
          Billing Info
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          sx={{
            marginTop: '16px',
          }}>
          <Dropdown
            value={ values?.country }
            onChange={ onChange('country') }
            title="Country/Region"
            required
            sx={{ marginRight: '8px' }}
            error={ errors?.country }
            placeholder="Select one,,,"
            options={ countries } />
          <Dropdown
            value={ values?.state }
            onChange={ onChange('state') }
            title="State"
            sx={{
              marginLeft: '8px',
            }}
            placeholder="Select one,,,"
            options={ states }
            error={ errors?.state }
            required />
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          sx={{
            marginTop: '16px',
          }}>
          <Dropdown
            value={ values?.city }
            onChange={ onChange('city') }
            title="City"
            required
            placeholder="Select one,,,"
            sx={{ marginRight: '8px' }}
            error={ errors?.city }
            options={ cities } />
          <TextInput
            value={ values?.postalCode }
            onChange={ onChange('postalCode') }
            title="postalCode"
            sx={{
              marginLeft: '8px',
            }}
            required
            error={ errors?.postalCode }
            placeholder="e.g. 10005" />
        </Box>
        <TextInput
          value={ values?.phoneNumber }
          onChange={ onChange('phoneNumber') }
          title="Phone number"
          sx={{
            marginTop: '16px',
          }}
          required
          error={ errors?.phoneNumber }
          placeholder="(___) ___-____"
          type="tel" />
      </Box>
    </Card>
  );
};

export default BillingForm;
