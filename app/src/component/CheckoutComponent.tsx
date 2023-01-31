import MojitoCheckout from '@lib/public/MojitoCheckout';
import React from 'react';

interface CheckoutProps {
  show: boolean;
  paymentId?: string;
}
export const CheckoutComponent: React.FC<CheckoutProps> = ({
  show,
  paymentId,
}: CheckoutProps) => {
  return (
    <MojitoCheckout
      deliveryConfiguration={{
        orgId: 'd086ea16-d40d-454c-84a4-64b5e940670a',
        lotId: '17cd1000-323d-4a20-8e5f-7a8598ffae2a',
        itemCount: 1,
        paymentId,
      }}
      show={ show } />
  );
};
