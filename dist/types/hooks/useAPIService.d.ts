export interface APIClientOptions {
    getPaymentNotification: () => Promise<any>;
    getCreditCardPublicKey: (orgID: string) => Promise<any>;
}
export declare const useAPIService: () => APIClientOptions;
