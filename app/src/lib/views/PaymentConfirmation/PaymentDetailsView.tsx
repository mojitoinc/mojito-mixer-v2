import { Box, Theme, useTheme, SxProps } from '@mui/material';
import React, { useMemo } from 'react';
import { usePaymentInfo } from '../../hooks';
import { MixTheme } from '../../theme';
import RowItem from './RowItem';

const PaymentDetailsView = () => {
  const theme = useTheme<MixTheme>();
  const { paymentResult } = usePaymentInfo();

  const style = useMemo(() => {
    return {
      border: 'none',
      padding: '0px',
    } as SxProps<Theme>;
  }, []);

  return (
    <Box
      sx={{
        padding: '0px 16px',
        background: theme.global?.background,
        border: `1px solid ${ theme.global?.cardBorder }`,
        marginTop: '16px',
        borderRadius: '4px',
      }}>
      <RowItem
        title="Tracking Reference"
        showCopy
        value={ paymentResult?.details?.WireInstructions?.trackingRef }
        copyValue={ paymentResult?.details?.WireInstructions?.trackingRef }
        sx={ style } />
      <RowItem
        title="Bank Name"
        value={ paymentResult?.details?.WireInstructions?.beneficiaryBank?.name }
        sx={ style } />

      <RowItem
        title="Account Number"
        showCopy
        value={ paymentResult?.details?.WireInstructions?.beneficiaryBank
          ?.accountNumber }
        copyValue={ paymentResult?.details?.WireInstructions?.beneficiaryBank
          ?.accountNumber }
        sx={ style } />

      <RowItem
        title="Routing Number"
        showCopy
        value={ paymentResult?.details?.WireInstructions?.beneficiaryBank
          ?.routingNumber }
        copyValue={ paymentResult?.details?.WireInstructions?.beneficiaryBank
          ?.routingNumber }
        sx={ style } />

      <RowItem
        title="Swift code"
        showCopy
        value={ paymentResult?.details?.WireInstructions?.beneficiaryBank?.swiftCode }
        copyValue={ paymentResult?.details?.WireInstructions?.beneficiaryBank?.swiftCode }
        sx={ style } />
    </Box>
  );
};

export default PaymentDetailsView;
