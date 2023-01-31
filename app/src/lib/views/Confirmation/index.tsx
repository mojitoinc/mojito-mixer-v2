import React, { useEffect } from 'react';
import ConfirmationView from './ConfirmationView';
import { useDelivery } from '@lib/providers/DeliveryProvider';
import { useQuery } from '@apollo/client';
import { paymentMethodsQuery } from '@lib/queries/billing';

const ConfirmationContainer = () => {

  useEffect(()=>{
    
  },[])

  return (
    <ConfirmationView />
  );
};
export default ConfirmationContainer;
