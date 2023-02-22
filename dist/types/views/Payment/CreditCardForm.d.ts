/// <reference types="react" />
import { FormikErrors } from 'formik';
import { CreditCardFormType, PaymentMethod } from '../../interfaces';
interface CreditCardProps {
    creditCardList: PaymentMethod[];
    values: CreditCardFormType;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void> | Promise<FormikErrors<CreditCardFormType>>;
    errors: FormikErrors<CreditCardFormType>;
    screeningError?: string;
}
export declare const CreditCardForm: ({ creditCardList, values, setFieldValue, errors, screeningError, }: CreditCardProps) => JSX.Element;
export {};
