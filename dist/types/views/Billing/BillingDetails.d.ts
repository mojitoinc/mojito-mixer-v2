/// <reference types="react" />
import { BillingFormData } from '../../providers';
interface BillingFormProps {
    values: BillingFormData;
    onClickEdit: () => void;
}
declare const BillingDetails: ({ values, onClickEdit }: BillingFormProps) => JSX.Element;
export default BillingDetails;
