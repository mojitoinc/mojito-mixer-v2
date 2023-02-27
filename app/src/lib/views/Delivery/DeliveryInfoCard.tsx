import { Card, useTheme, Box, Typography, Divider, Stack } from '@mui/material';
import React, { useCallback } from 'react';
import { MixTheme } from '../../theme';
import { Icons } from '../../assets';
import {
  BillingFormData,
  PaymentData,
  useContainer,
} from '../../providers';
import { ContainerTypes } from '../../interfaces/ContextInterface';
import { PaymentTypes } from '../../constants';
import { CopyButton } from '../../components';

interface DeliveryInfoCardProps {
  billingInfo: BillingFormData | undefined;
  paymentInfo: PaymentData | undefined;
}

export const DeliveryInfoCard = ({
  billingInfo,
  paymentInfo,
}: DeliveryInfoCardProps) => {
  const theme = useTheme<MixTheme>();
  const { setContainerState } = useContainer();

  const getCreditCardType = useCallback((network: string) => {
    if (network === 'MASTERCARD') {
      return Icons.masterCard;
    }
    if (network === 'VISA') {
      return Icons.visaCard;
    }
    if (network === 'americanCard') {
      return Icons.americanExpress;
    }
    return Icons.masterCard;
  }, []);

  const handleEdit = useCallback(
    (type: string) => {
      if (type === 'billing') {
        setContainerState(ContainerTypes.CHECKOUT);
      } else if (type === 'payment') {
        setContainerState(ContainerTypes.PAYMENT);
      }
    },
    [setContainerState],
  );

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
        alignItems="flex-start">
        <Box width="50%" display="flex">
          <Typography
            variant="body2"
            sx={{ color: theme.global?.cardGrayedText, width: '135px', marginRight: '32px' }}>
            Contact info
          </Typography>
          <Typography variant="body2">{ billingInfo?.email }</Typography>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{ padding: '16px 24px' }}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-start">
        <Box width="50%" display="flex">
          <Typography
            variant="body2"
            sx={{ color: theme.global?.cardGrayedText, width: '135px' }}>
            Billing info
          </Typography>
          <Box>
            <Typography variant="body2">
              { billingInfo?.firstName } { billingInfo?.lastName }
            </Typography>
            <Typography variant="body2">
              { billingInfo?.country }, { billingInfo?.state }
            </Typography>
            <Typography variant="body2">
              { billingInfo?.city }, { billingInfo?.postalCode }
            </Typography>
            <Typography variant="body2">{ billingInfo?.street1 }</Typography>
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
            onClick={ () => handleEdit('billing') }>
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
        alignItems="flex-start">
        <Box width="50%" display="flex">
          <Typography
            variant="body2"
            sx={{ color: theme.global?.cardGrayedText, marginRight: 3 }}>
            Payment Method
          </Typography>
          { paymentInfo?.paymentType === PaymentTypes.WIRE_TRANSFER && (
            <Box>
              <Typography variant="body2">Wire Transfer</Typography>
              <Stack flexDirection="row" alignItems="center">
                <Typography variant="body2">
                  *****
                  { paymentInfo?.wireData?.accountNumber?.substring(
                    paymentInfo?.wireData?.accountNumber?.length ?? 0 - 4,
                  ) }
                </Typography>
                <CopyButton
                  copyValue={ paymentInfo?.wireData?.accountNumber ?? '' } />
              </Stack>
            </Box>
          ) }
          { paymentInfo?.paymentType === PaymentTypes.CREDIT_CARD && (
            <Box>
              <Typography variant="body2" sx={{ marginBottom: '4px' }}>
                Credit Card
              </Typography>
              <Stack flexDirection="row">
                <img
                  src={ getCreditCardType(
                    paymentInfo?.creditCardData?.cardData?.network ?? '',
                  ) }
                  width={ 40 }
                  height={ 24 }
                  alt="credit card" />
                <Typography variant="body2" sx={{ margin: '0 8px' }}>
                  ****{ paymentInfo?.creditCardData?.cardData?.last4Digit }
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.global?.unHighlightedText }}>
                  { paymentInfo?.creditCardData?.expiry }
                </Typography>
              </Stack>
            </Box>
          ) }
          { paymentInfo?.paymentType === PaymentTypes.COIN_BASE && (
            <Box>
              <Typography variant="body2" sx={{ marginBottom: '4px' }}>
                Coinbase
              </Typography>
            </Box>
          )}
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
            onClick={ () => handleEdit('payment') }>
            Edit
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
