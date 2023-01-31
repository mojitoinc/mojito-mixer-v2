import { gql } from '@apollo/client';

export const meQuery = gql`
    query Me {
        me {
        id
        user {
            id
            username
            name
            email
            __typename
        }
        userOrgs {
            organization {
            id
            name
            __typename
            }
            __typename
        }
        wallets {
            id
            name
            address
            __typename
        }
        __typename
        }
    }
`;
