import { CollectionItem, Taxes, ReserveNow } from '../interfaces';
import { BillingFormData, PaymentData } from '../providers';
interface PaymentInfo {
    billingInfo?: BillingFormData;
    paymentInfo?: PaymentData;
    lotData?: ReserveNow;
    taxData?: Taxes;
    collection?: CollectionItem;
}
declare const usePaymentInfo: () => PaymentInfo;
export default usePaymentInfo;
