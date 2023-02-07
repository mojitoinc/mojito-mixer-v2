import { Box, useTheme } from '@mui/material';
import React from 'react';
import { Header, Stepper } from '@lib/components';
import { MixTheme } from '@lib/theme';
import CostBreakDownContainer from '@views/CostBreakDown';
import ConfirmationContainer from '@views/PaymentConfirmation';
import { PaymentContainer } from '@views/Payment';
import { Delivery } from '@views/Delivery';
import { useContainer, ContainerTypes, useError } from '@lib/providers';
import LoadingContainer from '@views/Loading';
import ErrorContainer from '@views/Error';
import BillingContainer from './Billing';

const MojitoCheckoutLayout = () => {
  const theme = useTheme<MixTheme>();
  const { containerState } = useContainer();
  const { error } = useError();

  if (error) {
    return <ErrorContainer error={ error } />;
  }
  if (containerState === ContainerTypes.LOADING) {
    return <LoadingContainer />;
  }
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
        { containerState === ContainerTypes.PAYMENT && <PaymentContainer /> }
        { containerState === ContainerTypes.DELIVERY && <Delivery /> }
      </Box>
      <CostBreakDownContainer />
    </Box>
  );
};
export default MojitoCheckoutLayout;
