import { useMemo, useCallback } from 'react';
import { useApolloClient } from '@apollo/client';
import { publicKeyQuery, getPaymentNotificationQuery } from '@lib/queries/creditCard';
import { useDebug } from '@lib/providers';


export interface APIClientOptions {
  getPaymentNotification: () => Promise<any>,
  getCreditCardPublicKey: (orgID: string) => Promise<any>,
}

export const useAPIService = (): APIClientOptions => {
  const debug = useDebug('useAPIClient');
  const client = useApolloClient();

  const getCreditCardPublicKey = useCallback(async (orgID: string) => {
    debug.warn('getCreditCardPublicKey');
    const data = await client.query({
      query: publicKeyQuery,
      variables: { orgID },
    });
    debug.success('getCreditCardPublicKey', { data });
    return data;
  }, [client, debug]);

  const getPaymentNotification = useCallback(async () => {
    debug.warn('getPaymentNotificationQuery');
    const data = await client.query({
      query: getPaymentNotificationQuery,
      variables: { },
    });
    debug.success('getPaymentNotificationQuery', { data });
    return data;
  }, [client, debug]);

  return useMemo<APIClientOptions>(() => {
    return { getPaymentNotification, getCreditCardPublicKey };
  }, [getPaymentNotification, getCreditCardPublicKey]);
};
