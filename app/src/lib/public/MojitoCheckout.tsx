import { ThemeProvider, GlobalStyles } from '@mui/material';
import React, { useMemo } from 'react';
import Modal from 'react-modal';
import {
  ConfigurationContext,
  ConfigurationType,
  DefaultConfiguration,
  makeUIConfiguration,
} from '../providers/ConfigurationProvider';
import { makeTheme, styles } from '../theme';
import MojitoCheckoutView from '../views/index';
import { ThemeConfiguration } from '../interfaces';
import {
  DeliveryContext,
  Delivery,
  ContainerStateProvider,
  BillingProvider,
  PaymentProvider,
  DebugProvider,
  ErrorProvider,
} from '../providers';
import { MojitoApiProvider } from '../state/MojitoApiProvider';
import { ConnectProvider } from '../state/ConnectContext';
import { SardineEnvironment } from '../config';
import { ProvidersInjectorProps, withProviders } from '../providers/ProvidersInjector';

declare global {
  interface Window {
    _Sardine: any;
  }
}

interface MojitoCheckoutProps {
  uiConfiguration?: ConfigurationType;
  deliveryConfiguration: Delivery;
  theme?: ThemeConfiguration;
  show: boolean;
  debug?: boolean;
  sardineEnvironment?: SardineEnvironment;
  enableSardine?: boolean;
}
const MojitoCheckout: React.FC<MojitoCheckoutProps> = ({
// const MojitoCheckout = ({
  uiConfiguration = DefaultConfiguration,
  theme,
  show,
  debug = false,
  deliveryConfiguration,
  enableSardine = false,
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
        {/* <MojitoApiProvider> */}
          <ThemeProvider theme={ themes }>
            <DeliveryContext.Provider value={ deliveryConfiguration }>
              <ConfigurationContext.Provider value={ uiConfigurations }>
                <ContainerStateProvider
                  paymentId={ deliveryConfiguration?.paymentId }>
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
              </ConfigurationContext.Provider>
            </DeliveryContext.Provider>
          </ThemeProvider>
        {/* </MojitoApiProvider> */}
      </DebugProvider>
    </Modal>
  );
};
export type PUICheckoutProps = MojitoCheckoutProps & ProvidersInjectorProps;
 const PUIMojitoCheckout: React.FC<PUICheckoutProps> = withProviders(MojitoCheckout);

export default PUIMojitoCheckout;
