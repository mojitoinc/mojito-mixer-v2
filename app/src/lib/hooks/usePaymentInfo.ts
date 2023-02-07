import { CollectionItem, Taxes, ReserveNow } from '../interfaces';
import { BillingFormData, PaymentData } from '../providers';
import { CookieService } from '../service/CookieService';
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
