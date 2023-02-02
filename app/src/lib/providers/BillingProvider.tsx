import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Invoice, ReserveNow } from "@lib/interfaces/Invoice";
import {
  reserveNowBuyLotQuery,
  invoiceDetailsQuery,
  getTaxQuoteQuery,
} from "@lib/queries/invoiceDetails";
import { Taxes } from "@lib/interfaces/CostBreakDown";
import { ContainerTypes } from "@views/MojitoCheckout/MojitoCheckOut.layout";
import { useDelivery } from "./DeliveryProvider";
import { useContainer } from "./ContainerStateProvider";

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
  reserveLotData: ReserveNow;
  invoiceData: Invoice[];
  taxes: Taxes;
}
const BillingContext = createContext<Billing>({} as Billing);

const BillingProvider = ({ children }: { children?: React.ReactNode }) => {
  const [billingInfo, setBillingInfo] = useState<BillingFormData>();
  const { lotId, itemCount, orgId } = useDelivery();
  const { containerState } = useContainer();

  const [reserveNow, { data: reserveData }] = useMutation(
    reserveNowBuyLotQuery,
    {
      variables: {
        input: {
          marketplaceBuyNowLotID: lotId,
          itemCount,
        },
      },
    }
  );

  const reserveLotData: ReserveNow = useMemo<ReserveNow>(() => {
    return reserveData?.reserveMarketplaceBuyNowLot?.invoice;
  }, [reserveData]);

  const { data: invoiceDetails } = useQuery(invoiceDetailsQuery, {
    variables: {
      invoiceID: reserveLotData?.invoiceID,
    },
    skip: !reserveLotData?.invoiceID,
  });

  const invoiceData: Invoice[] = useMemo<Invoice[]>(() => {
    return invoiceDetails?.getInvoiceDetails?.items ?? [];
  }, [invoiceDetails]);

  const taxablePrice = useMemo(
    () =>
      invoiceData?.reduce((value: number, item: Invoice) => {
        return value + item.totalPrice;
      }, 0),
    [invoiceData]
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

  useEffect(() => {
    if (containerState !== ContainerTypes.CONFIRMATION) reserveNow();
  }, [reserveNow, containerState]);

  const value = useMemo<Billing>(() => {
    return {
      billingInfo,
      setBillingInfo,
      reserveLotData,
      invoiceData,
      taxes,
    };
  }, [billingInfo, setBillingInfo, reserveLotData, taxes, invoiceData]);

  return (
    <BillingContext.Provider value={value}>{children}</BillingContext.Provider>
  );
};

export default BillingProvider;

export const useBilling = () => {
  return useContext(BillingContext);
};
