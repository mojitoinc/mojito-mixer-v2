import { ThemeProvider, GlobalStyles } from '@mui/material';
import React, { useMemo } from 'react';
import Modal from 'react-modal';
import {
  UIConfigurationContext,
} from '../providers/UIConfigurationProvider';
import { makeTheme, styles } from '../theme';
import MojitoCheckoutView from '../views/index';
import { ThemeConfiguration } from '../interfaces';
import {
  CheckoutContext,
  ContainerStateProvider,
  BillingProvider,
  PaymentProvider,
  DebugProvider,
  ErrorProvider,
} from '../providers';
import { ConnectProvider } from '../providers/ConnectContext';
import { SardineEnvironment } from '../config';
import { ProvidersInjectorProps, withProviders } from '../providers/ProvidersInjector';
import {  DefaultUIConfiguration, makeUIConfiguration } from '../config/UIConfiguration';
import { UIConfiguration, CheckoutOptions } from '../interfaces/ContextInterface';

declare global {
  interface Window {
    _Sardine: any;
  }
}

interface MojitoCheckoutProps {
  uiConfiguration?: UIConfiguration;
  checkoutOptions: CheckoutOptions;
  theme?: ThemeConfiguration;
  success?: boolean;
  show: boolean;
  debug?: boolean;
  sardineEnvironment?: SardineEnvironment;
  enableSardine?: boolean;
}
const MojitoCheckout: React.FC<MojitoCheckoutProps> = ({
  uiConfiguration = DefaultUIConfiguration,
  theme,
  show,
  debug = false,
  checkoutOptions,
  enableSardine = false,
  success,
  sardineEnvironment = 'production',
}: MojitoCheckoutProps) => {
  const themes = useMemo(() => makeTheme(theme), [theme]);

  const uiConfigurations = useMemo(
    () => makeUIConfiguration(uiConfiguration),
    [uiConfiguration],
  );

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);

  //   params.delete(THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY);
  //   // window.location.replace(pathnameOrUrl);
  //   window.history.replaceState(null, '', window.location.pathname);

  //   // params.delete(THREEDS_FLOW_SEARCH_PARAM_ERROR_KEY);
  // }, []);
  return (
    <Modal
      ariaHideApp={ false }
      isOpen={ show }
      style={{
        content: {
          width: '100%',
          height: '100vh',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          padding: 0,
        },
      }}>
      <DebugProvider debug={ debug }>
        <ThemeProvider theme={ themes }>
          <CheckoutContext.Provider value={ checkoutOptions }>
            <UIConfigurationContext.Provider value={ uiConfigurations }>
              <ContainerStateProvider
                paymentId={ checkoutOptions?.paymentId } success={success} > 
                <ErrorProvider>
                  <BillingProvider>
                    <PaymentProvider>
                      <ConnectProvider>
                        <GlobalStyles styles={ styles } />
                        <MojitoCheckoutView enableSardine={ enableSardine } sardineEnvironment={ sardineEnvironment } />
                      </ConnectProvider>
                    </PaymentProvider>
                  </BillingProvider>
                </ErrorProvider>
              </ContainerStateProvider>
            </UIConfigurationContext.Provider>
          </CheckoutContext.Provider>
        </ThemeProvider>
      </DebugProvider>
    </Modal>
  );
};
export type PUICheckoutProps = MojitoCheckoutProps & ProvidersInjectorProps;
const PUIMojitoCheckout: React.FC<PUICheckoutProps> = withProviders(MojitoCheckout);

export default PUIMojitoCheckout;
