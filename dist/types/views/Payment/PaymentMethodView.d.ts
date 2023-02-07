/// <reference types="react" />
import { PaymentTypes } from '../../constants';
interface PaymentMethodProps {
    isSelected: string;
    name: string;
    logo: string | null;
    bodyContent: JSX.Element;
    onChoosePaymentType: (name: PaymentTypes, value: boolean) => void;
    type: PaymentTypes;
}
export declare const PaymentMethodView: ({ isSelected, name, logo, bodyContent, onChoosePaymentType, type, }: PaymentMethodProps) => JSX.Element;
export {};
