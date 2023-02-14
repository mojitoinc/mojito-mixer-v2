import { Box, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useUIConfiguration } from '../providers';
import { MixTheme } from '../theme';

interface HeaderProps {
  isPaymentConfirmation: boolean;
}
const Header = ({ isPaymentConfirmation }: HeaderProps) => {
  const theme = useTheme<MixTheme>();
  const { paymentConfirmation, global } = useUIConfiguration();
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: theme.global?.background,
      }}>
      {isPaymentConfirmation && (
        <Stack
          flexDirection="row"
          alignItems="center"
          sx={{ cursor: 'pointer' }}
          marginBottom="24px"
          onClick={paymentConfirmation?.onGoTo}>
          <ArrowBackIcon
            sx={{
              color: theme?.global?.unHighlightedText,
              width: '17px',
              height: '17px',
            }} />
          <Typography
            variant="button"
            sx={{
              color: theme?.global?.unHighlightedText,
              textTransform: 'capitalize',
              fontWeight: 700,
              fontSize: '12px',
            }}>
            Back To Marketplace
          </Typography>
        </Stack>
      )}
      <Box
        sx={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}>
        <img src={global.logoSrc} width="162px" height="37px" alt="logo" />
      </Box>
    </Box>
  );
};

export default Header;
