import { CollectionItem, Taxes, ReserveNow } from '@lib/interfaces';
import { BillingFormData, PaymentData } from '@lib/providers';
import { CookieService } from '@lib/service/CookieService';
import { useMemo } from 'react';

interface PaymentInfo {
  billingInfo?: BillingFormData;
  paymentInfo?: PaymentData;
  lotData? : ReserveNow;
  taxData? : Taxes;
  collection? : CollectionItem;
}
const getObject = (value:any) => {
  if (!value || value === 'undefined') return value;
  if (typeof value === 'object') return value;
  if (typeof value === 'string') return JSON.parse(value);
  return undefined;
};

const usePaymentInfo = (): PaymentInfo => {
  const billing = CookieService.billing.getValue();
  const payment = CookieService.paymentInfo.getValue();
  const taxes = CookieService.taxes.getValue();
  const reserveLotData = CookieService.reserveLotData.getValue();
  const collectionData = CookieService.collectionData.getValue();

  


  const billingInfo = useMemo(() => {
    CookieService.billing.remove()
    return getObject(billing) as BillingFormData;
  }, [billing]);
  const paymentInfo = useMemo(() => {
    CookieService.paymentInfo.remove()
    return getObject(payment) as PaymentData;
  }, [payment]);
  const lotData = useMemo(() => {
    CookieService.reserveLotData.remove()
    return getObject(reserveLotData) as ReserveNow;
  }, [reserveLotData]);
  const taxData = useMemo(() => {
    CookieService.taxes.remove()
    return getObject(taxes) as Taxes;
  }, [taxes]);
  const collection = useMemo(() => {
    CookieService.collectionData.remove()
    return getObject(collectionData) as CollectionItem;
  }, [collectionData]);

  return {
    billingInfo,
    paymentInfo,
    lotData,
    taxData,
    collection,
  };
};
export default usePaymentInfo;
