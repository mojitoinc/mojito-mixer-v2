import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuth0 } from '@auth0/auth0-react';
import { RuntimeConfiguration } from '@lib/config';
import React, { FC } from 'react';
import { useDebug } from '@lib/providers';

interface MojitoApiProviderProps {
  children: React.ReactNode;
}

export const MojitoApiProvider: FC<MojitoApiProviderProps> = ({ children }) => {
  const { getIdTokenClaims } = useAuth0();
  const debug = useDebug('MojitoApiProvider');

  const httpLink = createHttpLink({
    uri: RuntimeConfiguration.API_HOST_URL,
  });
  const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = await getIdTokenClaims();
    debug.info('token', token);

    // return the headers to the context so httpLink can read them
    /* eslint no-underscore-dangle: 0 */
    if (token) {
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${ token?.__raw }` : '',
        },
      };
    }
    return {};
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={ client }>{ children }</ApolloProvider>;
};
