import React from 'react';
type ErrorMessage = string | object | undefined | null;
export interface DebugState {
    debug: boolean;
    log: (emoji: string, tag: string, method?: ErrorMessage, message?: ErrorMessage) => void;
}
export interface DebugProps {
    debug: boolean;
    children?: React.ReactNode;
}
declare const DebugProvider: ({ debug, children, }: DebugProps) => JSX.Element;
export default DebugProvider;
export declare const useDebug: (tag: string) => {
    success: (method?: string, message?: ErrorMessage) => void;
    info: (method?: ErrorMessage, message?: ErrorMessage) => void;
    error: (method?: string, message?: ErrorMessage) => void;
    warn: (method?: ErrorMessage, message?: ErrorMessage) => void;
};
