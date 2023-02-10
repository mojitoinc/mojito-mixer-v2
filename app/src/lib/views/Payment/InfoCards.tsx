import { Box, Card, Divider, Typography, useTheme } from '@mui/material';
import React, { useCallback } from 'react';
import { BillingFormData, useContainer } from '../../providers';
import { ContainerTypes } from '../../interfaces/ContextInterface';
import { MixTheme } from '../../theme';

interface PaymentInfoCardsProps {
  billingInfo: BillingFormData | undefined;
}

export const PaymentInfoCards = ({ billingInfo }: PaymentInfoCardsProps) => {
  const theme = useTheme<MixTheme>();
  const { setContainerState } = useContainer();
  const handleEdit = useCallback(() => {
    setContainerState(ContainerTypes.CHECKOUT);
  }, [setContainerState]);

  return (
    <Card
      sx={{
        border: `1px solid ${ theme.global?.cardBorder }`,
        backgroundColor: theme.global?.cardBackground,
        boxShadow: `0px 4px 16px ${ theme.global?.cardShadow }`,
        margin: '24px 0px',
      }}>
      <Box
        sx={{ padding: '16px 24px' }}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Box width="50%" display="flex">
          <Typography
            variant="body2"
            sx={{
              color: theme.global?.cardGrayedText,
              marginRight: 3,
              width: '80px',
            }}>
            Contact info
          </Typography>
          <Typography variant="body2">{ billingInfo?.email }</Typography>
        </Box>
        <Box>
          <Typography
            variant="button"
            sx={{
              color: theme.global?.unHighlightedText,
              textTransform: 'capitalize',
              fontWeight: 700,
              '&: hover': {
                cursor: 'pointer',
              },
            }}
            onClick={ handleEdit }>
            Edit
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{ padding: '16px 24px' }}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Box width="50%" display="flex">
          <Typography
            variant="body2"
            sx={{
              color: theme.global?.cardGrayedText,
              marginRight: 3,
              width: '80px',
            }}>
            Billing info
          </Typography>
          <Box>
            <Typography variant="body2">
              { billingInfo?.country }, { billingInfo?.state }
            </Typography>
            <Typography variant="body2">
              { billingInfo?.city }, { billingInfo?.postalCode }
            </Typography>
            <Typography variant="body2">{ billingInfo?.phoneNumber }</Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="button"
            sx={{
              color: theme.global?.unHighlightedText,
              textTransform: 'capitalize',
              fontWeight: 700,
              '&: hover': {
                cursor: 'pointer',
              },
            }}
            onClick={ handleEdit }>
            Edit
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
