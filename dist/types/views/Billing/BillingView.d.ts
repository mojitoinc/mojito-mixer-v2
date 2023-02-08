/// <reference types="react" />
import { FormikErrors } from 'formik';
import { BillingFormData } from '../../providers';
interface BillingProps {
    isEditing: boolean;
    values: BillingFormData;
    errors: FormikErrors<BillingFormData>;
    onChange: any;
    onClickEdit: () => void;
    onClickContinue: () => void;
    isValid: boolean;
    isValidBillingForm: boolean;
}
declare const BillingView: ({ isEditing, values, errors, onChange, onClickEdit, onClickContinue, isValid, isValidBillingForm, }: BillingProps) => JSX.Element;
export default BillingView;
