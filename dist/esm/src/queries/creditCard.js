import '../../node_modules/@apollo/client/core/index.js';
import '../../node_modules/@apollo/client/utilities/globals/index.js';
import 'react';
import '../../node_modules/@apollo/client/utilities/graphql/storeUtils.js';
import '../../node_modules/@apollo/client/utilities/graphql/transform.js';
import '../../node_modules/@apollo/client/utilities/common/mergeDeep.js';
import '../../node_modules/@apollo/client/utilities/observables/Observable.js';
import '../../node_modules/@apollo/client/utilities/observables/Concast.js';
import '../../node_modules/@apollo/client/utilities/common/canUse.js';
import '../../node_modules/@apollo/client/react/hooks/useQuery.js';
import '../../node_modules/@apollo/client/react/parser/index.js';
import '../../node_modules/@apollo/client/errors/index.js';
import { gql } from '../../node_modules/graphql-tag/lib/index.js';

const cardScreeningQuery = gql `
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
const publicKeyQuery = gql `
    query PaymentKey($orgID: UUID1!) {
        getPaymentPublicKey(orgID: $orgID) {
            keyID
            publicKey
            __typename
        }
    }
`;
const getPaymentNotificationQuery = gql `
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

export { cardScreeningQuery, getPaymentNotificationQuery, publicKeyQuery };
//# sourceMappingURL=creditCard.js.map
