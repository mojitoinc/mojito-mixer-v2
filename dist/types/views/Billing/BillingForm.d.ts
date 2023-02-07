/// <reference types="react" />
import { BillingFormData } from '../../providers';
import { FormikErrors } from 'formik';
interface BillingFormProps {
    values: BillingFormData;
    errors: FormikErrors<BillingFormData>;
    onChange: any;
    isValid: boolean;
}
declare const BillingForm: ({ values, errors, onChange, isValid, }: BillingFormProps) => JSX.Element;
export default BillingForm;
