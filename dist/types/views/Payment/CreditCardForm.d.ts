/// <reference types="react" />
import { CreditCardFormType, PaymentMethod } from '../../interfaces';
import { FormikErrors } from 'formik';
interface CreditCardProps {
    creditCardList: PaymentMethod[];
    values: CreditCardFormType;
    handleChange: any;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void> | Promise<FormikErrors<CreditCardFormType>>;
    errors: FormikErrors<CreditCardFormType>;
}
export declare const CreditCardForm: ({ creditCardList, values, setFieldValue, errors, handleChange, }: CreditCardProps) => JSX.Element;
export {};
