import { gql } from '@apollo/client';

export const createPaymentMethodQuery = gql`
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
        __typename
        }
    }
`;

export const createPaymentQuery = gql`
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

export const getPaymentMethodStatus = gql`
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
