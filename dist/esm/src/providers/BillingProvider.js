import React__default, { createContext, useState, useMemo, useCallback, useEffect, useContext } from 'react';
import '../../node_modules/@apollo/client/core/index.js';
import '../../node_modules/@apollo/client/utilities/globals/index.js';
import '../../node_modules/@apollo/client/utilities/graphql/storeUtils.js';
import '../../node_modules/@apollo/client/utilities/graphql/transform.js';
import '../../node_modules/@apollo/client/utilities/common/mergeDeep.js';
import '../../node_modules/@apollo/client/utilities/observables/Observable.js';
import '../../node_modules/@apollo/client/utilities/observables/Concast.js';
import '../../node_modules/@apollo/client/utilities/common/canUse.js';
import { useLazyQuery } from '../../node_modules/@apollo/client/react/hooks/useLazyQuery.js';
import '../../node_modules/@apollo/client/react/parser/index.js';
import '../../node_modules/@apollo/client/errors/index.js';
import '../../node_modules/@apollo/client/react/hooks/useQuery.js';
import { getTaxQuoteQuery } from '../queries/invoiceDetails.js';
import { collectionByIdQuery } from '../queries/collection.js';
import { useDelivery } from './DeliveryProvider.js';

const BillingContext = createContext({});
const BillingProvider = ({ children }) => {
    const [billingInfo, setBillingInfo] = useState();
    const { quantity, orgId, collectionItemId } = useDelivery();
    const [fetchCollection, { data: collection }] = useLazyQuery(collectionByIdQuery);
    const collectionData = useMemo(() => {
        return collection === null || collection === void 0 ? void 0 : collection.collectionItemById;
    }, [collection]);
    const taxablePrice = useMemo(() => {
        var _a, _b;
        if (((_a = collectionData === null || collectionData === void 0 ? void 0 : collectionData.details) === null || _a === void 0 ? void 0 : _a.unitPrice) && !Number.isNaN((_b = collectionData === null || collectionData === void 0 ? void 0 : collectionData.details) === null || _b === void 0 ? void 0 : _b.unitPrice)) {
            const newQuantity = quantity !== null && quantity !== void 0 ? quantity : 1;
            return collectionData.details.unitPrice * newQuantity;
        }
        return 0;
    }, [collectionData, quantity]);
    const [taxQuote, { data: taxQuoteData }] = useLazyQuery(getTaxQuoteQuery);
    const refetchTaxes = useCallback((val) => {
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
    useEffect(() => {
        fetchCollection({
            variables: {
                id: collectionItemId,
            },
        });
    }, [collectionItemId, fetchCollection]);
    useEffect(() => {
        if (billingInfo && orgId && taxablePrice) {
            refetchTaxes(billingInfo);
        }
    }, [billingInfo, taxablePrice, orgId, taxQuote, refetchTaxes]);
    const taxes = useMemo(() => {
        return taxQuoteData === null || taxQuoteData === void 0 ? void 0 : taxQuoteData.getTaxQuote;
    }, [taxQuoteData]);
    const value = useMemo(() => {
        return {
            billingInfo,
            setBillingInfo,
            collectionData,
            taxes,
            refetchTaxes,
        };
    }, [billingInfo, setBillingInfo, collectionData, taxes, refetchTaxes]);
    return (React__default.createElement(BillingContext.Provider, { value: value }, children));
};
const useBilling = () => {
    return useContext(BillingContext);
};

export { BillingProvider, useBilling };
//# sourceMappingURL=BillingProvider.js.map
