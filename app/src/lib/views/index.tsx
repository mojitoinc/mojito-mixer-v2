import { Box, Stack, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import { Header, Stepper } from '../components';
import { MixTheme } from '../theme';
import CostBreakDownContainer from './CostBreakDown';
import ConfirmationContainer from './PaymentConfirmation';
import { PaymentContainer } from './Payment';
import { Delivery } from './Delivery';
import { useContainer, useError } from '../providers';
import { ContainerTypes } from '../interfaces/ContextInterface';

import LoadingContainer from './Loading';
import ErrorContainer from './Error';
import { useSardine } from '../hooks';
import BillingContainer from './Billing';
import { SardineEnvironment } from '../config';

interface MojitoCheckoutProps {
  sardineEnvironment: SardineEnvironment;
  enableSardine: boolean;
}
const MojitoCheckoutLayout = ({
  sardineEnvironment,
  enableSardine,
}: MojitoCheckoutProps) => {
  const theme = useTheme<MixTheme>();
  const { containerState } = useContainer();
  const { error } = useError();
  const setupSardine = useSardine(sardineEnvironment, enableSardine);

  useEffect(() => {
    setupSardine();
  }, [setupSardine]);

  if (error) {
    return <ErrorContainer error={ error } />;
  }
  if (containerState === ContainerTypes.LOADING) {
    return <LoadingContainer />;
  }
  return (
    <Stack
      direction={{ xs: 'column-reverse', md: 'row' }}
      sx={{
        backgroundColor: theme.global?.background,
        display: 'flex',
        justifyContent: { sx: 'center', lg: 'space-between' },
      }}>
      <Box padding="40px" width={{ lg: '100%' }}>
        <Header
          isPaymentConfirmation={ containerState === ContainerTypes.CONFIRMATION } />
        { containerState !== ContainerTypes.CONFIRMATION && (
          <Stepper currentState={ containerState } />
        ) }
        { containerState === ContainerTypes.CHECKOUT && <BillingContainer /> }
        { containerState === ContainerTypes.CONFIRMATION && (
          <ConfirmationContainer />
        ) }
        { containerState === ContainerTypes.PAYMENT && <PaymentContainer /> }
        { containerState === ContainerTypes.DELIVERY && <Delivery /> }
      </Box>
      <CostBreakDownContainer />
    </Stack>
  );
};
export default MojitoCheckoutLayout;
