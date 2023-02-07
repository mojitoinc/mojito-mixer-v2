import React from 'react';
import DeliveryContainer from '@views/Delivery/Delivery';
import { ConnectType } from '@lib/state/ConnectContext';

export const BillingViewStories = () => {
  return (
    <DeliveryContainer
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
      ] }
      connect={{} as ConnectType}
      onDisconnect={ () => undefined } />
  );
};
const stories = {
  title: 'views/DeliveryContainer',
  component: DeliveryContainer,
};
export default stories;
