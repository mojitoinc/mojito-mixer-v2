import { MixTheme } from '@lib/theme/ThemeOptions';
import { Card, useTheme, Box, Typography, Divider, Stack } from '@mui/material';
import React, { useCallback } from 'react';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import { Icons } from '@lib/assets';
import { BillingFormData } from '@lib/providers/BillingProvider';
import { PaymentData } from '@lib/providers/PaymentProvider';
import { PaymentTypes } from '@lib/constants/states';
import { useContainer } from '@lib/providers/ContainerStateProvider';
import { ContainerTypes } from '@views/MojitoCheckout/MojitoCheckOut.layout';

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
        justifyContent="space-between"
        alignItems="flex-start">
        <Box width="50%" display="flex">
          <Typography
            variant="body2"
            sx={{ color: theme.global?.cardGrayedText, marginRight: 7 }}>
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
            sx={{ color: theme.global?.cardGrayedText, marginRight: 7 }}>
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
                <FileCopyIcon
                  sx={{
                    width: '14px',
                    padding: '4px',
                    marginLeft: '4px',
                    height: '14px',
                    color: theme.global?.confirmationColors?.copyIconColor,
                  }} />
              </Stack>
            </Box>
          ) }
          { paymentInfo?.paymentType === PaymentTypes.CREDIT_CARD && (
            <Box>
              <Typography variant="body2" sx={{ marginBottom: '4px' }}>
                Credit Card
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '4px' }}>
                { paymentInfo?.creditCardData?.cardData?.billingDetails?.name ??
                  `${ paymentInfo?.creditCardData?.firstName } ${ paymentInfo?.creditCardData?.lastName }` }
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
