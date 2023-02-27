import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { MojitoCheckout } from 'lib';
import { useAuth0 } from '@auth0/auth0-react';

interface CheckoutProps {
  show: boolean;
  paymentId?: string;
}
export const CheckoutComponent: React.FC<CheckoutProps> = ({
  show,
  paymentId,
}: CheckoutProps) => {
  const router = useRouter();

  const onClickGoToMarketPlace = useCallback(() => {
    router.replace('/');
  }, [router]);

  const { user } = useAuth0()

  return (
    <MojitoCheckout
      userInfo={{
        email: user?.email ?? '',
      }}
      debug
      checkoutOptions={{
        orgId: 'd086ea16-d40d-454c-84a4-64b5e940670a',
        lotId: '17cd1000-323d-4a20-8e5f-7a8598ffae2a',
        quantity: 1,
        paymentId,
        collectionItemId: '64e99437-ac2e-45bc-b4a6-4750985b4e81',
      }}
      uiConfiguration={{
        paymentConfirmation: {
          onGoTo: onClickGoToMarketPlace,
        },
      }}
      show={ show }
      uri={ undefined }
      getAuthenticationToken={ undefined } />
  );
};
