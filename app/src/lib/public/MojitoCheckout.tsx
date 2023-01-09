import { CONTAINERSTATES } from "@lib/constants/states";
import { Dialog, ThemeProvider, GlobalStyles, Box } from "@mui/material";
import React, { useState } from "react";
import ConfigurationContext, {
  ConfigurationType,
  DefaultConfiguration,
} from "@providers/ConfigurationProvider";
import UserContext, { UserType } from "@providers/UserProvider";
import { theme } from "@lib/theme/CreateTheme";
import { styles } from "@lib/theme/GlobalStyles";
import CheckOutContainer from "@views/CheckOut";

interface MojitoCheckoutProps {
  uiConfiguration?: ConfigurationType;
  userInfo: UserType;
}
const MojitoCheckout = ({
  uiConfiguration = DefaultConfiguration,
  userInfo,
}: MojitoCheckoutProps) => {
  const [containerState, setContainerState] = useState<CONTAINERSTATES>(
    CONTAINERSTATES.CHECKOUT,
  );
  const themes = theme();
  return (
    <Dialog open fullScreen>
      <ThemeProvider theme={ themes }>
        <UserContext.Provider value={ userInfo }>
          <ConfigurationContext.Provider value={ uiConfiguration }>
            <GlobalStyles styles={ styles } />
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
              }}>
              { containerState === CONTAINERSTATES.CHECKOUT && <CheckOutContainer /> }
            </Box>
          </ConfigurationContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </Dialog>
  );
};
export default MojitoCheckout;
