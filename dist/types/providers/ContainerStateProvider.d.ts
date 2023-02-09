import React from 'react';
import { ContainerTypes } from '../interfaces/ContextInterface';
export interface Container {
    containerState: ContainerTypes;
    setContainerState: (value: ContainerTypes) => void;
}
interface ContainerStateProps {
    paymentId?: string;
    success?: boolean;
    children?: React.ReactNode;
}
export declare const ContainerStateProvider: ({ paymentId, success, children, }: ContainerStateProps) => JSX.Element;
export declare const useContainer: () => Container;
export {};
