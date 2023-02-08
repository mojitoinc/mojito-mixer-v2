import React, { useCallback, useMemo } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, NormalizedCacheObject, Context } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { setContext } from '@apollo/client/link/context';
import { isLocalhost } from '../constants';

const cache = new InMemoryCache();

export interface AuthorizedApolloProviderProps {
  apolloClient?: ApolloClient<NormalizedCacheObject> | null | undefined;
  uri?: string | undefined;
  getAuthenticationToken?: (() => Promise<string | undefined>) | null | undefined;
  children?: React.ReactNode;
}

export const AuthorizedApolloProvider: React.FC<AuthorizedApolloProviderProps> = ({
  apolloClient: parentApolloClient,
  uri,
  getAuthenticationToken: parentGetAuthenticationToken,
  children,
}) => {
  const { getIdTokenClaims } = useAuth0();

  const defaultGetAuthenticationToken = useCallback(async () => {
    const token = await getIdTokenClaims();

    // eslint-disable-next-line no-underscore-dangle
    return token?.__raw;
  }, [getIdTokenClaims]);

  const getAuthenticationToken = parentGetAuthenticationToken || defaultGetAuthenticationToken;

  const apolloClient = useMemo(() => {
    if (parentApolloClient) return parentApolloClient;

    if (!uri) return null;

    const httpLink = createHttpLink({ uri });

    const authLink = setContext(async (_, { headers }) => {
      const token = await getAuthenticationToken();

      const context: Context = {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${ token }` : '',
        },
      };

      if (isLocalhost()) context.headers['origin-overwrite'] = 'https://payments-staging.mojito.xyz/';

      return context;
    });

    const link = authLink.concat(httpLink);

    return new ApolloClient({ uri, link, cache });
  }, [parentApolloClient, uri, getAuthenticationToken]);

  return apolloClient ? <ApolloProvider client={ apolloClient }>{ children }</ApolloProvider> : <>{ children }</>;
};
