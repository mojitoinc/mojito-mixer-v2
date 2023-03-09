/// <reference types="react" />
import { PaymentTypes } from '../../constants';
import { CreditCardFormType, PaymentMethod } from '../../interfaces';
import { BillingFormData, OnChainForm, PaymentData, PaymentMethodLimit } from '../../providers';
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
        coinbase?: boolean;
        onChain?: boolean;
    };
    billingInfo: BillingFormData | undefined;
    paymentMethodLimit: PaymentMethodLimit | undefined;
    screeningError?: string;
    paymentInfo?: PaymentData;
    onSubmitWireTransfer: (values: WireTransferFormData) => void;
    onSubmitCreditCard: (values: CreditCardFormType) => void;
    onSubmitOnChain: (values: OnChainForm) => void;
    onContinueToDelivery: () => void;
}
declare const PaymentContainer: ({ paymentType, onChoosePaymentType, creditCardList, config, billingInfo, paymentMethodLimit, screeningError, paymentInfo, onSubmitCreditCard, onSubmitWireTransfer, onSubmitOnChain, onContinueToDelivery, }: PaymentContainerProps) => JSX.Element;
export default PaymentContainer;
