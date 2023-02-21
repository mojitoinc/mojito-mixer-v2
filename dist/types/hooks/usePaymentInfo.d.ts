import { CollectionItem, Taxes, ReserveNow, CreatePaymentResult } from '../interfaces';
import { BillingFormData, PaymentData } from '../providers';
interface PaymentInfo {
    billingInfo?: BillingFormData;
    paymentInfo?: PaymentData;
    lotData?: ReserveNow;
    taxData?: Taxes;
    collection?: CollectionItem;
    paymentResult?: CreatePaymentResult;
    taxablePrice?: number;
    vertexEnabled?: boolean;
    quantity?: number;
}
declare const usePaymentInfo: () => PaymentInfo;
export default usePaymentInfo;
