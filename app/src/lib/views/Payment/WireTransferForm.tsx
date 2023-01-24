import Dropdown, { DropdownOptions } from '@components/shared/Dropdown';
import TextInput from '@components/shared/TextInput';
import { BanksList } from '@lib/constants/states';
import { useCountryOptions } from '@lib/hooks/dropdowns';
import { MixTheme } from '@lib/theme/ThemeOptions';
import { Typography, useTheme } from '@mui/material';
import React, { useMemo } from 'react';

export const WireTransferForm = () => {
  const countryOptions = useCountryOptions();
  const theme = useTheme<MixTheme>();
  const bankOptions:DropdownOptions[] = useMemo(() => {
    return BanksList.map((item:string) => ({
      label: item,
      value: item,
    }));
  }, []);

  return (
    <>
      <Typography variant="body2">Third-party wire transfers are not accepted.</Typography>
      <TextInput
        value=""
        title="Account Number"
        onChange={ () => undefined }
        sx={{
          marginTop: '16px',
        }}
        placeholder="Enter account number"
        type="text" />
      <TextInput
        value=""
        title="Routing Number (ABA)"
        onChange={ () => undefined }
        sx={{
          marginTop: '16px',
        }}
        placeholder="Enter routing number"
        type="text" />
      <Dropdown
        value=""
        onChange={ () => undefined }
        title="Bank Country"
        sx={{ marginRight: '8px', marginTop: 2 }}
        placeholder="Select one"
        options={ countryOptions } />
      <Dropdown
        value=""
        onChange={ () => undefined }
        title="Bank Name"
        placeholder="Type to search or select"
        sx={{ marginRight: '8px', marginTop: 2 }}
        options={ bankOptions } />
      <Typography
        variant="body2"
        sx={{
          color: theme.global?.cardGrayedText,
          padding: '12px 16px',
          marginTop: 2,
          backgroundColor: theme.global?.grayBackground,
          borderRadius: '4px',
        }}>Please note that wire transfers usually take 1-3 business days to complete and your NFT will not be transferred until payment has been settled.
      </Typography>
    </>
  );
};
