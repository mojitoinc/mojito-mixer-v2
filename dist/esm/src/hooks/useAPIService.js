import { __awaiter } from '../../node_modules/tslib/tslib.es6.js';
import { useCallback, useMemo } from 'react';
import '../../node_modules/@apollo/client/core/index.js';
import '../../node_modules/@apollo/client/utilities/globals/index.js';
import '../../node_modules/@apollo/client/utilities/graphql/storeUtils.js';
import '../../node_modules/@apollo/client/utilities/graphql/transform.js';
import '../../node_modules/@apollo/client/utilities/common/mergeDeep.js';
import '../../node_modules/@apollo/client/utilities/observables/Observable.js';
import '../../node_modules/@apollo/client/utilities/observables/Concast.js';
import '../../node_modules/@apollo/client/utilities/common/canUse.js';
import { useApolloClient } from '../../node_modules/@apollo/client/react/hooks/useApolloClient.js';
import '../../node_modules/@apollo/client/react/hooks/useQuery.js';
import '../../node_modules/@apollo/client/react/parser/index.js';
import '../../node_modules/@apollo/client/errors/index.js';
import { publicKeyQuery, getPaymentNotificationQuery } from '../queries/creditCard.js';
import { useDebug } from '../providers/DebugProvider.js';
import '../providers/ErrorProvider.js';
import '../providers/BillingProvider.js';
import '../providers/ContainerStateProvider.js';
import '../providers/UIConfigurationProvider.js';
import '../providers/CheckoutProvider.js';
import '../providers/PaymentProvider.js';
import '../providers/EventProvider.js';
import '../providers/SecurityOptionsProvider.js';

const useAPIService = () => {
    const debug = useDebug('useAPIClient');
    const client = useApolloClient();
    const getCreditCardPublicKey = useCallback((orgID) => __awaiter(void 0, void 0, void 0, function* () {
        debug.warn('getCreditCardPublicKey');
        const data = yield client.query({
            query: publicKeyQuery,
            variables: { orgID },
        });
        debug.success('getCreditCardPublicKey', { data });
        return data;
    }), [client, debug]);
    const getPaymentNotification = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        debug.warn('getPaymentNotificationQuery');
        const data = yield client.query({
            query: getPaymentNotificationQuery,
            variables: {},
        });
        debug.success('getPaymentNotificationQuery', { data });
        return data;
    }), [client, debug]);
    return useMemo(() => {
        return { getPaymentNotification, getCreditCardPublicKey };
    }, [getPaymentNotification, getCreditCardPublicKey]);
};

export { useAPIService };
//# sourceMappingURL=useAPIService.js.map
