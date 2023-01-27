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
