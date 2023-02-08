import React from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
export interface AuthorizedApolloProviderProps {
    apolloClient?: ApolloClient<NormalizedCacheObject> | null | undefined;
    uri?: string | undefined;
    getAuthenticationToken?: (() => Promise<string | undefined>) | null | undefined;
    children?: React.ReactNode;
}
export declare const AuthorizedApolloProvider: React.FC<AuthorizedApolloProviderProps>;
