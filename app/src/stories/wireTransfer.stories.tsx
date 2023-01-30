import { PaymentTypes } from '@lib/constants/states';
import PaymentLayout from '@lib/views/Payment/Payment.layout';

export const WireTransferStories = () => {
    return <PaymentLayout 
        onChangeWireTransferField={()=>undefined}
        onChoosePaymentType={()=>undefined}
        onSetWireTransferField={async()=>{

        }}
        onClickDelivery={()=>undefined}
        paymentType={PaymentTypes.WIRE_TRANSFER}
        wireTransferFormErrors={{}}
        wireTransferFormValues={{
            aba:"",
            accountNumber:"",
            bankCountry:"US",
            bankName:"Bank of America"
        }}
    />;
};
const stories = {
    title: 'views/payments/WireTransfer',
    component: PaymentLayout,
};
export default stories;
