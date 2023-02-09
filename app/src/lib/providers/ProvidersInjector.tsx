import React, { ErrorInfo, useEffect } from 'react';
import { Theme, ThemeOptions } from '@mui/material/styles';
import { AuthorizedApolloProvider, AuthorizedApolloProviderProps } from './AuthorizedApolloProvider';
import { EXCEPTIONS } from '../constants/exceptions';
import { ErrorBoundary } from '../components';

export interface CommonProviderProps {
  // eslint-disable-next-line react/no-unused-prop-types
  onCatch?: (error: Error, errorInfo?: ErrorInfo) => void | true;
}

export interface ThemeProviderProps extends CommonProviderProps {
  theme?: Theme | undefined;
  themeOptions?: ThemeOptions | undefined;
}

export type ProvidersInjectorProps = ThemeProviderProps & AuthorizedApolloProviderProps;

export const ProviderInjector: React.FC<ProvidersInjectorProps> = ({
  // AuthorizedApolloProviderProps:
  apolloClient,
  uri,
  getAuthenticationToken,

  // ThemeProvider:
  theme: parentTheme,
  themeOptions,
  children,
}) => {
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

  return uri ? (
    <AuthorizedApolloProvider apolloClient={ apolloClient } uri={ uri } getAuthenticationToken={ getAuthenticationToken }>
      { /* { theme ? <ThemeProvider theme={ theme }>{ children }</ThemeProvider> : children } */ }
      { children }
    </AuthorizedApolloProvider>
  ) : <>{ children }</>;
};

export function withThemeProvider<P extends object>(Component: React.ComponentType<P>) {
  const WithThemeProvider: React.FC<P & ThemeProviderProps> = ({
    theme,
    themeOptions,
    onCatch,
    ...componentProps
  }) => {
    return (
      <ErrorBoundary onCatch={ onCatch }>
        <ProviderInjector
          apolloClient={ null }
          uri=""
          getAuthenticationToken={ null }
          theme={ theme }
          themeOptions={ themeOptions }>
          <Component { ...componentProps as P } />
        </ProviderInjector>
      </ErrorBoundary>
    );
  };

  return WithThemeProvider;
}


export function withProviders<P extends object>(Component: React.ComponentType<P>) {
  const WithProviders: React.FC<P & ProvidersInjectorProps> = ({
    apolloClient,
    uri,
    getAuthenticationToken,
    theme,
    themeOptions,
    onCatch,
    ...componentProps
  }) => {
    return (
      <ErrorBoundary onCatch={ onCatch }>
        <ProviderInjector
          apolloClient={ apolloClient }
          uri={ uri }
          getAuthenticationToken={ getAuthenticationToken }
          theme={ theme }
          themeOptions={ themeOptions }>
          <Component { ...componentProps as P } />
        </ProviderInjector>
      </ErrorBoundary>
    );
  };

  return WithProviders;
}
