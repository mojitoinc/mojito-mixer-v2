import { Collection } from '@lib/interfaces/Collections';
import { Taxes } from '@lib/interfaces/CostBreakDown';
import { ReserveNow } from '@lib/interfaces/Invoice';
import { BillingFormData } from '@lib/providers/BillingProvider';
import { PaymentData } from '@lib/providers/PaymentProvider';
import { CookieService } from '@lib/storage/CookieService';
import { useMemo } from 'react';

interface PaymentInfo {
  billingInfo?: BillingFormData;
  paymentInfo?: PaymentData;
  lotData? : ReserveNow;
  taxData? : Taxes;
  collection? : Collection;
}

const usePaymentInfo = (): PaymentInfo => {
  const billing = CookieService.billing.getValue();
  const payment = CookieService.paymentInfo.getValue();
  const taxes = CookieService.taxes.getValue();
  const reserveLotData = CookieService.reserveLotData.getValue();
  const collectionData = CookieService.collectionData.getValue() 

  const getObject = (value:any) => {
    if (typeof value === 'object') return value;
    if (typeof value === 'string') return JSON.parse(value);
    return undefined;
  };

  const billingInfo = useMemo(() => {
    return getObject(billing) as BillingFormData;
  }, [billing]);
  const paymentInfo = useMemo(() => {
    return getObject(payment) as PaymentData;
  }, [payment]);
  const lotData = useMemo(() => {
    return getObject(reserveLotData) as ReserveNow;
  }, [reserveLotData]);
  const taxData = useMemo(() => {
    return getObject(taxes) as Taxes;
  }, [taxes]);
  const collection = useMemo(() => {
    return getObject(collectionData) as Collection;
  }, [collectionData]);

  return {
    billingInfo,
    paymentInfo,
    lotData,
    taxData,
    collection
  };
};
export default usePaymentInfo;
