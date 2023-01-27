import { useAuth0 } from '@auth0/auth0-react';
import MojitoCheckout from '@lib/public/MojitoCheckout';
import React from 'react';
import { Box, Stack, Button } from '@mui/material';

interface CheckoutProps {
  show: boolean;
  onOpen: ()=>void;
}
export const CheckoutLayout: React.FC<CheckoutProps> = ({ show, onOpen }:CheckoutProps) => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Box sx={{ my: 4 }}>
        <Stack spacing={ 2 } direction="row">
          <Button variant="contained" onClick={ onOpen } disabled={ !isAuthenticated }>Open Checkout Modal</Button>
        </Stack>
      </Box>
      { isAuthenticated && (
      <MojitoCheckout
        deliveryConfiguration={{
          orgId: 'd086ea16-d40d-454c-84a4-64b5e940670a',
          lotId: '17cd1000-323d-4a20-8e5f-7a8598ffae2a',
          itemCount: 1,
        }}
        show={ show || isAuthenticated } />
      ) }
    </>
  );
};
