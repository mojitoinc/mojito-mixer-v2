import MojitoCheckout from '@lib/public/MojitoCheckout';
import React from 'react';

export const CheckoutComponent: React.FC = () => {
  return (
    <MojitoCheckout
      userInfo={{
        email: 'ShowriSrinivas@gmail.com',
      }} />
  );
};
