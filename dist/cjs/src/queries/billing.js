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

const paymentMethodsQuery = index.gql `
query GetPaymentMethodList($orgID: UUID1!) {
    getPaymentMethodList(orgID: $orgID) {
      ... on ACHPaymentMethodOutput {
        id
        type
        status
        accountNumber
        metadata {
          email
          phoneNumber
          __typename
        }
        billingDetails {
          name
          city
          country
          address1
          address2
          district
          postalCode
          __typename
        }
        bankAddress {
          bankName
          __typename
        }
        __typename
      }
      ... on CreditCardPaymentMethodOutput {
        id
        type
        status
        network
        last4Digit
        metadata {
          email
          phoneNumber
          __typename
        }
        billingDetails {
          name
          city
          country
          address1
          address2
          district
          postalCode
          __typename
        }
        __typename
      }
      ... on CryptoPaymentMethodOutput {
        id
        type
        status
        __typename
      }
      ... on WirePaymentMethodOutput {
        id
        type
        status
        description
        bankAddress {
          bankName
          address1
          address2
          country
          district
          city
          __typename
        }
        billingDetails {
          name
          city
          country
          address1
          address2
          district
          postalCode
          __typename
        }
        __typename
      }
      __typename
    }
  }  
`;
const validatePaymentLimitQuery = index.gql `
query ValidatePaymentLimit($collectionId: UUID1!, $itemsCount: Int!) {
  validatePaymentLimit(collectionID: $collectionId, itemsCount: $itemsCount) {
    ach {
      remainingTotal
      isLimitExceeded
      remainingTransaction
    }
    wire {
      remainingTotal
      isLimitExceeded
      remainingTransaction
    }
    creditCard {
      remainingTotal
      isLimitExceeded
      remainingTransaction
    }
  }
}
`;

exports.paymentMethodsQuery = paymentMethodsQuery;
exports.validatePaymentLimitQuery = validatePaymentLimitQuery;
//# sourceMappingURL=billing.js.map
