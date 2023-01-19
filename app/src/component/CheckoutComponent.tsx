import { useAuth0 } from '@auth0/auth0-react';
import MojitoCheckout from '@lib/public/MojitoCheckout';
import React from 'react';

export const CheckoutComponent: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <MojitoCheckout
      userInfo={{
        email: 'ShowriSrinivas@gmail.com',
      }}
      show={ isAuthenticated } />
  );
};
