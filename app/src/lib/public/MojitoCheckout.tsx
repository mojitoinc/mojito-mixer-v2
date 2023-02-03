import { Dialog, ThemeProvider, GlobalStyles,Modal } from "@mui/material";
import React, { useMemo, useState } from "react";
import ConfigurationContext, {
  ConfigurationType,
  DefaultConfiguration,
  makeUIConfiguration,
} from "@providers/ConfigurationProvider";
import { makeTheme } from "@lib/theme/CreateTheme";
import { styles } from "@lib/theme/GlobalStyles";
import MojitoCheckoutLayout from "@views/MojitoCheckout/MojitoCheckOut.layout";
import { ThemeConfiguration } from "@lib/interfaces/ThemeConfiguration";
import DeliveryContext, { Delivery } from "@lib/providers/DeliveryProvider";
import { MojitoApiProvider } from "@lib/state/MojitoApiProvider";
import BillingProvider from "@lib/providers/BillingProvider";
import PaymentProvider from "@lib/providers/PaymentProvider";
import ContainerStateProvider from "@lib/providers/ContainerStateProvider";
import ConnectContext, { ConnectType } from "@lib/state/ConnectContext";

interface MojitoCheckoutProps {
  uiConfiguration?: ConfigurationType;
  deliveryConfiguration: Delivery;
  theme?: ThemeConfiguration;
  show: boolean;
}
const MojitoCheckout = ({
  uiConfiguration = DefaultConfiguration,
  theme,
  show,
  deliveryConfiguration,
}: MojitoCheckoutProps) => {
  const [connect, setConnect] = useState<ConnectType>({
    connected: false,
    account: "",
    chainId: 4,
  });

  const themes = useMemo(() => makeTheme(theme), [theme]);
  const uiConfigurations = useMemo(
    () => makeUIConfiguration(uiConfiguration),
    [uiConfiguration]
  );

  return (
      <Modal open={false} 
      sx={{
    position:'absolute',
    top:'0%',
    left:'0%',
    overflow:'scroll',
    height:'100%',
    width:'100%',
    display:'block',
    backgroundColor:'#FFF'
      }}
      >
    <ConnectContext.Provider value={{ connect, setConnect }}>

        <MojitoApiProvider>
          <ThemeProvider theme={themes}>
            <DeliveryContext.Provider value={deliveryConfiguration}>
              <ConfigurationContext.Provider value={uiConfigurations}>
                <ContainerStateProvider
                  paymentId={deliveryConfiguration?.paymentId}
                >
                  <BillingProvider>
                    <PaymentProvider>
                      <GlobalStyles styles={styles} />
                      <MojitoCheckoutLayout />
                    </PaymentProvider>
                  </BillingProvider>
                </ContainerStateProvider>
              </ConfigurationContext.Provider>
            </DeliveryContext.Provider>
          </ThemeProvider>
        </MojitoApiProvider>
    </ConnectContext.Provider>

      </Modal>
  );
};
export default MojitoCheckout;
