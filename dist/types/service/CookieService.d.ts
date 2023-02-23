declare class CookieStorage {
    key: string;
    constructor(key: string);
    setValue: (value: any) => void;
    getValue: () => string;
    remove: () => void;
}
export declare const CookieService: {
    billing: CookieStorage;
    paymentInfo: CookieStorage;
    taxes: CookieStorage;
    reserveLotData: CookieStorage;
    collectionData: CookieStorage;
    paymentResult: CookieStorage;
    quantity: CookieStorage;
    vertexEnabled: CookieStorage;
    taxablePrice: CookieStorage;
};
export {};
