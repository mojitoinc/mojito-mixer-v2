import { ThemeProvider, GlobalStyles } from '@mui/material';
import React, { useMemo, useState } from 'react';
import ConfigurationContext, {
  ConfigurationType,
  DefaultConfiguration,
  makeUIConfiguration,
} from '@providers/ConfigurationProvider';
import { makeTheme } from '@lib/theme/CreateTheme';
import { styles } from '@lib/theme/GlobalStyles';
import MojitoCheckoutLayout from '@views/MojitoCheckout/MojitoCheckOut.layout';
import { ThemeConfiguration } from '@lib/interfaces';
import DeliveryContext, { Delivery } from '@lib/providers/DeliveryProvider';
import { MojitoApiProvider } from '@lib/state/MojitoApiProvider';
import BillingProvider from '@lib/providers/BillingProvider';
import PaymentProvider from '@lib/providers/PaymentProvider';
import ContainerStateProvider from '@lib/providers/ContainerStateProvider';
import { DebugProvider, ErrorProvider } from '@lib/providers';
import ConnectContext, { ConnectType } from '@lib/state/ConnectContext';
import Modal from 'react-modal';


interface MojitoCheckoutProps {
  uiConfiguration?: ConfigurationType;
  deliveryConfiguration: Delivery;
  theme?: ThemeConfiguration;
  show: boolean;
  debug?: boolean;
}

const MojitoCheckout = ({
  uiConfiguration = DefaultConfiguration,
  theme,
  show,
  debug = false,
  deliveryConfiguration,
}: MojitoCheckoutProps) => {
  const [connect, setConnect] = useState<ConnectType>({
    connected: false,
    account: '',
    chainId: 4,
  });

  const themes = useMemo(() => makeTheme(theme), [theme]);
  
  const uiConfigurations = useMemo(
    () => makeUIConfiguration(uiConfiguration),
    [uiConfiguration],
  );

  const connectValues = useMemo(() => {
    return { connect, setConnect };
  }, [connect, setConnect]);

  return (
    <Modal
      ariaHideApp={false}
      isOpen={ show }
      style={{
        content:{
          width:'100%',
          height:'100vh',
          top:0,
          left:0,
          bottom:0,
          right:0,
          padding:0,
        },
      }}
      >
      <ConnectContext.Provider value={ connectValues }>
        <DebugProvider debug={ debug }>
          <ErrorProvider>
            <MojitoApiProvider>
              <ThemeProvider theme={ themes }>
                <DeliveryContext.Provider value={ deliveryConfiguration }>
                  <ConfigurationContext.Provider value={ uiConfigurations }>
                    <ContainerStateProvider
                      paymentId={ deliveryConfiguration?.paymentId }>
                      <BillingProvider>
                        <PaymentProvider>
                          <GlobalStyles styles={ styles } />
                          <MojitoCheckoutLayout />
                        </PaymentProvider>
                      </BillingProvider>
                    </ContainerStateProvider>
                  </ConfigurationContext.Provider>
                </DeliveryContext.Provider>
              </ThemeProvider>
            </MojitoApiProvider>
          </ErrorProvider>
        </DebugProvider>
      </ConnectContext.Provider>
    </Modal>
  );
};
export default MojitoCheckout;
