'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
require('../../node_modules/@apollo/client/core/index.js');
require('../../node_modules/@apollo/client/utilities/globals/index.js');
var React = require('react');
require('../../node_modules/@apollo/client/utilities/graphql/storeUtils.js');
require('../../node_modules/@apollo/client/utilities/graphql/transform.js');
require('../../node_modules/@apollo/client/utilities/common/mergeDeep.js');
require('../../node_modules/@apollo/client/utilities/observables/Observable.js');
require('../../node_modules/@apollo/client/utilities/observables/Concast.js');
require('../../node_modules/@apollo/client/utilities/common/canUse.js');
var ApolloProvider = require('../../node_modules/@apollo/client/react/context/ApolloProvider.js');
require('../../node_modules/@apollo/client/react/hooks/useQuery.js');
require('../../node_modules/@apollo/client/react/parser/index.js');
require('../../node_modules/@apollo/client/errors/index.js');
var context = require('@apollo/client/link/context');
var auth0React_esm = require('../../node_modules/@auth0/auth0-react/dist/auth0-react.esm.js');
var RuntimeConfiguration = require('../config/RuntimeConfiguration.js');
require('../config/paymentConfiguration.js');
var DebugProvider = require('../providers/DebugProvider.js');
require('../providers/ErrorProvider.js');
require('../providers/BillingProvider.js');
require('../providers/ContainerStateProvider.js');
require('../providers/ConfigurationProvider.js');
require('../providers/DeliveryProvider.js');
require('../providers/PaymentProvider.js');
var createHttpLink = require('../../node_modules/@apollo/client/link/http/createHttpLink.js');
var ApolloClient = require('../../node_modules/@apollo/client/core/ApolloClient.js');
var inMemoryCache = require('../../node_modules/@apollo/client/cache/inmemory/inMemoryCache.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const MojitoApiProvider = ({ children }) => {
    const { getIdTokenClaims } = auth0React_esm.useAuth0();
    const debug = DebugProvider.useDebug('MojitoApiProvider');
    const httpLink = createHttpLink.createHttpLink({
        uri: RuntimeConfiguration.RuntimeConfiguration.API_HOST_URL,
    });
    const authLink = context.setContext((_, { headers }) => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
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
    const client = new ApolloClient.ApolloClient({
        link: authLink.concat(httpLink),
        cache: new inMemoryCache.InMemoryCache(),
    });
    return React__default["default"].createElement(ApolloProvider.ApolloProvider, { client: client }, children);
};

exports.MojitoApiProvider = MojitoApiProvider;
//# sourceMappingURL=MojitoApiProvider.js.map
