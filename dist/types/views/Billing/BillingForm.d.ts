/// <reference types="react" />
import { FormikErrors } from 'formik';
import { BillingFormData } from '../../providers';
interface BillingFormProps {
    values: BillingFormData;
    errors: FormikErrors<BillingFormData>;
    onChange: any;
    isValid: boolean;
    setFieldValue?: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void> | Promise<FormikErrors<BillingFormData>>;
}
declare const BillingForm: ({ values, errors, onChange, isValid, setFieldValue, }: BillingFormProps) => JSX.Element;
export default BillingForm;
