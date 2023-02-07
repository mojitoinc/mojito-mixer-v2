import React from 'react';
import DeliveryLayout from '@views/Delivery/Delivery';

export const BillingViewStories = () => {
  return (
    <DeliveryLayout
      onClickConnectWallet={ () => undefined }
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
