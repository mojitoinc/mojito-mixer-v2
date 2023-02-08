/// <reference types="react" />
import { FormikErrors } from 'formik';
import { BillingFormData } from '../../providers';
interface BillingFormProps {
    values: BillingFormData;
    errors: FormikErrors<BillingFormData>;
    onChange: any;
    isValid: boolean;
}
declare const BillingForm: ({ values, errors, onChange, isValid, }: BillingFormProps) => JSX.Element;
export default BillingForm;
