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
      { show && (
      <MojitoCheckout
        userInfo={{
          email: 'ShowriSrinivas@gmail.com',
        }}
        show={ show } />
      ) }
    </>
  );
};
