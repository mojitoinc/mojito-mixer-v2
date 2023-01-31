import React, { useEffect } from 'react';
import { useDelivery } from '@lib/providers/DeliveryProvider';
import { useQuery } from '@apollo/client';
import { paymentMethodsQuery } from '@lib/queries/billing';
import ConfirmationView from './ConfirmationView';

const ConfirmationContainer = () => {
  useEffect(() => {

  }, []);

  return (
    <ConfirmationView />
  );
};
export default ConfirmationContainer;
