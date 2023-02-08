'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../node_modules/@apollo/client/core/index.js');
require('../../node_modules/@apollo/client/utilities/globals/index.js');
require('react');
require('../../node_modules/@apollo/client/utilities/graphql/storeUtils.js');
require('../../node_modules/@apollo/client/utilities/graphql/transform.js');
require('../../node_modules/@apollo/client/utilities/common/mergeDeep.js');
require('../../node_modules/@apollo/client/utilities/observables/Observable.js');
require('../../node_modules/@apollo/client/utilities/observables/Concast.js');
require('../../node_modules/@apollo/client/utilities/common/canUse.js');
require('../../node_modules/@apollo/client/react/hooks/useQuery.js');
require('../../node_modules/@apollo/client/react/parser/index.js');
require('../../node_modules/@apollo/client/errors/index.js');
var index = require('../../node_modules/graphql-tag/lib/index.js');

const cardScreeningQuery = index.gql `
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
const publicKeyQuery = index.gql `
    query PaymentKey($orgID: UUID1!) {
        getPaymentPublicKey(orgID: $orgID) {
            keyID
            publicKey
            __typename
        }
    }
`;
const getPaymentNotificationQuery = index.gql `
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

exports.cardScreeningQuery = cardScreeningQuery;
exports.getPaymentNotificationQuery = getPaymentNotificationQuery;
exports.publicKeyQuery = publicKeyQuery;
//# sourceMappingURL=creditCard.js.map
