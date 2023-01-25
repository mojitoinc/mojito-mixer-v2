import { MixTheme } from '@lib/theme/ThemeOptions';
import { Box, Card, Divider, Typography, useTheme } from '@mui/material';
import React from 'react';

export const PaymentInfoCards = () => {
  const theme = useTheme<MixTheme>();
  return (
    <Card sx={{
      border: `1px solid ${ theme.global?.cardBorder }`,
      backgroundColor: theme.global?.cardBackground,
      boxShadow: `0px 4px 16px ${ theme.global?.cardShadow }`,
      margin: '24px 0px',
    }}>
      <Box sx={{ padding: '16px 24px' }} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
        <Box width="50%" display="flex">
          <Typography variant="body2" sx={{ color: theme.global?.cardGrayedText, marginRight: 3 }}>Contact info</Typography>
          <Typography variant="body2">raakhee@mojito.xyz</Typography>
        </Box>
        <Box>
          <Typography variant="button" sx={{ color: theme.global?.unHighlightedText, textTransform: 'capitalize', fontWeight: 700 }}>Edit</Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ padding: '16px 24px' }} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
        <Box width="50%" display="flex">
          <Typography variant="body2" sx={{ color: theme.global?.cardGrayedText, marginRight: 3 }}>Billing info</Typography>
          <Box>
            <Typography variant="body2">Country, State</Typography>
            <Typography variant="body2">City, Zip Code</Typography>
            <Typography variant="body2">+1 123-123-1234</Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="button" sx={{ color: theme.global?.unHighlightedText, textTransform: 'capitalize', fontWeight: 700 }}>Edit</Typography>
        </Box>
      </Box>
    </Card>
  );
};
