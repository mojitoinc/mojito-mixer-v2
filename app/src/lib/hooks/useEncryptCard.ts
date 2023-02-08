import { useCallback } from 'react';
import { useDebug } from '@lib/providers';
import { encryptCardData as encryptCardDataUtil } from '../utils/encryptionUtils';
import { useAPIService } from './useAPIService';

export interface EncryptCardDataOptions {
  number?: string;
  cvv: string;
}

export interface UseEncryptedDataResult {
  keyID: string;
  encryptedCardData: string;
}

export interface UseEncryptCardDataOptions {
  orgID: string;
}

export function useEncryptCardData({ orgID }: UseEncryptCardDataOptions): [
  (encryptCardDataOptions: EncryptCardDataOptions) => Promise<UseEncryptedDataResult>,
] {
  const debug = useDebug('useEncryptCardData');
  const { getCreditCardPublicKey } = useAPIService();

  // Changed from usePaymentKeyQuery + skip: true to usePaymentKeyLazyQuery due to https://github.com/apollographql/apollo-client/issues/9101.
  // const [fetchPaymentKey, { data, loading }] = useLazyQuery(publicKeyQuery);

  const encryptCardData = useCallback(async (encryptCardDataOptions: EncryptCardDataOptions) => {
    debug.info('start', orgID);
    const paymentKeyResult = await getCreditCardPublicKey(orgID);

    debug.info('start-publicKeyQuery', paymentKeyResult);

    // const paymentKeyResult = await fetchPaymentKey({ variables: { orgID } });

    debug.info('end', { paymentKeyResult });
    const paymentKeyData = paymentKeyResult?.data;
    const publicKey = paymentKeyData?.getPaymentPublicKey?.publicKey;
    const keyID = paymentKeyData?.getPaymentPublicKey?.keyID;

    if (!publicKey || !keyID) throw new Error('Unable to generate key');

    const encryptedCardData = await encryptCardDataUtil({
      ...encryptCardDataOptions,
      key: publicKey,
    });

    return {
      keyID,
      encryptedCardData,
    };
  }, [orgID, debug, getCreditCardPublicKey]);

  return [encryptCardData];
}
