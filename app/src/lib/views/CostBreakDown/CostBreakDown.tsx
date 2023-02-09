import React from 'react';

import { Box, Divider, Typography, useTheme } from '@mui/material';
import { Button, TextInput } from '../../components';
import { Icons } from '../../assets';
import { CollectionItem, Taxes } from '../../interfaces';
import {
  useContainer,
  ContainerTypes,
  useUIConfiguration,
  useCheckout,
} from '../../providers';
import { MixTheme } from '../../theme';

interface CostBreakDownProps {
  taxes: Taxes;
  collectionData: CollectionItem;
}

const CostBreakDown = ({ taxes, collectionData }: CostBreakDownProps) => {
  const theme = useTheme<MixTheme>();
  const uiConfiguration = useUIConfiguration();
  const { quantity } = useCheckout();
  const { containerState } = useContainer();

  const renderTextRow = (text: string, value: string) => {
    return (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        margin="10px 0px">
        <Typography variant="body2" fontSize="14px">
          { text }
        </Typography>
        <Typography variant="subtitle2" fontWeight="700">
          { value }
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      width="calc(50% - 80px)"
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
                variant="h5"
                sx={{
                  fontWeight: '700',
                  fontSize: '20px',
                  marginBottom: '4px',
                }}>
                { collectionData?.name }
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: '12px', fontSize: '14px' }}>
                Qty : { quantity }
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: '12px',
                  fontSize: '14px',
                  fontStyle: 'italic',
                }}>
                { collectionData?.details?.totalUnits ?? '0' } remaining
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <Typography variant="subtitle2" fontWeight="700" fontSize="14px">
              { taxes?.taxablePrice ?? '0' } USD
            </Typography>
            <Typography variant="body2" fontSize="14px">
              2.00 ETH
            </Typography>
          </Box>
        </Box>
        { uiConfiguration?.costBreakdown?.showDiscountCode &&
          containerState !== ContainerTypes.CONFIRMATION && (
            <>
              <Divider
                sx={{
                  background: theme.global?.border,
                  margin: '20px 0px',
                }} />
              <Box display="flex" flexDirection="row">
                <TextInput
                  placeholder="Discount code"
                  inputProps={{
                    style: {
                      backgroundColor: theme.global?.background,
                    },
                  }} />
                <Button
                  title="Apply"
                  backgroundColor={ theme.global?.costBreakdown?.applyButtonBackground }
                  sx={{
                    marginLeft: '8px',
                  }}
                  textColor={ theme.global?.costBreakdown?.applyButtonTextColor } />
              </Box>
            </>
        ) }

        <Divider
          sx={{
            background: theme.global?.border,
            margin: '20px 0px 20px 0px',
          }} />
        <Box>
          { renderTextRow('Subtotal', `${ taxes?.taxablePrice ?? '0' } USD`) }
          { renderTextRow('Taxes', `${ taxes?.totalTaxAmount ?? '0' } USD`) }
          { renderTextRow('Fee', '0 USD') }
        </Box>

        <Divider
          sx={{
            background: theme.global?.border,
            margin: '20px 0px',
          }} />
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          marginBottom="20px">
          <Typography variant="subtitle1" fontWeight="700" fontSize="16px">
            Total
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <Typography variant="h5" fontWeight="700" fontSize="20px">
              { taxes?.totalTaxedPrice ?? '0' } USD
            </Typography>
            <Typography variant="body1" fontSize="16px">
              2.00 ETH
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default CostBreakDown;
