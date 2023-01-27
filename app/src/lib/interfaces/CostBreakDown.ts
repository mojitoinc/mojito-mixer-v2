export interface VerifiedAddress {
    street1: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    __typename: string;
}

export interface Taxes {
    verifiedAddress: VerifiedAddress;
    taxablePrice: number;
    totalTaxAmount: number;
    totalTaxedPrice: number;
    __typename: string;
}
