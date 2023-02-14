/// <reference types="react" />
import { PaymentTypes } from '../../constants';
import { CreditCardFormType, PaymentMethod } from '../../interfaces';
import { BillingFormData, PaymentData, PaymentMethodLimit } from '../../providers';
import { WireTransferFormData } from './WireTransferForm';
interface PaymentContainerProps {
    paymentType: string;
    onChoosePaymentType: (name: PaymentTypes, value: boolean) => void;
    creditCardList: PaymentMethod[];
    config?: {
        gpay?: boolean;
        applepay?: boolean;
        walletConnect?: boolean;
        wire?: boolean;
        creditCard?: boolean;
    };
    billingInfo: BillingFormData | undefined;
    paymentMethodLimit: PaymentMethodLimit | undefined;
    screeningError?: string;
    paymentInfo?: PaymentData;
    onSubmitWireTransfer: (values: WireTransferFormData) => void;
    onSubmitCreditCard: (values: CreditCardFormType) => void;
}
declare const PaymentContainer: ({ paymentType, onChoosePaymentType, creditCardList, config, billingInfo, paymentMethodLimit, screeningError, paymentInfo, onSubmitCreditCard, onSubmitWireTransfer, }: PaymentContainerProps) => JSX.Element;
export default PaymentContainer;
