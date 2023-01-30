import { Dialog, ThemeProvider, GlobalStyles } from "@mui/material";
import React, { useMemo } from "react";
import ConfigurationContext, {
  ConfigurationType,
  DefaultConfiguration,
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

  const themes = useMemo(() => makeTheme(theme), [theme]);

  return (
    <Dialog open={show} fullScreen>
      <MojitoApiProvider>
        <ThemeProvider theme={themes}>
          <DeliveryContext.Provider value={deliveryConfiguration}>
            <ConfigurationContext.Provider value={uiConfiguration}>
              <ContainerStateProvider>
                <BillingProvider>
                  <PaymentProvider>
                    <GlobalStyles styles={styles} />
                    <MojitoCheckoutLayout
                    />
                  </PaymentProvider>
                </BillingProvider>
              </ContainerStateProvider>
            </ConfigurationContext.Provider>
          </DeliveryContext.Provider>
        </ThemeProvider>
      </MojitoApiProvider>
    </Dialog>
  );
};
export default MojitoCheckout;
