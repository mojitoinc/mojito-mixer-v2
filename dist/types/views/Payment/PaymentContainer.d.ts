/// <reference types="react" />
import { FormikErrors } from 'formik';
import { PaymentTypes } from '../../constants';
import { CreditCardFormType, PaymentMethod } from '../../interfaces';
import { BillingFormData } from '../../providers';
import { WireTransferFormData } from './WireTransferForm';
interface PaymentContainerProps {
    paymentType: string;
    onChoosePaymentType: (name: PaymentTypes, value: boolean) => void;
    wireTransferFormValues: WireTransferFormData;
    onChangeWireTransferField: any;
    onSetWireTransferField: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void> | Promise<FormikErrors<WireTransferFormData>>;
    wireTransferFormErrors: FormikErrors<WireTransferFormData>;
    creditCardList: PaymentMethod[];
    creditCardFormValues: CreditCardFormType;
    onChangeCreditCardField: any;
    onSetCreditCardField: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void> | Promise<FormikErrors<CreditCardFormType>>;
    creditCardFormErrors: FormikErrors<CreditCardFormType>;
    onClickDelivery: () => void;
    config?: {
        gpay?: boolean;
        applepay?: boolean;
        walletConnect?: boolean;
        wire?: boolean;
        creditCard?: boolean;
    };
    billingInfo: BillingFormData | undefined;
    buttonDisabled: boolean;
}
declare const PaymentContainer: ({ paymentType, onChoosePaymentType, wireTransferFormValues, onChangeWireTransferField, onSetWireTransferField, wireTransferFormErrors, creditCardList, creditCardFormErrors, creditCardFormValues, onChangeCreditCardField, onSetCreditCardField, onClickDelivery, config, billingInfo, buttonDisabled, }: PaymentContainerProps) => JSX.Element;
export default PaymentContainer;
