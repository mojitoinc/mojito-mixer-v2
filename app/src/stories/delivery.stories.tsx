import React from 'react';
import DeliveryLayout from '@lib/views/Delivery/Delivery.layout';

export const BillingViewStories = () => {
  return (
    <DeliveryLayout
      billingInfo={{}}
      paymentInfo={{}}
      onClickConfirmPurchase={ () => undefined }
      onWalletChange={ () => undefined }
      organizationName=""
      selectedDeliveryAddress=""
      walletOptions={ [
        {
          label: 'Showri',
          value: '0xaldjkaslk',
        },
      ] } />
  );
};
const stories = {
  title: 'views/DeliveryLayout',
  component: DeliveryLayout,
};
export default stories;
