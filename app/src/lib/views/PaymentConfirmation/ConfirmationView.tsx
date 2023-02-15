import { Box, Card, Typography, useTheme } from '@mui/material';
import React, { useMemo } from 'react';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import { Button } from '../../components';
import { MixTheme } from '../../theme';
import { PaymentStatus, PaymentTypes } from '../../constants';
import { usePaymentInfo } from '../../hooks';
import { useUIConfiguration } from '../../providers';
import RowItem from './RowItem';
import PaymentDetailsView from './PaymentDetailsView';

interface ConfirmationViewProps {
  paymentStatus: string;
}

const ConfirmationView = ({ paymentStatus }: ConfirmationViewProps) => {
  const theme = useTheme<MixTheme>();
  const { paymentInfo, billingInfo } = usePaymentInfo();
  const { paymentConfirmation: paymentConfiguration } = useUIConfiguration();

  const backgroundColor = useMemo(() => {
    return paymentStatus === PaymentStatus.PENDING
      ? theme.global?.paymentConfirmation?.awaitingPaymentBackground
      : paymentStatus === PaymentStatus.COMPLETED
        ? theme.global?.paymentConfirmation?.processedBackground
        : theme.global?.paymentConfirmation?.awaitingPaymentBackground;
  }, [paymentStatus, theme]);

  const textColor = useMemo(
    () => (paymentStatus === PaymentStatus.PENDING
      ? theme.global?.paymentConfirmation?.awaitingPaymentTextColor
      : paymentStatus === PaymentStatus.COMPLETED
        ? theme.global?.paymentConfirmation?.processedTextColor
        : theme.global?.paymentConfirmation?.awaitingPaymentTextColor),
    [paymentStatus, theme],
  );

  const status = useMemo(() => {
    return paymentStatus === PaymentStatus.PENDING
      ? 'Awaiting Payment'
      : paymentStatus === PaymentStatus.COMPLETED
        ? 'Processed'
        : 'Inprogress';
  }, [paymentStatus]);

  return (
    <Box sx={{ margin: '24px 0px' }}>
      <Card
        sx={{
          padding: '24px',
          borderRadius: '4px',
        }}>
        <Typography fontWeight="500" fontSize="20px" marginBottom="8px">
          You&apos;re all set! We&apos;ve received your order.
        </Typography>
        <Typography
          fontSize="16px"
          variant="body1"
          color={ theme.global?.unHighlightedText }>
          Order #: 1241359891385198375983798
        </Typography>
        { paymentInfo?.paymentType === PaymentTypes.WIRE_TRANSFER &&
          paymentConfiguration?.wireTransferInstructions }
        { paymentInfo?.paymentType === PaymentTypes.CREDIT_CARD &&
          paymentConfiguration?.creditCardInstructions }
        { paymentInfo?.paymentType === PaymentTypes.WIRE_TRANSFER &&
          <PaymentDetailsView />
        }
      </Card>
      <Card
        sx={{
          padding: '24px 24px 0',
          borderRadius: '4px',
          margin: '24px 0px ',
        }}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Typography fontWeight="500" fontSize="20px">
            Order Details
          </Typography>
          <Box
            sx={{
              backgroundColor,
              padding: '5px 8px',
              borderRadius: '4px',
            }}>
            <Typography fontWeight="700" fontSize="12px" color={ textColor }>
              { status }
            </Typography>
          </Box>
        </Box>
        { paymentInfo?.destinationAddress === ''
          ? (
            <RowItem
              title="Delivery Address">
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                padding="4px 12px"
                borderRadius="4px"
                sx={{
                  background: theme.global?.multiSigBackground,
                  border: `1px solid ${ theme.global?.multiSigBorder }`,
                }}>
                <Typography color={ theme.global?.multiSigText } fontWeight="700">
                  MultiSig
                </Typography>
                <InfoIcon
                  sx={{
                    color: theme.global?.multiSigText,
                    marginLeft: '8px',
                  }}
                  fontSize="small" />
              </Box>
            </RowItem>
          )
          : (
            <RowItem
              title="Delivery Address"
              value={ paymentInfo?.destinationAddress }
              copyValue={ paymentInfo?.destinationAddress }
              showCopy
              isWire={ paymentInfo?.paymentType === PaymentTypes.WIRE_TRANSFER } />
          ) }
        { paymentInfo?.paymentType === PaymentTypes.WIRE_TRANSFER && (
          <Typography
            variant="body2"
            sx={{
              color: theme?.global?.cardGrayedText,
              padding: '0 16px 16px',
              backgroundColor: theme?.global?.background,
              border: `1px solid ${ theme.global?.cardBorder }`,
              borderTop: 0,
              borderRadius: '0 0 4px 4px',
            }}>
            If you selected to have your NFT(s) transferred directly to your
            non-custodial wallet (such as MetaMask), we will do so as soon as
            payment confirmation is received; otherwise, your NFT(s) will be
            transferred to a MultiSig wallet (also known as a custodial wallet)
            for safekeeping. You can view your NFT(s) on your Account page at
            any time.
          </Typography>
        ) }
        { paymentInfo?.paymentType === PaymentTypes.WALLET_CONNECT && (
          <RowItem
            title="Transaction Hash"
            value="0x09750ad...360fdb7"
            copyValue="0x09750"
            showCopy />
        ) }
        { paymentInfo?.paymentType === PaymentTypes.WALLET_CONNECT && (
          <RowItem
            title="Payment Method"
            copyValue={ paymentInfo?.paymentId }
            showCopy>
            <Typography fontSize="16px">
              Wallet Connect
              <br />
              { paymentInfo?.paymentId }
            </Typography>
          </RowItem>
        ) }
        { paymentInfo?.paymentType === PaymentTypes.WIRE_TRANSFER && (
          <RowItem title="Payment Method">
            <Typography variant="body1" fontSize="16px">
              { paymentInfo?.paymentType }
              <br />
              {
                paymentInfo?.wireData?.iban
                  ? (
                    <>
                      { paymentInfo?.wireData?.iban }
                    </>
                  )
                  : (
                    <>
                      { paymentInfo?.wireData?.accountNumber }
                      <br />
                      { paymentInfo?.wireData?.routingNumber }
                    </>
                  )
              }

              <br />
              { paymentInfo?.wireData?.bankAddress?.country }
              <br />
              { paymentInfo?.wireData?.bankAddress?.bankName }
            </Typography>
          </RowItem>
        ) }
        <Box sx={{ marginBottom: '24px' }}>
          <RowItem title="Billing Information">
            <Typography fontSize="16px">
              { billingInfo?.name }
              <br />
              { billingInfo?.state }, { billingInfo?.postalCode }{ ' ' }
              { billingInfo?.country }
              <br />
              { billingInfo?.phoneNumber }
            </Typography>
          </RowItem>
        </Box>
      </Card>
      <Box display="flex" flexDirection="row" justifyContent="flex-end">
        <Button
          title="Back To Marketplace"
          sx={{
            background: theme.palette.primary?.main,
          }}
          onClick={ paymentConfiguration?.onGoTo } />
      </Box>
    </Box>
  );
};
export default ConfirmationView;
