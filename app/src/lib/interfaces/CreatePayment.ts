export interface Beneficiary {
    name: string;
    address1: string;
    address2: string;
    __typename: string;
}

export interface BeneficiaryBank {
    name: string;
    swiftCode: string;
    routingNumber: string;
    accountNumber: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    __typename: string;
}

export interface WireInstructions {
    trackingRef: string;
    beneficiary: Beneficiary;
    beneficiaryBank: BeneficiaryBank;
    __typename: string;
}

export interface Details {
    WireInstructions?: WireInstructions;
    hostedURL?: string;
    __typename: string;
}

export interface CreatePaymentResult {
    id: string;
    invoiceID: string;
    processorPaymentID: string;
    status: string;
    userID: string;
    details: Details;
    __typename: string;
}
