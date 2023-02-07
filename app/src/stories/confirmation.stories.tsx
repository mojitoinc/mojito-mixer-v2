import React from 'react';
import { PaymentStatus } from '@lib/constants';
import ConfirmationView from '@views/PaymentConfirmation/ConfirmationView';

export const BillingViewStories = () => {
  return <ConfirmationView paymentStatus={ PaymentStatus.PENDING } />;
};
const stories = {
  title: 'views/ConfirmationView',
  component: ConfirmationView,
};
export default stories;
