import { Dialog, ThemeProvider, GlobalStyles } from '@mui/material';
import React, { useMemo, useState } from 'react';
import ConfigurationContext, {
  ConfigurationType,
  DefaultConfiguration,
} from '@providers/ConfigurationProvider';
import UserContext, { BillingFormData } from '@providers/UserProvider';
import { theme } from '@lib/theme/CreateTheme';
import { styles } from '@lib/theme/GlobalStyles';
import MojitoCheckoutLayout from '@views/MojitoCheckout/MojitoCheckOut.layout';
import { ThemeConfiguration } from '@lib/interfaces/ThemeConfiguration';
import { ContainerTypes } from '../constants/states';

interface MojitoCheckoutProps {
  uiConfiguration?: ConfigurationType;
  userInfo: BillingFormData;
  themeConfiguration?:ThemeConfiguration;
  show:boolean
}
const MojitoCheckout = ({
  uiConfiguration = DefaultConfiguration,
  userInfo,
  themeConfiguration,
  show,
}: MojitoCheckoutProps) => {
  const [containerState, setContainerState] = useState<ContainerTypes>(
    ContainerTypes.PAYMENT,
  );
  const themes = useMemo(() => theme(themeConfiguration), [themeConfiguration]);
  return (
    <Dialog open={ show } fullScreen>
      <ThemeProvider theme={ themes }>
        <UserContext.Provider value={ userInfo }>
          <ConfigurationContext.Provider value={ uiConfiguration }>
            <GlobalStyles styles={ styles } />
            <MojitoCheckoutLayout containerState={ containerState } setContainerState={setContainerState}/>
          </ConfigurationContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </Dialog>
  );
};
export default MojitoCheckout;
