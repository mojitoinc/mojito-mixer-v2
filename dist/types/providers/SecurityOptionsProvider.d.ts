/// <reference types="react" />
import { SardineEnvironment } from '../config';
export interface SecurityOptions {
    sardineEnvironment?: SardineEnvironment;
    enableSardine?: boolean;
}
export declare const SecurityContext: import("react").Context<SecurityOptions>;
export declare const useSecurityOptions: () => SecurityOptions;
