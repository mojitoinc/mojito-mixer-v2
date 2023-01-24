import { Dialog, ThemeProvider, GlobalStyles } from '@mui/material';
import React, { useMemo, useState } from 'react';
import ConfigurationContext, {
  ConfigurationType,
  DefaultConfiguration,
} from '@providers/ConfigurationProvider';
import UserContext, { BillingFormData } from '@providers/UserProvider';
import { makeTheme } from '@lib/theme/CreateTheme';
import { styles } from '@lib/theme/GlobalStyles';
import MojitoCheckoutLayout, { ContainerTypes } from '@views/MojitoCheckout/MojitoCheckOut.layout';
import { ThemeConfiguration } from '@lib/interfaces/ThemeConfiguration';


interface MojitoCheckoutProps {
  uiConfiguration?: ConfigurationType;
  userInfo: BillingFormData;
  theme?:ThemeConfiguration;
  show: boolean;
}
const MojitoCheckout = ({
  uiConfiguration = DefaultConfiguration,
  userInfo,
  theme,
  show,
}: MojitoCheckoutProps) => {
  const [containerState, setContainerState] = useState<ContainerTypes>(
    ContainerTypes.CHECKOUT,
  );

  const themes = useMemo(() => makeTheme(theme), [theme]);

  return (
    <Dialog open={ show } fullScreen>
      <ThemeProvider theme={ themes }>
        <UserContext.Provider value={ userInfo }>
          <ConfigurationContext.Provider value={ uiConfiguration }>
            <GlobalStyles styles={ styles } />
            <MojitoCheckoutLayout containerState={ containerState } setContainerState={ setContainerState } />
          </ConfigurationContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </Dialog>
  );
};
export default MojitoCheckout;
