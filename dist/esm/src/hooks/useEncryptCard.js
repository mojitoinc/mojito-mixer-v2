import { __awaiter } from '../../node_modules/tslib/tslib.es6.js';
import { useCallback } from 'react';
import { useDebug } from '../providers/DebugProvider.js';
import '../providers/ErrorProvider.js';
import '../providers/BillingProvider.js';
import '../providers/ContainerStateProvider.js';
import '../providers/UIConfigurationProvider.js';
import '../providers/CheckoutProvider.js';
import '../providers/PaymentProvider.js';
import { encryptCardData } from '../utils/encryptionUtils.js';
import { useAPIService } from './useAPIService.js';

function useEncryptCardData({ orgID }) {
    const debug = useDebug('useEncryptCardData');
    const { getCreditCardPublicKey } = useAPIService();
    // Changed from usePaymentKeyQuery + skip: true to usePaymentKeyLazyQuery due to https://github.com/apollographql/apollo-client/issues/9101.
    // const [fetchPaymentKey, { data, loading }] = useLazyQuery(publicKeyQuery);
    const encryptCardData$1 = useCallback((encryptCardDataOptions) => __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        debug.info('start', orgID);
        const paymentKeyResult = yield getCreditCardPublicKey(orgID);
        debug.info('start-publicKeyQuery', paymentKeyResult);
        // const paymentKeyResult = await fetchPaymentKey({ variables: { orgID } });
        debug.info('end', { paymentKeyResult });
        const paymentKeyData = paymentKeyResult === null || paymentKeyResult === void 0 ? void 0 : paymentKeyResult.data;
        const publicKey = (_a = paymentKeyData === null || paymentKeyData === void 0 ? void 0 : paymentKeyData.getPaymentPublicKey) === null || _a === void 0 ? void 0 : _a.publicKey;
        const keyID = (_b = paymentKeyData === null || paymentKeyData === void 0 ? void 0 : paymentKeyData.getPaymentPublicKey) === null || _b === void 0 ? void 0 : _b.keyID;
        if (!publicKey || !keyID)
            throw new Error('Unable to generate key');
        const encryptedCardData = yield encryptCardData(Object.assign(Object.assign({}, encryptCardDataOptions), { key: publicKey }));
        return {
            keyID,
            encryptedCardData,
        };
    }), [orgID, debug, getCreditCardPublicKey]);
    return [encryptCardData$1];
}

export { useEncryptCardData };
//# sourceMappingURL=useEncryptCard.js.map
