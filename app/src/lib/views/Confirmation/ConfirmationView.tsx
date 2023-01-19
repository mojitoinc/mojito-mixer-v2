import Button from '@components/shared/Button';
import { MixTheme } from '@lib/theme/ThemeOptions';
import { Box, Card, Typography, useTheme } from '@mui/material';
import React from 'react';
import OrderDetails from './OrderDetails';

const ConfirmationView = () => {
  const theme = useTheme<MixTheme>();
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
        <Typography marginTop="16px">
          We received your payment and it should be fully processed within the
          next 24 hours. As soon as everything is confirmed, we&apos;ll send you an
          email to account@email.com with your order confirmation and receipt.
          <br />
          <br />
          Since you paid with a credit card, your NFT(s) will be transferred to
          a MultiSig wallet (also known as a custodial wallet) for safekeeping.
          Don&apos;t worry, you can still view your NFT(s) on your Account page.
          <br />
          <br />
          After 14 days have passed, you&apos;ll be able to transfer your NFT(s) to a
          non-custodial wallet (like MetaMask) if you&apos;d like!
        </Typography>
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
              backgroundColor:
                theme.global?.confirmationColors?.processedBackground,
              padding: '5px 8px',
              borderRadius: '4px',
            }}>
            <Typography
              fontWeight="700"
              fontSize="12px"
              color={ theme.global?.confirmationColors?.processedTextColor }>
              Processed
            </Typography>
          </Box>
        </Box>

        <OrderDetails
          title="Delivery Address"
          value="0x09750ad...360fdb7"
          copyValue="0x09750"
          showCopy />
        <OrderDetails
          title="Transaction Hash"
          value="0x09750ad...360fdb7"
          copyValue="0x09750"
          showCopy />
        <OrderDetails title="Payment Method" copyValue="0x09750" showCopy>
          <Typography
            fontSize="16px">
            Wallet Connect<br />0x09750ad...360fdb7
          </Typography>
        </OrderDetails>
        <OrderDetails title="Billing Information">
          <Typography
            fontSize="16px">
            First Last<br />State, ZIP  USA
            <br />+1 123-123-1234
          </Typography>
        </OrderDetails>
      </Card>
      <Box display="flex" flexDirection="row" justifyContent="flex-end">
        <Button title="Back To Marketplace" />
      </Box>
    </Box>
  );
};
export default ConfirmationView;
