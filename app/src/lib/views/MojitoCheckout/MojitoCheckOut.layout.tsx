import { Box, useTheme } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import Header from '@components/shared/Header';
import Stepper from '@components/shared/Stepper';
import { MixTheme } from '@lib/theme/ThemeOptions';
import CostBreakDownContainer from '@views/CostBreakDown';
import ConfirmationContainer from '@views/Confirmation';
import { ContainerTypes } from '../../constants/states';
import BillingContainer from '../Billing';
import { PaymentCheckout } from '@views/Payment';
import { Delivery } from '@views/Delivery';

interface MojitoCheckoutProps {
  containerState: ContainerTypes;
  setContainerState: Dispatch<SetStateAction<ContainerTypes>>
}

const MojitoCheckoutLayout = ({ containerState,setContainerState }: MojitoCheckoutProps) => {
  const theme = useTheme<MixTheme>();

  return (
    <Box
      sx={{
        backgroundColor: theme.global?.background,
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Box width="100%" padding="30px">
        <Header />
        <Stepper currentState={ containerState } />
        { containerState === ContainerTypes.CHECKOUT && <BillingContainer /> }
        { containerState === ContainerTypes.CONFIRMATION && <ConfirmationContainer /> }
        { containerState === ContainerTypes.PAYMENT && <PaymentCheckout/>}
        { containerState === ContainerTypes.DELIVERY && <Delivery />}
      </Box>
      <CostBreakDownContainer />
    </Box>
  );
};
export default MojitoCheckoutLayout;
