export interface EncryptCVVArgs {
    key: string;
    cvv: string;
}
export interface EncryptCardArgs extends EncryptCVVArgs {
    number: string;
}
export type EncryptCardDataArgs = EncryptCardArgs | EncryptCVVArgs;
export declare function encryptCardData({ key, ...dataToEncrypt }: EncryptCardDataArgs): Promise<string>;
