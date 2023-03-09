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

const reserveNowBuyLotQuery = gql `
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
const invoiceDetailsQuery = gql `
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
const getTaxQuoteQuery = gql `
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

export { getTaxQuoteQuery, invoiceDetailsQuery, reserveNowBuyLotQuery };
//# sourceMappingURL=invoiceDetails.js.map
