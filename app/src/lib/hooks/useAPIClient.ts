import { useMemo, useCallback } from 'react';
import { useApolloClient } from '@apollo/client';
import { publicKeyQuery, getPaymentNotificationQuery } from '@lib/queries/creditCard';
import { useDebug } from '@lib/providers';


export interface APIClientOptions {
  getPaymentNotification: () => Promise<any>,
}

export const useAPIService = (): APIClientOptions => {
  const debug = useDebug('useAPIClient');
  const client = useApolloClient();

  const getPaymentNotification = useCallback(async () => {
    debug.warn('getPaymentNotificationQuery');
    const paymentNotification = await client.query({
      query: getPaymentNotificationQuery,
      variables: { },
    });
    debug.success('getPaymentNotificationQuery', { paymentNotification });
    return paymentNotification;
  }, [client, debug]);

  return useMemo<APIClientOptions>(() => {
    return { getPaymentNotification };
  }, [getPaymentNotification]);
};
