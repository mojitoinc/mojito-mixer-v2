import React from 'react';
export declare enum ContainerTypes {
    CHECKOUT = "CHECKOUT",
    PAYMENT = "PAYMENT",
    DELIVERY = "DELIVERY",
    CONFIRMATION = "CONFIRMATION",
    LOADING = "LOADING"
}
export interface Container {
    containerState: ContainerTypes;
    setContainerState: (value: ContainerTypes) => void;
}
interface ContainerStateProps {
    paymentId?: string;
    children?: React.ReactNode;
}
export declare const ContainerStateProvider: ({ paymentId, children, }: ContainerStateProps) => JSX.Element;
export declare const useContainer: () => Container;
export {};
