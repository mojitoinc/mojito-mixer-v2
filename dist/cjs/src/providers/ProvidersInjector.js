'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var AuthorizedApolloProvider = require('./AuthorizedApolloProvider.js');
var exceptions = require('../constants/exceptions.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const ProviderInjector = ({ 
// AuthorizedApolloProviderProps:
apolloClient, uri, getAuthenticationToken, 
// ThemeProvider:
theme: parentTheme, themeOptions, children, }) => {
    // const theme = useMemo(() => parentTheme ?? extendDefaultTheme(themeOptions), [parentTheme, themeOptions]);
    React.useEffect(() => {
        if (parentTheme && themeOptions) {
            throw new Error(exceptions.EXCEPTIONS.DEV.THEME_PROVIDER);
        }
    }, [parentTheme, themeOptions]);
    // useEffect(() => {
    //   if (apolloClient === null && uri === "") return;
    //   if (apolloClient && uri) {
    //     throw new Error(EXCEPTIONS.DEV.APOLLO_PROVIDER_DUPLICATE);
    //   }
    //   if (!apolloClient && !uri) {
    //     throw new Error(EXCEPTIONS.DEV.APOLLO_PROVIDER_MISSING);
    //   }
    // }, [apolloClient, uri]);
    return (React__default["default"].createElement(AuthorizedApolloProvider.AuthorizedApolloProvider, { apolloClient: apolloClient, uri: uri, getAuthenticationToken: getAuthenticationToken }, children));
};
function withProviders(Component) {
    const WithProviders = (_a) => {
        var { apolloClient, uri, getAuthenticationToken, theme, themeOptions, onCatch } = _a, componentProps = tslib_es6.__rest(_a, ["apolloClient", "uri", "getAuthenticationToken", "theme", "themeOptions", "onCatch"]);
        return (React__default["default"].createElement(ProviderInjector, { apolloClient: apolloClient, uri: uri, getAuthenticationToken: getAuthenticationToken, theme: theme, themeOptions: themeOptions },
            React__default["default"].createElement(Component, Object.assign({}, componentProps))));
    };
    return WithProviders;
}

exports.ProviderInjector = ProviderInjector;
exports.withProviders = withProviders;
//# sourceMappingURL=ProvidersInjector.js.map
