import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Invoice, ReserveNow } from '@lib/interfaces/Invoice';
import {
  reserveNowBuyLotQuery,
  invoiceDetailsQuery,
  getTaxQuoteQuery,
} from '@lib/queries/invoiceDetails';
import { Taxes } from '@lib/interfaces/CostBreakDown';
import { ContainerTypes } from '@views/MojitoCheckout/MojitoCheckOut.layout';
import { useDelivery } from './DeliveryProvider';
import { useContainer } from './ContainerStateProvider';
import { collectionByIdQuery } from '@lib/queries/collection';
import { Collection } from '@lib/interfaces/Collections';

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
  collectionData: Collection;
  taxes: Taxes;
}
const BillingContext = createContext<Billing>({} as Billing);

const BillingProvider = ({ children }: { children?: React.ReactNode }) => {
  const [billingInfo, setBillingInfo] = useState<BillingFormData>();
  const { lotId, itemCount, orgId,itemId } = useDelivery();
  const { containerState } = useContainer();

  const { data: collection } = useQuery(collectionByIdQuery,{
    variables : {
      id : itemId
    },
    skip: !itemId
  })

  const collectionData: Collection = useMemo<Collection>(() => {
    return collection?.collectionItemById;
  }, [collection]);

  const taxablePrice = useMemo(
    () => collectionData?.details?.unitPrice ? collectionData?.details?.unitPrice * itemCount :  0,
    [collectionData,itemCount]
  );

  const { data: taxQuoteData } = useQuery(getTaxQuoteQuery, {
    variables: {
      input: {
        address: {
          city: billingInfo?.city,
          country: billingInfo?.country,
          state: billingInfo?.state,
          street1: billingInfo?.street1,
          postalCode: billingInfo?.postalCode,
        },
        orgID: orgId,
        taxablePrice,
      },
    },
    skip: !billingInfo || !taxablePrice,
  });

  const taxes: Taxes = useMemo<Taxes>(() => {
    return taxQuoteData?.getTaxQuote;
  }, [taxQuoteData]);

  // useEffect(() => {
  //   if (containerState !== ContainerTypes.CONFIRMATION) reserveNow();
  // }, [reserveNow, containerState]);

  const value = useMemo<Billing>(() => {
    return {
      billingInfo,
      setBillingInfo,
      collectionData,
      taxes,
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
