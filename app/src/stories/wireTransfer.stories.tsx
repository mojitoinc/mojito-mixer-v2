import React from "react";
import { PaymentTypes } from "@lib/constants";
import PaymentContainer from "@views/Payment/PaymentContainer";

export const WireTransferStories = () => {
  return (
    <PaymentContainer
      creditCardFormErrors={{}}
      creditCardFormValues={{
        isNew: false,
      }}
      billingInfo={{}}
      creditCardList={[]}
      onChangeCreditCardField={() => undefined}
      onSetCreditCardField={async () => undefined}
      onChangeWireTransferField={() => undefined}
      onChoosePaymentType={() => undefined}
      onSetWireTransferField={async () => undefined}
      onClickDelivery={() => undefined}
      paymentType={PaymentTypes.WIRE_TRANSFER}
      wireTransferFormErrors={{}}
      wireTransferFormValues={{
        aba: "",
        accountNumber: "",
        bankCountry: "US",
        bankName: "Bank of America",
      }}
      config={{
        gpay: true,
        applepay: true,
        walletConnect: true,
        wire: true,
        creditCard: true,
      }}
      buttonDisabled={false}
      showPaymentMethods={{
        showCreditCard: true,
        showWire: true,
      }}
    />
  );
};
const stories = {
  title: "views/payments/WireTransfer",
  component: PaymentContainer,
};
export default stories;
