import { ThemeProvider, GlobalStyles } from "@mui/material";
import React, { useMemo, useState, useEffect } from "react";
import {
  ConfigurationContext,
  ConfigurationType,
  DefaultConfiguration,
  makeUIConfiguration,
} from "@providers/ConfigurationProvider";
import { makeTheme, styles } from "@lib/theme";
import MojitoCheckoutLayout from "@views/index";
import { ThemeConfiguration } from "@lib/interfaces";
import {
  DeliveryContext,
  Delivery,
  ContainerStateProvider,
  BillingProvider,
  PaymentProvider,
  DebugProvider,
  ErrorProvider,
} from "@lib/providers";
import { MojitoApiProvider } from "@lib/state/MojitoApiProvider";
import  { ConnectProvider } from "@lib/state/ConnectContext";
import Modal from "react-modal";
import { uuid } from "uuidv4";

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
}

const MojitoCheckout = ({
  uiConfiguration = DefaultConfiguration,
  theme,
  show,
  debug = false,
  deliveryConfiguration,
}: MojitoCheckoutProps) => {
  useEffect(() => {
    const loader = document.createElement("script");
    const sardineConfig = {
      host: "api.sandbox.sardine.ai",
      clientId: "30e33d73-f443-4178-9ac5-e7f100f4c6cb",
      environment: "sandbox",
      isSardineEnabled: true,
    };
    if (sardineConfig.isSardineEnabled) {
      const sardineHost = sardineConfig.host;

      let localSardineCtxt = null;
      loader.type = "text/javascript";
      loader.async = true;
      loader.src = `https://${sardineHost}/assets/loader.min.js`;
      loader.onload = function createSardineContext() {
        /* eslint no-underscore-dangle: ["error", { "allow": ["_Sardine"] }] */
        // const user: any = meData?.me?.user;
        localSardineCtxt = window._Sardine.createContext({
          clientId: sardineConfig.clientId,
          sessionKey: uuid(),
          userIdHash: "b62813c9-88b1-496c-9b3b-59f457e71a36",
          flow: window.location.pathname,
          parentElement: document.body,
          environment: sardineConfig.environment,
          onDeviceResponse(data: any) {
            console.log(`sardine's deviceID is ${data.deviceId}`);
          },
        });
        // setSardineContext(localSardineCtxt);
      };
    }
    document.body.appendChild(loader);

    return () => {
      document.body.removeChild(loader);
    };
  }, []);

  const themes = useMemo(() => makeTheme(theme), [theme]);

  const uiConfigurations = useMemo(
    () => makeUIConfiguration(uiConfiguration),
    [uiConfiguration]
  );


  return (
    <Modal
      ariaHideApp={false}
      isOpen={show}
      style={{
        content: {
          width: "100%",
          height: "100vh",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          padding: 0,
        },
      }}
    >
      <MojitoApiProvider>
        <DebugProvider debug={debug}>
            <ThemeProvider theme={themes}>
                <DeliveryContext.Provider value={deliveryConfiguration}>
                  <ConfigurationContext.Provider value={uiConfigurations}>
                    <ContainerStateProvider
                      paymentId={deliveryConfiguration?.paymentId}
                    >
                      <ErrorProvider>
                      <BillingProvider>
                        <PaymentProvider>
                          <ConnectProvider>

                          <GlobalStyles styles={styles} />
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
