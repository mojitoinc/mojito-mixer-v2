export interface BillingDetails {
    name: string;
    city: string;
    country: string;
    address1: string;
    address2: string;
    district: string;
    postalCode: string;
    __typename: string;
}
export interface Metadata {
    email: string;
    phoneNumber: string;
    __typename: string;
}
export interface BankAddress {
    bankName: string;
    address1: string;
    address2: string;
    country: string;
    district: string;
    city: string;
    __typename: string;
}
export interface PaymentMethod {
    id: string;
    type: string;
    status: string;
    __typename: string;
    description?: string;
    bankAddress?: BankAddress;
    billingDetails?: BillingDetails;
    network?: string;
    last4Digit?: string;
    metadata?: Metadata;
}
