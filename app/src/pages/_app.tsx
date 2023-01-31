import { Auth0Provider } from '@auth0/auth0-react';
import { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import Head from 'next/head';
import { GlobalStyles } from '@mui/material';
import { MojitoApiProvider } from 'state/MojitoApiProvider';
import { Container, Header, GLOBAL_STYLES } from '../component/core';
import { RuntimeConfig } from '../constant';
import './fonts.css';

const defaultTheme = createTheme();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Auth0Provider
      domain={ RuntimeConfig.AUTH0_DOMAIN }
      clientId={ RuntimeConfig.AUTH0_CLIENTID }
      redirectUri={ RuntimeConfig.AUTH_REDIRECT_URI }>
      <MojitoApiProvider>
        <Head>
          <title>Mojito - Payment UI Playground</title>

          <link rel="shortcut icon" href="/favicon.png" />

          { /* eslint-disable-next-line @next/next/no-css-tags */ }
          <link href="/fonts/style.css" rel="stylesheet" />
        </Head>

        <ThemeProvider theme={ defaultTheme }>

          <GlobalStyles styles={ GLOBAL_STYLES } />

          <Container>
            <Header />
            <Component { ...pageProps } />
          </Container>

        </ThemeProvider>
      </MojitoApiProvider>
    </Auth0Provider>
  );
};

/*
MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};
*/

export default MyApp;
