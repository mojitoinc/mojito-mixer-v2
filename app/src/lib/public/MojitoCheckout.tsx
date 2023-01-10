import { Dialog, ThemeProvider, GlobalStyles } from '@mui/material';
import React, { useState } from 'react';
import ConfigurationContext, {
  ConfigurationType,
  DefaultConfiguration,
} from '@providers/ConfigurationProvider';
import UserContext, { UserType } from '@providers/UserProvider';
import { theme } from '@lib/theme/CreateTheme';
import { styles } from '@lib/theme/GlobalStyles';
import MojitoCheckoutLayout from '@views/MojitoCheckout/MojitoCheckOut.layout';
import { ThemeConfiguration } from '@lib/interfaces/ThemeConfiguration';
import { ContainerTypes } from '../constants/states';

interface MojitoCheckoutProps {
  uiConfiguration?: ConfigurationType;
  userInfo: UserType;
  themeConfiguration?:ThemeConfiguration;
}
const MojitoCheckout = ({
  uiConfiguration = DefaultConfiguration,
  userInfo,
  themeConfiguration,
}: MojitoCheckoutProps) => {
  const [containerState, setContainerState] = useState<ContainerTypes>(
    ContainerTypes.CHECKOUT,
  );
  const themes = theme(themeConfiguration);
  return (
    <Dialog open fullScreen>
      <ThemeProvider theme={ themes }>
        <UserContext.Provider value={ userInfo }>
          <ConfigurationContext.Provider value={ uiConfiguration }>
            <GlobalStyles styles={ styles } />
            <MojitoCheckoutLayout containerState={ containerState } />
          </ConfigurationContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </Dialog>
  );
};
export default MojitoCheckout;
