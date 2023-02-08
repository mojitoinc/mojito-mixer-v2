import { CollectionItem, Taxes, ReserveNow } from '@lib/interfaces';
import { BillingFormData, PaymentData } from '@lib/providers';
import { CookieService } from '@lib/service/CookieService';
import { useEffect, useState } from 'react';

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
  const [paymentData, setPaymentData] = useState<PaymentInfo>();

  useEffect(() => {
    const billing = CookieService.billing.getValue();
    const payment = CookieService.paymentInfo.getValue();
    const taxes = CookieService.taxes.getValue();
    const reserveLotData = CookieService.reserveLotData.getValue();
    const collectionData = CookieService.collectionData.getValue();

    const billingInfo = getObject(billing) as BillingFormData;
    const paymentInfo = getObject(payment) as PaymentData;
    const lotData = getObject(reserveLotData) as ReserveNow;
    const taxData = getObject(taxes) as Taxes;
    const collection = getObject(collectionData) as CollectionItem;
    CookieService.billing.remove();
    CookieService.paymentInfo.remove();
    CookieService.taxes.remove();
    CookieService.reserveLotData.remove();
    CookieService.collectionData.remove();
    setPaymentData({
      billingInfo,
      paymentInfo,
      lotData,
      taxData,
      collection,
    });
  }, []);

  return {
    ...paymentData,
  };
};
export default usePaymentInfo;
