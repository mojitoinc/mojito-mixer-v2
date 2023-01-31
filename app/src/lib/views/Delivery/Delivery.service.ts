import { Taxes } from '@lib/interfaces/CostBreakDown';
import { BillingFormData } from '@lib/providers/BillingProvider';
import { PaymentData } from '@lib/providers/PaymentProvider';

export const formCardScreeningVariable = (
  orgId: string,
  paymentInfo?: PaymentData,
  billingInfo?: BillingFormData,
  taxes?: Taxes,
  meData?: any,
) => {
  const first6 = paymentInfo?.creditCardData?.cardNumber?.substring(0, 6);
  const last4 = paymentInfo?.creditCardData?.cardNumber?.substring(
    paymentInfo?.creditCardData?.cardNumber?.length - 4,
  );
  return {
    orgID: orgId,
    input: {
      flow: 'card-payment',
      sessionKey: paymentInfo?.sessionKey,
      customer: {
        firstName: paymentInfo?.creditCardData?.firstName,
        lastName: paymentInfo?.creditCardData?.lastName,
        emailAddress: billingInfo?.email,
        isEmailVerified: true,
        isPhoneVerified: false,
        address: {
          street1: billingInfo?.street1,
          street2: '',
          city: billingInfo?.city,
          regionCode: billingInfo?.state,
          postalCode: billingInfo?.postalCode,
          countryCode: billingInfo?.country,
        },
      },
      transaction: {
        id: window.crypto.randomUUID(),
        currencyCode: 'USD',
        actionType: 'buy',
        amount: taxes?.totalTaxedPrice,
        paymentMethod: {
          type: 'card',
          card: {
            first6,
            last4,
            hash: `${ first6 }${ last4 }${ meData?.me?.user?.id }`,
          },
        },
      },
    },
  };
};

export const formCreatePaymentMethodObject = (
  orgId: string,
  paymentInfo?: PaymentData,
  billingInfo?: BillingFormData,
  keyID?:string,
  encryptedCardData?:string,
):any => {
  const expiry = paymentInfo?.creditCardData?.expiry?.split('/').map(value => parseInt(value.trim(), 10));
  const expirationYear = 2000 + (expiry?.[1] ?? 0);
  const expirationMonth = expiry?.[0];
  return {
    paymentType: 'CreditCard',
    creditCardData: {
      keyID,
      encryptedData: encryptedCardData,
      expirationMonth,
      expirationYear,
      metadata: {
        email: billingInfo?.email,
        phoneNumber: billingInfo?.phoneNumber?.replace(/\s/g, ''),
      },
      billingDetails: {
        city: billingInfo?.city,
        country: billingInfo?.country,
        address1: billingInfo?.street1,
        address2: '',
        district: billingInfo?.state,
        postalCode: billingInfo?.postalCode,
        name: `${ paymentInfo?.creditCardData?.firstName } ${ paymentInfo?.creditCardData?.lastName }`,
      },
    },
  };
};
