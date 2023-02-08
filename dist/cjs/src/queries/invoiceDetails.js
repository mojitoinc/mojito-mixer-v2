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

const reserveNowBuyLotQuery = index.gql `
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
index.gql `
    query GetInvoiceDetails($invoiceID: UUID1!) {
        getInvoiceDetails(invoiceID: $invoiceID) {
            items {
                collectionItemID
                destinationAddress
                units
                unitPrice
                taxes
                totalPrice
                __typename
            }
        __typename
        }
    }
`;
const getTaxQuoteQuery = index.gql `
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

exports.getTaxQuoteQuery = getTaxQuoteQuery;
exports.reserveNowBuyLotQuery = reserveNowBuyLotQuery;
//# sourceMappingURL=invoiceDetails.js.map
