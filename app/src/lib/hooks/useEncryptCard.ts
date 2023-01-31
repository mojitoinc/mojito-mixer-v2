import { LazyQueryResult, useLazyQuery } from '@apollo/client';
import { publicKeyQuery } from '@lib/queries/creditCard';
import { useCallback } from 'react';
import { encryptCardData as encryptCardDataUtil } from '../utils/encryptionUtils';

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
  // Changed from usePaymentKeyQuery + skip: true to usePaymentKeyLazyQuery due to https://github.com/apollographql/apollo-client/issues/9101.
  const [fetchPaymentKey] = useLazyQuery(publicKeyQuery);

  const encryptCardData = useCallback(async (encryptCardDataOptions: EncryptCardDataOptions) => {
    const paymentKeyResult = await fetchPaymentKey({ variables: { orgID } });

    const paymentKeyData = paymentKeyResult?.data;
    const publicKey = paymentKeyData?.getPaymentPublicKey?.publicKey;
    const keyID = paymentKeyData?.getPaymentPublicKey?.keyID;

    if (!publicKey || !keyID) throw 'Unable to generate key';

    const encryptedCardData = await encryptCardDataUtil({
      ...encryptCardDataOptions,
      key: publicKey,
    });

    return {
      keyID,
      encryptedCardData,
    };
  }, [fetchPaymentKey, orgID]);

  return [encryptCardData];
}
