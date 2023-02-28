export interface Item {
    units: number;
    unitPrice: number;
    taxes: number;
    totalPrice: number;
    invoiceItemID: string;
    __typename: string;
}

export interface ReserveNow {
    invoiceID: string;
    status: string;
    items: Item[];
    __typename: string;
}

export interface Invoice {
    collectionItemID: string;
    destinationAddress: string;
    units: number;
    unitPrice: number;
    taxes: number;
    totalPrice: number;
    __typename: string;
}


export interface ChainPaymentInfo {
    networkID: string;
    ownerWalletAddress: string;
    onchainPaymentAddress: string;
    tokenContractAddress: string;
    onChainID: string;
    tokenType: string;
}

export interface InterfaceDetailsItem {
    invoiceItemID: string;
    isOnchainPaymentAvailable: boolean;
    onChainPaymentInfo: ChainPaymentInfo;
}

export interface InvoiceDetails {
    status: string;
    items: InterfaceDetailsItem[];
    __typename: string;
}
