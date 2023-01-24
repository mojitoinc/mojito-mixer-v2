import React, { memo } from 'react';
import { ProtectedPageContainer } from '../component/auth/ProtectedPageContainer';
import { CheckoutComponent } from '../component/CheckoutComponent';

const PaymentMemoized = memo(() => {
  return <CheckoutComponent show />;
});

const Payment: React.FC = () => {
  return (
    <ProtectedPageContainer>
      <PaymentMemoized />
    </ProtectedPageContainer>
  );
};

export default Payment;
