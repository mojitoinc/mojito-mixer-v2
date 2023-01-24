import React, { useState, useCallback } from 'react';
import { CheckoutLayout } from '../layout/Checkout.Layout';

const HomePage: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleOpen = useCallback(() => { setShow(true); }, []);

  return (
    <CheckoutLayout show={ show } onOpen={ handleOpen } />
  );
};

export default HomePage;
