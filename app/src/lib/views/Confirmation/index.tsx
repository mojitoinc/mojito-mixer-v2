import React from 'react';
import ConfirmationView from './ConfirmationView';
import { useDelivery } from '@lib/providers/DeliveryProvider';
import { useQuery } from '@apollo/client';
import { paymentMethodsQuery } from '@lib/queries/billing';

const ConfirmationContainer = () => {
  return (
    <ConfirmationView />
  );
};
export default ConfirmationContainer;
