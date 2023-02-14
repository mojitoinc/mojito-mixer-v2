import React from 'react';
import { CollectionItem, Taxes } from '../interfaces';
export interface BillingFormData {
    email?: string;
    country?: string;
    state?: string;
    city?: string;
    postalCode?: string;
    phoneNumber?: string;
    street1?: string;
    name?: string;
    firstName?: string;
    lastName?: string;
}
export interface Billing {
    billingInfo?: BillingFormData;
    setBillingInfo: (val: BillingFormData) => void;
    collectionData: CollectionItem;
    taxes: Taxes;
    pincodeError?: boolean;
    refetchTaxes: (val: BillingFormData) => void;
    taxablePrice?: number;
}
export declare const BillingProvider: ({ children }: {
    children?: React.ReactNode;
}) => JSX.Element;
export declare const useBilling: () => Billing;
