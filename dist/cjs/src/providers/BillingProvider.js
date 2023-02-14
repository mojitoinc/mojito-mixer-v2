'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../../node_modules/@apollo/client/core/index.js');
require('../../node_modules/@apollo/client/utilities/globals/index.js');
require('../../node_modules/@apollo/client/utilities/graphql/storeUtils.js');
require('../../node_modules/@apollo/client/utilities/graphql/transform.js');
require('../../node_modules/@apollo/client/utilities/common/mergeDeep.js');
require('../../node_modules/@apollo/client/utilities/observables/Observable.js');
require('../../node_modules/@apollo/client/utilities/observables/Concast.js');
require('../../node_modules/@apollo/client/utilities/common/canUse.js');
var useLazyQuery = require('../../node_modules/@apollo/client/react/hooks/useLazyQuery.js');
require('../../node_modules/@apollo/client/react/parser/index.js');
require('../../node_modules/@apollo/client/errors/index.js');
require('../../node_modules/@apollo/client/react/hooks/useQuery.js');
var invoiceDetails = require('../queries/invoiceDetails.js');
var collection = require('../queries/collection.js');
var CheckoutProvider = require('./CheckoutProvider.js');
var DebugProvider = require('./DebugProvider.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const BillingContext = React.createContext({});
const BillingProvider = ({ children }) => {
    const debug = DebugProvider.useDebug('BillingProvider');
    const [billingInfo, setBillingInfo] = React.useState();
    const [pincodeError, setPincodeError] = React.useState(false);
    const { quantity, orgId, collectionItemId, vertexEnabled } = CheckoutProvider.useCheckout();
    const [fetchCollection, { data: collection$1 }] = useLazyQuery.useLazyQuery(collection.collectionByIdQuery);
    const collectionData = React.useMemo(() => {
        return collection$1 === null || collection$1 === void 0 ? void 0 : collection$1.collectionItemById;
    }, [collection$1]);
    const taxablePrice = React.useMemo(() => {
        var _a, _b;
        if (((_a = collectionData === null || collectionData === void 0 ? void 0 : collectionData.details) === null || _a === void 0 ? void 0 : _a.unitPrice) && !Number.isNaN((_b = collectionData === null || collectionData === void 0 ? void 0 : collectionData.details) === null || _b === void 0 ? void 0 : _b.unitPrice)) {
            const newQuantity = quantity !== null && quantity !== void 0 ? quantity : 1;
            return collectionData.details.unitPrice * newQuantity;
        }
        return 0;
    }, [collectionData, quantity]);
    const [taxQuote, { data: taxQuoteData, loading }] = useLazyQuery.useLazyQuery(invoiceDetails.getTaxQuoteQuery);
    const refetchTaxes = React.useCallback((val) => {
        if (orgId && taxablePrice) {
            taxQuote({
                variables: {
                    input: {
                        address: {
                            city: val === null || val === void 0 ? void 0 : val.city,
                            country: val === null || val === void 0 ? void 0 : val.country,
                            state: val === null || val === void 0 ? void 0 : val.state,
                            street1: val === null || val === void 0 ? void 0 : val.street1,
                            postalCode: val === null || val === void 0 ? void 0 : val.postalCode,
                        },
                        orgID: orgId,
                        taxablePrice,
                    },
                },
            });
        }
    }, [orgId, taxablePrice, taxQuote]);
    React.useEffect(() => {
        if (!loading && vertexEnabled) {
            const verifiedAddress = taxQuoteData === null || taxQuoteData === void 0 ? void 0 : taxQuoteData.verifiedAddress;
            setPincodeError(verifiedAddress !== undefined);
        }
        debug.info('taxQuoteData-onChanve', { taxQuoteData, loading, vertexEnabled });
        console.log('600008', { taxQuoteData });
    }, [taxQuoteData, loading, debug, vertexEnabled]);
    React.useEffect(() => {
        if (!collectionItemId) {
            return;
        }
        fetchCollection({
            variables: {
                id: collectionItemId,
            },
        });
    }, [collectionItemId, fetchCollection]);
    React.useEffect(() => {
        if (billingInfo && orgId && taxablePrice && vertexEnabled) {
            refetchTaxes(billingInfo);
        }
    }, [billingInfo, taxablePrice, orgId, taxQuote, refetchTaxes, vertexEnabled]);
    const taxes = React.useMemo(() => {
        return taxQuoteData === null || taxQuoteData === void 0 ? void 0 : taxQuoteData.getTaxQuote;
    }, [taxQuoteData]);
    const value = React.useMemo(() => {
        return {
            billingInfo,
            setBillingInfo,
            collectionData,
            taxes,
            refetchTaxes,
            pincodeError,
            taxablePrice,
        };
    }, [billingInfo, setBillingInfo, collectionData, taxes, refetchTaxes, pincodeError, taxablePrice]);
    return (React__default["default"].createElement(BillingContext.Provider, { value: value }, children));
};
const useBilling = () => {
    return React.useContext(BillingContext);
};

exports.BillingProvider = BillingProvider;
exports.useBilling = useBilling;
//# sourceMappingURL=BillingProvider.js.map
