import { ThemeProvider, GlobalStyles } from '@mui/material';
import React, { useMemo } from 'react';
import Modal from 'react-modal';
import { UIConfigurationContext } from '../providers/UIConfigurationProvider';
import { makeTheme, styles } from '../theme';
import MojitoCheckoutView from '../views/index';
import { MojitoThemeConfiguration } from '../interfaces';
import {
  CheckoutContext,
  ContainerStateProvider,
  BillingProvider,
  PaymentProvider,
  DebugProvider,
  ErrorProvider,
  EventContext,
  EventConfig,
  SecurityContext,
  UserInfoContext,
} from '../providers';
import { ConnectProvider } from '../providers/ConnectContext';
import { SardineEnvironment } from '../config';
import {
  ProvidersInjectorProps,
  withProviders,
} from '../providers/ProvidersInjector';
import {
  DefaultUIConfiguration,
  makeUIConfiguration,
} from '../config/UIConfiguration';
import {
  CheckoutOptions,
  MojitoUIConfiguration,
  UserInfo,
} from '../interfaces/ContextInterface';

declare global {
  interface Window {
    _Sardine: any;
  }
}

interface MojitoCheckoutProps {
  uiConfiguration?: MojitoUIConfiguration;
  checkoutOptions: CheckoutOptions;
  theme?: MojitoThemeConfiguration;
  success?: boolean;
  show: boolean;
  debug?: boolean;
  sardineEnvironment?: SardineEnvironment;
  enableSardine?: boolean;
  events?: EventConfig;
  userInfo: UserInfo;
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
  events = {},
  userInfo,
}: MojitoCheckoutProps) => {
  const themes = useMemo(() => makeTheme(theme), [theme]);

  const uiConfigurations = useMemo(
    () => makeUIConfiguration(uiConfiguration),
    [uiConfiguration],
  );

  const securityParams = useMemo(() => {
    return { sardineEnvironment, enableSardine };
  }, [sardineEnvironment, enableSardine]);

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
          width: '100vw',
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
            <UserInfoContext.Provider value={ userInfo }>
              <SecurityContext.Provider value={ securityParams }>
                <UIConfigurationContext.Provider value={ uiConfigurations }>
                  <EventContext.Provider value={ events }>
                    <ContainerStateProvider
                      paymentId={ checkoutOptions?.paymentId }
                      success={ success }>
                      <ErrorProvider>
                        <BillingProvider>
                          <ConnectProvider>
                            <PaymentProvider>
                              <GlobalStyles styles={ styles } />
                              <MojitoCheckoutView
                                enableSardine={ enableSardine }
                                sardineEnvironment={ sardineEnvironment } />
                            </PaymentProvider>
                          </ConnectProvider>
                        </BillingProvider>
                      </ErrorProvider>
                    </ContainerStateProvider>
                  </EventContext.Provider>
                </UIConfigurationContext.Provider>
              </SecurityContext.Provider>
            </UserInfoContext.Provider>
          </CheckoutContext.Provider>
        </ThemeProvider>
      </DebugProvider>
    </Modal>
  );
};
export type PUICheckoutProps = MojitoCheckoutProps & ProvidersInjectorProps;
const PUIMojitoCheckout: React.FC<PUICheckoutProps> =
  withProviders(MojitoCheckout);

export default PUIMojitoCheckout;
