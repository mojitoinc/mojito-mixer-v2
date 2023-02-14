'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var React = require('react');
require('../../node_modules/@apollo/client/core/index.js');
require('../../node_modules/@apollo/client/utilities/globals/index.js');
require('../../node_modules/@apollo/client/utilities/graphql/storeUtils.js');
require('../../node_modules/@apollo/client/utilities/graphql/transform.js');
require('../../node_modules/@apollo/client/utilities/common/mergeDeep.js');
require('../../node_modules/@apollo/client/utilities/observables/Observable.js');
require('../../node_modules/@apollo/client/utilities/observables/Concast.js');
require('../../node_modules/@apollo/client/utilities/common/canUse.js');
var useApolloClient = require('../../node_modules/@apollo/client/react/hooks/useApolloClient.js');
require('../../node_modules/@apollo/client/react/hooks/useQuery.js');
require('../../node_modules/@apollo/client/react/parser/index.js');
require('../../node_modules/@apollo/client/errors/index.js');
var creditCard = require('../queries/creditCard.js');
var DebugProvider = require('../providers/DebugProvider.js');
require('../providers/ErrorProvider.js');
require('../providers/BillingProvider.js');
require('../providers/ContainerStateProvider.js');
require('../providers/UIConfigurationProvider.js');
require('../providers/CheckoutProvider.js');
require('../providers/PaymentProvider.js');
require('../providers/EventProvider.js');

const useAPIService = () => {
    const debug = DebugProvider.useDebug('useAPIClient');
    const client = useApolloClient.useApolloClient();
    const getCreditCardPublicKey = React.useCallback((orgID) => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        debug.warn('getCreditCardPublicKey');
        const data = yield client.query({
            query: creditCard.publicKeyQuery,
            variables: { orgID },
        });
        debug.success('getCreditCardPublicKey', { data });
        return data;
    }), [client, debug]);
    const getPaymentNotification = React.useCallback(() => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        debug.warn('getPaymentNotificationQuery');
        const data = yield client.query({
            query: creditCard.getPaymentNotificationQuery,
            variables: {},
        });
        debug.success('getPaymentNotificationQuery', { data });
        return data;
    }), [client, debug]);
    return React.useMemo(() => {
        return { getPaymentNotification, getCreditCardPublicKey };
    }, [getPaymentNotification, getCreditCardPublicKey]);
};

exports.useAPIService = useAPIService;
//# sourceMappingURL=useAPIService.js.map
