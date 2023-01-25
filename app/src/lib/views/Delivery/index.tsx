import React, { useCallback, useState } from 'react';
import { Box, Card, Typography, useTheme } from '@mui/material';
import { MixTheme } from '@lib/theme/ThemeOptions';
import Dropdown, { DropdownOptions } from '@components/shared/Dropdown';
import Button from '@components/shared/Button';
import { Stack } from '@mui/system';
import { DeliveryInfoCard } from './DeliveryInfoCard';

export const Delivery = () => {
  const theme = useTheme<MixTheme>();
  const [selectedDeliveryAddress, setSelectedDeliveryAddress] = useState<string>('');
  const [cardOptions, setCardOptions] = useState<DropdownOptions[]>([{
    label: 'I don’t have a wallet / Create a new Multi-sig',
    value: 'new-multi-sig',
  }]);

  const handleChange = useCallback((value:string) => {
    setSelectedDeliveryAddress(value);
  }, []);
  const isCreditCard = false;
  return (
    <>
      <DeliveryInfoCard isCreditCard={ isCreditCard } />
      <Card sx={{
        border: `1px solid ${ theme.global?.cardBorder }`,
        backgroundColor: theme.global?.cardBackground,
        boxShadow: `0px 4px 16px ${ theme.global?.cardShadow }`,
        margin: '24px 0px',
        padding: '24px',
      }}>
        <Typography sx={{ fontSize: '20px', fontWeight: 500 }}>Delivery Address</Typography>
        <Typography variant="body2" sx={{ marginTop: 1, marginBottom: 2 }}>{
                isCreditCard ? 'All related purchase and delivery fees will be covered by [org name]. NFTs purchased by credit card can only be transferred to your multi-sig wallet and cannot be transferred out for 14 days.'
                  : 'All related NFT purchase and delivery fees will be covered by [org name].'
                }
        </Typography>
        <Dropdown
          value=""
          onChange={ handleChange }
          placeholder="Select or Enter Wallet Address"
          sx={{ marginRight: '8px' }}
          options={ cardOptions } />
        { selectedDeliveryAddress == 'new-multi-sig' && <Typography variant="body2" sx={{ marginTop: '6px', color: theme.global?.cardGrayedText }}>A new multi-sig wallet will be created for you when purchase is complete</Typography> }
        <Stack flexDirection="row" alignItems="flex-end" justifyContent="flex-end">
          <Button
            title="Connect Wallet"
            textColor={ theme.global?.highlightedText }
            backgroundColor={ theme.global?.white }
            variant="outlined"
            sx={{ marginTop: 2 }} />
        </Stack>
      </Card>
      <Box display="flex" flexDirection="row" justifyContent="flex-end">
        <Button
          title="Confirm purchase"
          backgroundColor={ theme.global?.checkOutColors?.continueButtonBackground }
          textColor={ theme.global?.checkOutColors?.continueButtonTextColor }
          onClick={ () => undefined } />
      </Box>
    </>
  );
};
