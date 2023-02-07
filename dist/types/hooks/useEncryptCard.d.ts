export interface EncryptCardDataOptions {
    number?: string;
    cvv: string;
}
export interface UseEncryptedDataResult {
    keyID: string;
    encryptedCardData: string;
}
export interface UseEncryptCardDataOptions {
    orgID: string;
}
export declare function useEncryptCardData({ orgID }: UseEncryptCardDataOptions): [
    (encryptCardDataOptions: EncryptCardDataOptions) => Promise<UseEncryptedDataResult>
];
