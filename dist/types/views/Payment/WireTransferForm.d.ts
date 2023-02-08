/// <reference types="react" />
import { FormikErrors } from 'formik';
export interface WireTransferFormData {
    accountNumber: string;
    aba: string;
    bankCountry: string;
    bankName: string;
}
interface WireTransferFormProps {
    values: WireTransferFormData;
    handleChange: any;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void> | Promise<FormikErrors<WireTransferFormData>>;
    errors: FormikErrors<WireTransferFormData>;
}
export declare const WireTransferForm: ({ values, handleChange, setFieldValue, errors, }: WireTransferFormProps) => JSX.Element;
export {};
