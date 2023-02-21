import Cookies from 'universal-cookie';
declare class CookieStorage {
    key: string;
    cookies: Cookies;
    constructor(key: string);
    setValue: (value: any) => void;
    getValue: () => any;
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
