/// <reference types="react" />
import { BillingFormData } from '../../providers';
import { PaymentMethod } from '../../interfaces';
interface BillingProps {
    isEditing: boolean;
    onClickEdit: () => void;
    onClickContinue: (values: BillingFormData) => void;
    pincodeError?: boolean;
    paymentItem?: PaymentMethod;
    billingInfo?: BillingFormData;
    onChangeValues: (isValid: boolean, values: BillingFormData) => void;
}
declare const BillingView: ({ isEditing, onClickEdit, onClickContinue, pincodeError, billingInfo, paymentItem, onChangeValues, }: BillingProps) => JSX.Element;
export default BillingView;
