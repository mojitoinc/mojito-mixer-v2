/// <reference types="react" />
export interface Delivery {
    orgId?: string;
    lotId?: string;
    quantity?: number;
    paymentId?: string;
    collectionItemId?: string;
    invoiceId?: string;
}
export declare const DeliveryContext: import("react").Context<Delivery>;
export declare const useDelivery: () => Delivery;
