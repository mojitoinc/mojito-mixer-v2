import { gql } from '@apollo/client';

export const paymentMethodsQuery = gql`
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


export const validatePaymentLimitQuery = gql`
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
