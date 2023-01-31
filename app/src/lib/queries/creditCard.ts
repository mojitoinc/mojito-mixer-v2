import { gql } from '@apollo/client';

export const cardScreeningQuery = gql`
    query(
        $orgID: UUID1!
        $input: CardScreeningInput!
    ) {
        cardScreening(
            orgID: $orgID
            input: $input
        ){
            level
            status
        }
    }
`;

export const publicKeyQuery = gql`
    query PaymentKey($orgID: UUID1!) {
        getPaymentPublicKey(orgID: $orgID) {
            keyID
            publicKey
            __typename
        }
    }
`;

export const getPaymentNotificationQuery = gql`
    query GetPaymentNotification {
        getPaymentNotification {
            message {
                ... on PaymentNotification3DSMessage {
                redirectURL
                error
                __typename
                }
                __typename
            }
            __typename
        }
    }
`;
