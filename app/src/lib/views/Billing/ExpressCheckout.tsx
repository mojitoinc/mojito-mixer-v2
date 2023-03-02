import { Box, Grid, useTheme } from '@mui/material';
import React from 'react';
import { Button, LinedText } from '../../components';
import { MixTheme } from '../../theme';
import { Icons } from '../../assets';

interface ExpressCheckoutViewProps {
  config?: {
    gpay?: boolean;
    applepay?: boolean;
    walletConnect?: boolean;
    metaMask?: boolean;
  };
}

const ExpressCheckoutView = ({ config }: ExpressCheckoutViewProps) => {
  const theme = useTheme<MixTheme>();
  return (
    <Box marginBottom="24px">
      <LinedText text="Express Checkout" />
      <Grid
        sx={{
          margin: '24px 0px',
        }}
        container
        spacing={ 2 }>

        { config?.gpay && (
        <Grid xs={ 6 } lg={ 2 } item>
          <Button
            sx={{
              width: { xs: '100%', lg: '90px' },
            }}
            backgroundColor={ theme.global?.black }>
            <img src={ Icons.gpay } width="50px" height="20px" alt="Google pay" />
          </Button>
        </Grid>
        ) }

        { config?.applepay && (
        <Grid xs={ 6 } lg={ 2 } item>
          <Button
            backgroundColor={ theme.global?.black }
            sx={{
              width: { xs: '100%', lg: '90px' },
            }}>
            <img
              src={ Icons.applepay }
              width="50px"
              height="20px"
              alt="Apple pay" />
          </Button>
        </Grid>
        ) }

        { config?.walletConnect && (
        <Grid xs={ 12 } lg={ 3 } md={ 6 } item>

          <Button
            backgroundColor={ theme.global?.white }
            textColor={ theme.global?.black }
            sx={{
              width: { xs: '100%', lg: '180px' },
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
        </Grid>
        ) }

        { config?.metaMask && (
        <Grid xs={ 12 } lg={ 3 } md={ 6 } item>

          <Button
            backgroundColor={ theme.global?.white }
            textColor={ theme.global?.black }
            sx={{
              width: { xs: '100%', lg: '180px' },
              height: '40px',
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
        </Grid>
        ) }
      </Grid>
      <LinedText text="OR" />
    </Box>
  );
};
export default ExpressCheckoutView;
