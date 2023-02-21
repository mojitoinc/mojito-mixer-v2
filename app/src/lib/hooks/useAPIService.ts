import { useMemo, useCallback } from 'react';
import { useApolloClient } from '@apollo/client';
import { publicKeyQuery, getPaymentNotificationQuery } from '../queries/creditCard';
import { useDebug } from '../providers';


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

  const getPaymentNotification = useCallback(async ():Promise<any> => {
    return new Promise((resolve,reject)=>{
      const interval = setInterval(async() => {
        debug.warn('getPaymentNotificationQuery');
        const data = await client.query({
          query: getPaymentNotificationQuery,
          variables: { },
          fetchPolicy:'network-only',
        });
        debug.success('getPaymentNotificationQuery', { data });
        if(data.data?.getPaymentNotification?.message?.redirectURL !== "") {
          clearInterval(interval);
          resolve(data)
        } 
      }, 2*1000);
    })
  }, [client, debug]);

  return useMemo<APIClientOptions>(() => {
    return { getPaymentNotification, getCreditCardPublicKey };
  }, [getPaymentNotification, getCreditCardPublicKey]);
};
