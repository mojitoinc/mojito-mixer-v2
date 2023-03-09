/// <reference types="react" />
import { PaymentTypes } from '../../constants';
interface PaymentMethodProps {
    isSelected: string;
    name: string;
    logo: string | JSX.Element | null;
    bodyContent: JSX.Element;
    onChoosePaymentType: (name: PaymentTypes, value: boolean) => void;
    type: PaymentTypes;
    endAdornment?: JSX.Element;
}
export declare const PaymentMethodView: ({ isSelected, name, logo, bodyContent, onChoosePaymentType, type, endAdornment, }: PaymentMethodProps) => JSX.Element;
export {};
