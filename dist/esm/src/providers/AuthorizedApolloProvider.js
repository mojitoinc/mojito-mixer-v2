import { __awaiter } from '../../node_modules/tslib/tslib.es6.js';
import React__default, { useCallback, useMemo } from 'react';
import '../../node_modules/@apollo/client/core/index.js';
import '../../node_modules/@apollo/client/utilities/globals/index.js';
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
import { useAuth0 } from '../../node_modules/@auth0/auth0-react/dist/auth0-react.esm.js';
import { setContext } from '@apollo/client/link/context';
import { isLocalhost } from '../constants/index.js';
import { InMemoryCache } from '../../node_modules/@apollo/client/cache/inmemory/inMemoryCache.js';
import { createHttpLink } from '../../node_modules/@apollo/client/link/http/createHttpLink.js';
import { ApolloClient } from '../../node_modules/@apollo/client/core/ApolloClient.js';

const cache = new InMemoryCache();
const AuthorizedApolloProvider = ({ apolloClient: parentApolloClient, uri, getAuthenticationToken: parentGetAuthenticationToken, children, }) => {
    const { getIdTokenClaims } = useAuth0();
    const defaultGetAuthenticationToken = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield getIdTokenClaims();
        // eslint-disable-next-line no-underscore-dangle
        return token === null || token === void 0 ? void 0 : token.__raw;
    }), [getIdTokenClaims]);
    const getAuthenticationToken = parentGetAuthenticationToken || defaultGetAuthenticationToken;
    const apolloClient = useMemo(() => {
        if (parentApolloClient)
            return parentApolloClient;
        if (!uri)
            return null;
        const httpLink = createHttpLink({ uri });
        const authLink = setContext((_, { headers }) => __awaiter(void 0, void 0, void 0, function* () {
            const token = yield getAuthenticationToken();
            const context = {
                headers: Object.assign(Object.assign({}, headers), { authorization: token ? `Bearer ${token}` : '' }),
            };
            if (isLocalhost())
                context.headers['origin-overwrite'] = 'https://payments-staging.mojito.xyz/';
            return context;
        }));
        const link = authLink.concat(httpLink);
        return new ApolloClient({ uri, link, cache });
    }, [parentApolloClient, uri, getAuthenticationToken]);
    return apolloClient ? React__default.createElement(ApolloProvider, { client: apolloClient }, children) : React__default.createElement(React__default.Fragment, null, children);
};

export { AuthorizedApolloProvider };
//# sourceMappingURL=AuthorizedApolloProvider.js.map
