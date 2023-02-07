import { ThemeProvider, GlobalStyles } from '@mui/material';
import React, { useMemo, useEffect } from 'react';
import {
  ConfigurationContext,
  ConfigurationType,
  DefaultConfiguration,
  makeUIConfiguration,
} from '@providers/ConfigurationProvider';
import { makeTheme, styles } from '@lib/theme';
import MojitoCheckoutLayout from '@views/index';
import { ThemeConfiguration } from '@lib/interfaces';
import {
  DeliveryContext,
  Delivery,
  ContainerStateProvider,
  BillingProvider,
  PaymentProvider,
  DebugProvider,
  ErrorProvider,
} from '@lib/providers';
import { MojitoApiProvider } from '@lib/state/MojitoApiProvider';
import { ConnectProvider } from '@lib/state/ConnectContext';
import Modal from 'react-modal';
import { uuid } from 'uuidv4';
import { SardineEnvironment } from '@lib/config';
import { useSardine } from '@lib/hooks';

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
  sardineEnvironment = 'production'
}: MojitoCheckoutProps) => {

  const setupSardine = useSardine(sardineEnvironment, enableSardine);

  useEffect(()=>{
    setupSardine();
  }, [ setupSardine]);
  
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
