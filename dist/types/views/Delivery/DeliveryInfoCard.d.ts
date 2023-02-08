/// <reference types="react" />
import { BillingFormData, PaymentData } from '../../providers';
interface DeliveryInfoCardProps {
    billingInfo: BillingFormData | undefined;
    paymentInfo: PaymentData | undefined;
}
export declare const DeliveryInfoCard: ({ billingInfo, paymentInfo, }: DeliveryInfoCardProps) => JSX.Element;
export {};
