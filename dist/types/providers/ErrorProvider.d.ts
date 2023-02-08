import React from 'react';
export interface ErrorState {
    error: string | undefined | null;
    setError: (prev: object) => void;
}
export interface ErrorProps {
    children?: React.ReactNode;
}
declare const ErrorProvider: ({ children, }: ErrorProps) => JSX.Element;
export default ErrorProvider;
export declare const useError: () => ErrorState;
