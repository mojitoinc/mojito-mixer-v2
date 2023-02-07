import { useCityOptions, useCountryOptions, useStateOptions } from '@lib/hooks';
import { BillingFormData } from '@lib/providers';
import { MixTheme } from '@lib/theme';
import { Card, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { FormikErrors } from 'formik';
import React from 'react';
import { TextInput, Dropdown } from '@lib/components';
import ErrorIcon from '@mui/icons-material/Error';

interface BillingFormProps {
  values: BillingFormData;
  errors: FormikErrors<BillingFormData>;
  onChange: any;
  isValid: boolean;
}

const BillingForm = ({
  values,
  errors,
  onChange,
  isValid,
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
      <Box padding="24px">
        <Typography
          color={ theme.palette?.text?.primary }
          fontWeight="500"
          fontSize="20px">
          Billing Info
        </Typography>
        {
          !isValid && (
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
            <ErrorIcon sx={{
              color: theme.global?.required,
              marginRight: '10px',
            }} />
            <Typography
              fontWeight="400"
              fontSize="16px">
              Complete necessary changes to continue
            </Typography>
          </Box>
          )
}
        <Box
          display="flex"
          flexDirection="row"
          marginTop="16px">
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
            title="Zip code"
            sx={{
              marginLeft: '8px',
            }}
            required
            error={ errors?.postalCode }
            placeholder="e.g. 10005" />
        </Box>

        <TextInput
          value={ values?.street1 }
          onChange={ onChange('street1') }
          title="Address"
          sx={{
            marginTop: '16px',
          }}
          required
          error={ errors?.street1 }
          placeholder="" />
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
