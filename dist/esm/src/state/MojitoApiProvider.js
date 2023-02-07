import { __awaiter } from '../../node_modules/tslib/tslib.es6.js';
import '../../node_modules/@apollo/client/core/index.js';
import '../../node_modules/@apollo/client/utilities/globals/index.js';
import React__default from 'react';
import '../../node_modules/@apollo/client/utilities/graphql/storeUtils.js';
import '../../node_modules/@apollo/client/utilities/graphql/transform.js';
import '../../node_modules/@apollo/client/utilities/common/mergeDeep.js';
import '../../node_modules/@apollo/client/utilities/observables/Observable.js';
import '../../node_modules/@apollo/client/utilities/observables/Concast.js';
import '../../node_modules/@apollo/client/utilities/common/canUse.js';
import { ApolloProvider } from '../../node_modules/@apollo/client/react/context/ApolloProvider.js';
import '../../node_modules/@apollo/client/react/hooks/useQuery.js';
import '../../node_modules/@apollo/client/react/parser/index.js';
import '../../node_modules/@apollo/client/errors/index.js';
import { setContext } from '@apollo/client/link/context';
import { useAuth0 } from '../../node_modules/@auth0/auth0-react/dist/auth0-react.esm.js';
import { RuntimeConfiguration } from '../config/RuntimeConfiguration.js';
import '../config/paymentConfiguration.js';
import { useDebug } from '../providers/DebugProvider.js';
import '../providers/ErrorProvider.js';
import '../providers/BillingProvider.js';
import '../providers/ContainerStateProvider.js';
import '../providers/ConfigurationProvider.js';
import '../providers/DeliveryProvider.js';
import '../providers/PaymentProvider.js';
import { createHttpLink } from '../../node_modules/@apollo/client/link/http/createHttpLink.js';
import { ApolloClient } from '../../node_modules/@apollo/client/core/ApolloClient.js';
import { InMemoryCache } from '../../node_modules/@apollo/client/cache/inmemory/inMemoryCache.js';

const MojitoApiProvider = ({ children }) => {
    const { getIdTokenClaims } = useAuth0();
    const debug = useDebug('MojitoApiProvider');
    const httpLink = createHttpLink({
        uri: RuntimeConfiguration.API_HOST_URL,
    });
    const authLink = setContext((_, { headers }) => __awaiter(void 0, void 0, void 0, function* () {
        // get the authentication token from local storage if it exists
        const token = yield getIdTokenClaims();
        debug.info('token', token);
        // return the headers to the context so httpLink can read them
        /* eslint no-underscore-dangle: 0 */
        if (token) {
            return {
                headers: Object.assign(Object.assign({}, headers), { authorization: token ? `Bearer ${token === null || token === void 0 ? void 0 : token.__raw}` : '' }),
            };
        }
        return {};
    }));
    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
    return React__default.createElement(ApolloProvider, { client: client }, children);
};

export { MojitoApiProvider };
//# sourceMappingURL=MojitoApiProvider.js.map
