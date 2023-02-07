import { ThemeProvider, GlobalStyles } from '@mui/material';
import React, { useMemo, useEffect } from 'react';
import {
  ConfigurationContext,
  ConfigurationType,
  DefaultConfiguration,
  makeUIConfiguration,
} from '../providers/ConfigurationProvider';
import { makeTheme, styles } from '../theme';
import MojitoCheckoutLayout from '@views/index';
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
import Modal from 'react-modal';
import { SardineEnvironment } from '../config';
import { useSardine } from '../hooks';

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

const MojitoCheckout = ({
  uiConfiguration = DefaultConfiguration,
  theme,
  show,
  debug = false,
  deliveryConfiguration,
  enableSardine = false,
  sardineEnvironment = 'production',
}: MojitoCheckoutProps) => {
  const setupSardine = useSardine(sardineEnvironment, enableSardine);

  useEffect(() => {
    setupSardine();
  }, [setupSardine]);

  const themes = useMemo(() => makeTheme(theme), [theme]);

  const uiConfigurations = useMemo(
    () => makeUIConfiguration(uiConfiguration),
    [uiConfiguration],
  );

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
      <MojitoApiProvider>
        <DebugProvider debug={ debug }>
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
                          <MojitoCheckoutLayout />
                        </ConnectProvider>
                      </PaymentProvider>
                    </BillingProvider>
                  </ErrorProvider>
                </ContainerStateProvider>
              </ConfigurationContext.Provider>
            </DeliveryContext.Provider>
          </ThemeProvider>
        </DebugProvider>
      </MojitoApiProvider>
    </Modal>
  );
};
export default MojitoCheckout;
