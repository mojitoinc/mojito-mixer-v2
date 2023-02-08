import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import React__default, { useEffect } from 'react';
import { AuthorizedApolloProvider } from './AuthorizedApolloProvider.js';
import { EXCEPTIONS } from '../constants/exceptions.js';

const ProviderInjector = ({ 
// AuthorizedApolloProviderProps:
apolloClient, uri, getAuthenticationToken, 
// ThemeProvider:
theme: parentTheme, themeOptions, children, }) => {
    // const theme = useMemo(() => parentTheme ?? extendDefaultTheme(themeOptions), [parentTheme, themeOptions]);
    useEffect(() => {
        if (parentTheme && themeOptions) {
            throw new Error(EXCEPTIONS.DEV.THEME_PROVIDER);
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
    return (React__default.createElement(AuthorizedApolloProvider, { apolloClient: apolloClient, uri: uri, getAuthenticationToken: getAuthenticationToken }, children));
};
function withProviders(Component) {
    const WithProviders = (_a) => {
        var { apolloClient, uri, getAuthenticationToken, theme, themeOptions, onCatch } = _a, componentProps = __rest(_a, ["apolloClient", "uri", "getAuthenticationToken", "theme", "themeOptions", "onCatch"]);
        return (React__default.createElement(ProviderInjector, { apolloClient: apolloClient, uri: uri, getAuthenticationToken: getAuthenticationToken, theme: theme, themeOptions: themeOptions },
            React__default.createElement(Component, Object.assign({}, componentProps))));
    };
    return WithProviders;
}

export { ProviderInjector, withProviders };
//# sourceMappingURL=ProvidersInjector.js.map
