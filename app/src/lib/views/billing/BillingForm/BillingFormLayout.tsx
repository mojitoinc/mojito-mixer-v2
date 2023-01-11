import { SelectOption } from '@lib/interfaces/Components';
import { BillingFormData } from '@lib/providers/UserProvider';
import { MixTheme } from '@lib/theme/ThemeOptions';
import { Card, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { FormikErrors } from 'formik';
import React from 'react';
import Dropdown from '../../../components/shared/Dropdown';
import TextInput from '../../../components/shared/TextInput';

interface BillingFormLayoutProps {
  values: BillingFormData;
  errors: FormikErrors<BillingFormData>;
  onChange: any;
  countries:SelectOption[]
  states:SelectOption[];
  cities:SelectOption[];
}

const BillingFormLayout = ({
  values,
  errors,
  onChange,
  countries,
  states,
  cities,
}: BillingFormLayoutProps) => {
  const theme = useTheme<MixTheme>();
  return (
    <>
      <Card
        sx={{
          border: `1px solid ${ theme.global?.cardBorder }`,
          backgroundColor: theme.global?.cardBackground,
          boxShadow: `0px 4px 16px ${ theme.global?.cardShadow }`,
          margin: '24px 0px',
        }}>
        <Box padding="14px">
          <Typography
            color={ theme.palette?.text?.primary }
            fontWeight="500"
            fontSize="20px">
            Contact Info
          </Typography>
          <TextInput
            value={ values?.email }
            onChange={ onChange('email') }
            error={ errors?.email }
            placeholder="Email"
            sx={{
              marginTop: '16px',
            }} />
        </Box>
      </Card>
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
              value={ values?.zipcode }
              onChange={ onChange('zipcode') }
              title="Zipcode"
              sx={{
                marginLeft: '8px',
              }}
              required
              error={ errors?.zipcode }
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
    </>
  );
};

export default BillingFormLayout;
