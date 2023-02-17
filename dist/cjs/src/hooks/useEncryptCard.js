'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var DebugProvider = require('../providers/DebugProvider.js');
require('../providers/ErrorProvider.js');
require('../providers/BillingProvider.js');
require('../providers/ContainerStateProvider.js');
require('../providers/UIConfigurationProvider.js');
require('../providers/CheckoutProvider.js');
require('../providers/PaymentProvider.js');
require('../providers/EventProvider.js');
require('../providers/SecurityOptionsProvider.js');
var encryptionUtils = require('../utils/encryptionUtils.js');
var useAPIService = require('./useAPIService.js');

function useEncryptCardData({ orgID }) {
    const debug = DebugProvider.useDebug('useEncryptCardData');
    const { getCreditCardPublicKey } = useAPIService.useAPIService();
    // Changed from usePaymentKeyQuery + skip: true to usePaymentKeyLazyQuery due to https://github.com/apollographql/apollo-client/issues/9101.
    // const [fetchPaymentKey, { data, loading }] = useLazyQuery(publicKeyQuery);
    const encryptCardData = React.useCallback((encryptCardDataOptions) => tslib_es6.__awaiter(this, void 0, void 0, function* () {
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
        const encryptedCardData = yield encryptionUtils.encryptCardData(Object.assign(Object.assign({}, encryptCardDataOptions), { key: publicKey }));
        return {
            keyID,
            encryptedCardData,
        };
    }), [orgID, debug, getCreditCardPublicKey]);
    return [encryptCardData];
}

exports.useEncryptCardData = useEncryptCardData;
//# sourceMappingURL=useEncryptCard.js.map
