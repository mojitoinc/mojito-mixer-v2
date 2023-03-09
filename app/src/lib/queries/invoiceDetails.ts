import { gql } from '@apollo/client';

export const reserveNowBuyLotQuery = gql`
    mutation ReserveBuyNowLot($input: ReserveMarketplaceBuyNowLotInput!) {
        reserveMarketplaceBuyNowLot(input: $input) {
            invoice {
                invoiceID
                status
                items {
                    units
                    unitPrice
                    taxes
                    totalPrice
                    invoiceItemID
                    __typename
                }
                __typename
            }
        __typename
        }
    }
`;

export const invoiceDetailsQuery = gql`
    query GetInvoiceDetails($invoiceID: UUID1!) {
        getInvoiceDetails(invoiceID: $invoiceID) {
            status
            items {
                invoiceItemID
                isOnchainPaymentAvailable
                onChainPaymentInfo {
                  networkID
                  ownerWalletAddress
                  onchainPaymentAddress
                  tokenContractAddress
                  onChainID
                  tokenType
                }
            }
        __typename
        }
    }
`;

export const getTaxQuoteQuery = gql`
    query GetTaxQuote($input: TaxQuoteInput!) {
        getTaxQuote(input: $input) {
            verifiedAddress {
                street1
                city
                state
                postalCode
                country
                __typename
            }
            taxablePrice
            totalTaxAmount
            totalTaxedPrice
            __typename
        }
    }
`;
