import Button from '@components/shared/Button';
import TextInput from '@components/shared/TextInput';
import { Icons } from '@lib/assets';
import { MixTheme } from '@lib/theme/ThemeOptions';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import React from 'react';

const CostBreakDownLayout = () => {
  const theme = useTheme<MixTheme>();

  const renderTextRow = (text: string, value: string) => {
    return (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        margin="10px 0px">
        <Typography>{ text }</Typography>
        <Typography fontWeight="700">{ value }</Typography>
      </Box>
    );
  };

  return (
    <Box
      width="100%"
      height="100%"
      sx={{
        backgroundImage: `url(${ Icons.background })`,
        backgroundSize: '100%',
        alignSelf: 'stretch',
        padding: '40px',
      }}>
      <Box
        sx={{
          padding: '24px',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(20px)',
          borderRadius: '4px',
        }}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Box display="flex" flexDirection="row">
            <img
              alt="Item"
              style={{
                width: '80px',
                height: '80px',
              }}
              src={ Icons.item } />
            <Box
              sx={{
                marginLeft: '16px',
              }}>
              <Typography
                sx={{
                  fontWeight: '700',
                  fontSize: '20px',
                }}>
                Item Name
              </Typography>
              <Typography>Qty :1</Typography>
              <Typography>100 remaining</Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end">
            <Typography fontWeight="700">2,000 USD</Typography>
            <Typography>2.00 ETH</Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            background: '#000',
            margin: '20px 0px',
          }} />
        <Box display="flex" flexDirection="row">
          <TextInput
            placeholder="Discount code"
            inputProps={{
              style: {
                backgroundColor: '#fff',
              },
            }} />
          <Button
            title="Apply"
            backgroundColor={ theme.global?.costBreakDownColors?.applyButtonBackground }
            sx={{
              marginLeft: '8px',
            }}
            textColor={ theme.global?.costBreakDownColors?.applyButtonTextColor } />
        </Box>
        <Divider
          sx={{
            background: '#000',
            margin: '20px 0px 10px 0px',
          }} />
        <Box>
          { renderTextRow('Subtotal', '2,000 USD') }
          { renderTextRow('Taxes', '1.5 USD') }
          { renderTextRow('Fee', '0 USD') }
        </Box>

        <Divider
          sx={{
            background: '#000',
            margin: '20px 0px',
          }} />
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          marginBottom="20px">
          <Typography fontWeight="700" fontSize="16px">Total</Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end">
            <Typography fontWeight="700" fontSize="20px">2,150 USD</Typography>
            <Typography fontSize="16px">2.00 ETH</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default CostBreakDownLayout;
