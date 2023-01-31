import { PaymentTypes } from '@lib/constants/states';
import PaymentLayout from '@lib/views/Payment/Payment.layout';

export const CreditCardStories = () => {
    return <PaymentLayout 
        onChangeWireTransferField={()=>undefined}
        onChoosePaymentType={()=>undefined}
        onSetWireTransferField={async()=>{

        }}
        onClickDelivery={()=>undefined}
        paymentType={PaymentTypes.CREDIT_CARD}
        wireTransferFormErrors={{}}
        wireTransferFormValues={{
            aba:"",
            accountNumber:"",
            bankCountry:"US",
            bankName:"Bank of America"
        }}
        config = {{
            gpay: true,
            applepay: true,
            walletConnect: true,
            wire: true,
            creditCard: true,
        }}
    />;
};
const stories = {
    title: 'views/payments/CreditCard',
    component: PaymentLayout,
};
export default stories;
