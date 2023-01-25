import { MixTheme } from '@lib/theme/ThemeOptions';
import { Card, useTheme, Box, Typography, Divider, Stack } from '@mui/material';
import React from 'react';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import { Icons } from '@lib/assets';

interface DeliveryInfoCardProps {
    isCreditCard: boolean;
}

export const DeliveryInfoCard = ({ isCreditCard } : DeliveryInfoCardProps) => {
  const theme = useTheme<MixTheme>();
  return (
    <Card sx={{
      border: `1px solid ${ theme.global?.cardBorder }`,
      backgroundColor: theme.global?.cardBackground,
      boxShadow: `0px 4px 16px ${ theme.global?.cardShadow }`,
      margin: '24px 0px',
    }}>
      <Box sx={{ padding: '16px 24px' }} display="flex" flexDirection="row" justifyContent="space-between" alignItems="flex-start">
        <Box width="50%" display="flex">
          <Typography variant="body2" sx={{ color: theme.global?.cardGrayedText, marginRight: 7 }}>Contact info</Typography>
          <Typography variant="body2">raakhee@mojito.xyz</Typography>
        </Box>
        <Box>
          <Typography variant="button" sx={{ color: theme.global?.unHighlightedText, textTransform: 'capitalize', fontWeight: 700 }}>Edit</Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ padding: '16px 24px' }} display="flex" flexDirection="row" justifyContent="space-between" alignItems="flex-start">
        <Box width="50%" display="flex">
          <Typography variant="body2" sx={{ color: theme.global?.cardGrayedText, marginRight: 7 }}>Billing info</Typography>
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
      <Divider />
      <Box sx={{ padding: '16px 24px' }} display="flex" flexDirection="row" justifyContent="space-between" alignItems="flex-start">
        <Box width="50%" display="flex">
          <Typography variant="body2" sx={{ color: theme.global?.cardGrayedText, marginRight: 3 }}>Payment Method</Typography>
          {
                        !isCreditCard && (
                        <Box>
                          <Typography variant="body2">Walletconnect</Typography>
                          <Stack flexDirection="row" alignItems="center">
                            <Typography variant="body2">0x09750ad...360fdb7</Typography>
                            <FileCopyIcon sx={{ width: '14px', padding: '4px', marginLeft: '4px', height: '14px', color: theme.global?.confirmationColors?.copyIconColor }} />
                          </Stack>
                        </Box>
                        )
                    }
          {
                        isCreditCard && (
                        <Box>
                          <Typography variant="body2" sx={{ marginBottom: '4px' }}>Credit Card</Typography>
                          <Typography variant="body2" sx={{ marginBottom: '4px' }}>Raakhee Miller</Typography>
                          <Stack flexDirection="row">
                            <img src={ Icons.visaCard } width={ 40 } height={ 24 } />
                            <Typography variant="body2" sx={{ margin: '0 8px' }}>****1234</Typography>
                            <Typography variant="body2" sx={{ color: theme.global?.unHighlightedText }}>12/12</Typography>
                          </Stack>
                        </Box>
                        )
                    }
        </Box>
        <Box>
          <Typography variant="button" sx={{ color: theme.global?.unHighlightedText, textTransform: 'capitalize', fontWeight: 700 }}>Edit</Typography>
        </Box>
      </Box>
    </Card>
  );
};
