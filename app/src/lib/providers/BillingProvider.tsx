import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLazyQuery } from '@apollo/client';
import {
  getTaxQuoteQuery,
} from '@lib/queries/invoiceDetails';
import { Taxes } from '@lib/interfaces/CostBreakDown';
import { collectionByIdQuery } from '@lib/queries/collection';
import { CollectionItem } from '@lib/interfaces/Collections';
import { useDelivery } from './DeliveryProvider';

export interface BillingFormData {
  email?: string;
  country?: string;
  state?: string;
  city?: string;
  postalCode?: string;
  phoneNumber?: string;
  street1?: string;
  name?: string;
}

export interface Billing {
  billingInfo?: BillingFormData;
  setBillingInfo: (val: BillingFormData) => void;
  collectionData: CollectionItem;
  taxes: Taxes;
  refetchTaxes:(val:BillingFormData)=>void;
}
const BillingContext = createContext<Billing>({} as Billing);

const BillingProvider = ({ children }: { children?: React.ReactNode }) => {
  const [billingInfo, setBillingInfo] = useState<BillingFormData>();
  const { quantity, orgId, collectionItemId } = useDelivery();

  console.log('CALLING');

  const [fetchCollection, { data: collection }] = useLazyQuery(collectionByIdQuery);

  const collectionData: CollectionItem = useMemo<CollectionItem>(() => {
    return collection?.collectionItemById;
  }, [collection]);

  const taxablePrice = useMemo<number>(
    () => {
      if (collectionData?.details?.unitPrice && !Number.isNaN(collectionData?.details?.unitPrice)) {
        return collectionData.details.unitPrice * quantity;
      }
      return 0;
    },
    [collectionData, quantity],
  );

  const [taxQuote, { data: taxQuoteData }] = useLazyQuery(getTaxQuoteQuery);


  const refetchTaxes = useCallback((val:BillingFormData)=>{
    if(orgId && taxablePrice)
    taxQuote({
      variables: {
        input: {
          address: {
            city: val?.city,
            country: val?.country,
            state: val?.state,
            street1: val?.street1,
            postalCode: val?.postalCode,
          },
          orgID: orgId,
          taxablePrice,
        },
      },
    });
  },[orgId,taxablePrice])
  useEffect(() => {
    fetchCollection({
      variables: {
        id: collectionItemId,
      },
    });
  }, [collectionItemId, fetchCollection]);

  useEffect(() => {
    if (billingInfo && orgId && taxablePrice) {
      refetchTaxes(billingInfo)
    }
  }, [billingInfo, taxablePrice, orgId, taxQuote]);

  const taxes: Taxes = useMemo<Taxes>(() => {
    return taxQuoteData?.getTaxQuote;
  }, [taxQuoteData]);


  const value = useMemo<Billing>(() => {
    return {
      billingInfo,
      setBillingInfo,
      collectionData,
      taxes,
      refetchTaxes
    };
  }, [billingInfo, setBillingInfo, collectionData, taxes]);

  return (
    <BillingContext.Provider value={ value }>{ children }</BillingContext.Provider>
  );
};

export default BillingProvider;

export const useBilling = () => {
  return useContext(BillingContext);
};
