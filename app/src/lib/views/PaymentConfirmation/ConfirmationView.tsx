import { Button } from '../../components';
import { MixTheme } from '../../theme';
import { Box, Card, Typography, useTheme } from '@mui/material';
import React, { useMemo } from 'react';
import { PaymentStatus, PaymentTypes } from '../../constants';
import { usePaymentInfo } from '../../hooks';
import { useUIConfiguration } from '../../providers';
import RowItem from './RowItem';

interface ConfirmationViewProps {
  paymentStatus: string;
}

const ConfirmationView = ({ paymentStatus }: ConfirmationViewProps) => {
  const theme = useTheme<MixTheme>();
  const { paymentInfo, billingInfo } = usePaymentInfo();
  const { paymentConfiguration } = useUIConfiguration();

  const backgroundColor = useMemo(() => {
    return paymentStatus === PaymentStatus.PENDING
      ? theme.global?.confirmationColors?.awaitingPaymentBackground
      : paymentStatus === PaymentStatus.COMPLETED
        ? theme.global?.confirmationColors?.processedBackground
        : theme.global?.confirmationColors?.awaitingPaymentBackground;
  }, [paymentStatus, theme]);

  const textColor = useMemo(
    () => (paymentStatus === PaymentStatus.PENDING
      ? theme.global?.confirmationColors?.awaitingPaymentTextColor
      : paymentStatus === PaymentStatus.COMPLETED
        ? theme.global?.confirmationColors?.processedTextColor
        : theme.global?.confirmationColors?.awaitingPaymentTextColor),
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
    <Box>
      <Card
        sx={{
          padding: '24px',
          borderRadius: '4px',
        }}>
        <Typography fontWeight="500" fontSize="20px">
          You&apos;re all set! We&apos;ve received your order.
        </Typography>
        <Typography fontSize="16px" color={ theme.global?.unHighlightedText }>
          Order #: 1241359891385198375983798
        </Typography>
        {
          paymentInfo?.paymentType === PaymentTypes.WIRE_TRANSFER && paymentConfiguration?.wireTransferInstructions
        }
        {
          paymentInfo?.paymentType === PaymentTypes.CREDIT_CARD && paymentConfiguration?.creditCardInstructions
        }
      </Card>
      <Card
        sx={{
          padding: '24px',
          borderRadius: '4px',
          margin: '24px 0px',
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

        <RowItem
          title="Delivery Address"
          value={ paymentInfo?.destinationAddress }
          copyValue={ paymentInfo?.destinationAddress }
          showCopy />
        { paymentInfo?.paymentType === PaymentTypes.WIRE_TRANSFER && (
          <Typography variant="body2">
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
          <RowItem title="Payment Method" copyValue={ paymentInfo?.paymentId } showCopy>
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
              { paymentInfo.paymentType }
              <br />
              { paymentInfo?.wireData?.accountNumber }
              <br />
              { paymentInfo?.wireData?.routingNumber }
              <br />
              { paymentInfo?.wireData?.bankAddress?.country }
              <br />
              { paymentInfo?.wireData?.bankAddress?.bankName }
            </Typography>
          </RowItem>
        ) }
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
      </Card>
      <Box display="flex" flexDirection="row" justifyContent="flex-end">
        <Button
          title="Back To Marketplace"
          sx={{
            background: theme.palette.primary?.main,
          }}
          onClick={ paymentConfiguration?.onClickGoToMarketPlace } />
      </Box>
    </Box>
  );
};
export default ConfirmationView;
