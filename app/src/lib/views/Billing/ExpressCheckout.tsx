import LinedText from '@components/shared/LinedText';
import { Box, useTheme } from '@mui/material';
import React from 'react';
import Button from '@components/shared/Button';
import { MixTheme } from '@lib/theme/ThemeOptions';
import { Icons } from '@lib/assets';

interface ExpressCheckoutViewProps {
  config: {
      gpay: boolean;
      applepay: boolean;
      walletConnect: boolean;
      metaMask: boolean;
  }
}

const ExpressCheckoutView = ({ config } :ExpressCheckoutViewProps) => {
  const theme = useTheme<MixTheme>();
  return (
    <Box margin="8px 0px">
      <LinedText text="Express Checkout" />
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          margin: '30px 0px',
        }}>
        { config.gpay && (
        <Button
          backgroundColor={ theme.global?.black }
          sx={{
            width: '90px',
            margin: '0px 8px',
          }}>
          <img src={ Icons.gpay } width="50px" height="20px" alt="Google pay" />
        </Button>
        ) }
        {
            config.applepay && (
            <Button
              backgroundColor={ theme.global?.black }
              sx={{
                width: '90px',
                margin: '0px 8px',
              }}>
              <img src={ Icons.applepay } width="50px" height="20px" alt="Apple pay" />
            </Button>
            )
}
        {
            config.walletConnect && (
            <Button
              backgroundColor={ theme.global?.white }
              textColor={ theme.global?.black }
              sx={{
                width: '180px',
                margin: '0px 8px',
                border: `1px solid ${ theme.global?.black }`,
              }}
              title="Walletconnect">
              <img
                src={ Icons.walletConnect }
                width="16px"
                height="16px"
                style={{
                  marginRight: '8px',
                }}
                alt="Walletconnect" />
            </Button>
            )
}
        {
            config.metaMask && (
            <Button
              backgroundColor={ theme.global?.white }
              textColor={ theme.global?.black }
              sx={{
                width: '180px',
                height: '40px',
                margin: '0px 8px',
                border: `1px solid ${ theme.global?.black }`,
              }}
              title="Metamask">
              <img
                src={ Icons.metamask }
                width="16px"
                height="16px"
                alt="Metamask"
                style={{
                  marginRight: '8px',
                }} />
            </Button>
            )
}
      </Box>
      <LinedText text="OR" />
    </Box>
  );
};
export default ExpressCheckoutView;
