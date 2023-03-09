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

const createPaymentMethodQuery = index.gql `
    mutation CreatePaymentMethod($orgID: UUID1!, $input: PaymentMethodCreateInput!) {
        createPaymentMethod(orgID: $orgID, input: $input) {
        ... on ACHPaymentMethodOutput {
            id
            status
            __typename
        }
        ... on CreditCardPaymentMethodOutput {
            id
            status
            __typename
        }
        ... on WirePaymentMethodOutput {
            id
            status
            __typename
        }
        ... on CryptoPaymentMethodOutput {
            id
            status
            __typename
        }
        ... on OnchainPaymentMethodOutput {
            id
            status
            __typename
        }
        __typename
        }
    }
`;
const createPaymentQuery = index.gql `
    mutation CreatePayment($paymentMethodID: UUID1!, $invoiceID: UUID1!, $metadata: CreatePaymentMetadataInput) {
        createPayment(
        paymentMethodID: $paymentMethodID
        invoiceID: $invoiceID
        metadata: $metadata
        ) {
        id
        invoiceID
        processorPaymentID
        status
        userID
        details {
            ... on CryptoPaymentDetails {
            hostedURL
            __typename
            }
            ... on WirePaymentDetails {
            WireInstructions {
                trackingRef
                beneficiary {
                name
                address1
                address2
                __typename
                }
                beneficiaryBank {
                name
                swiftCode
                routingNumber
                accountNumber
                address
                city
                postalCode
                country
                __typename
                }
                __typename
            }
            __typename
            }
            __typename
        }
        __typename
        }
    }
`;
const getPaymentMethodStatus = index.gql `
    query GetPaymentMethodStatus($paymentMethodID: UUID1!) {
        getPaymentMethod(paymentMethodID: $paymentMethodID) {
        ... on ACHPaymentMethodOutput {
            id
            status
            __typename
        }
        ... on CreditCardPaymentMethodOutput {
            id
            status
            __typename
        }
        ... on WirePaymentMethodOutput {
            id
            status
            __typename
        }
        ... on CryptoPaymentMethodOutput {
            id
            status
            __typename
        }
        __typename
        }
    }
`;
const addressScreeningQuery = index.gql `
    mutation AddressScreening($input: AddressScreeningInput!,$orgID: UUID1!) {
        addressScreening(
            input: $input
            orgID: $orgID
        )
    }
`;
const completeOnChainPaymentQuery = index.gql `
    mutation completeOnchainPayment($invoiceId : UUID1!,$networkId:UUID1!,$txHash:String!,$billingDetails:CryptoBillingDetails!) {
        completeOnchainPayment(
            invoiceId:$invoiceId
            networkId:$networkId
            txHash:$txHash
            billingDetails:$billingDetails
        )
    }

`;

exports.addressScreeningQuery = addressScreeningQuery;
exports.completeOnChainPaymentQuery = completeOnChainPaymentQuery;
exports.createPaymentMethodQuery = createPaymentMethodQuery;
exports.createPaymentQuery = createPaymentQuery;
exports.getPaymentMethodStatus = getPaymentMethodStatus;
//# sourceMappingURL=Payment.js.map
