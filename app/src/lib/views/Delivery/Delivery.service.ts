import { Taxes } from "@lib/interfaces/CostBreakDown";
import { BillingFormData } from "@lib/providers/BillingProvider";
import { PaymentData } from "@lib/providers/PaymentProvider";

export const formCardScreeningVariable = (
  orgId: string,
  paymentInfo?: PaymentData,
  billingInfo?: BillingFormData,
  taxes?: Taxes,
  meData?: any
) => {
  const first6 = paymentInfo?.creditCardData?.cardNumber?.substring(0, 6);
  const last4 = paymentInfo?.creditCardData?.cardNumber?.substring(
    paymentInfo?.creditCardData?.cardNumber?.length - 4
  );
  return {
    orgID: orgId,
    input: {
      flow: "card-payment",
      sessionKey: paymentInfo?.sessionKey,
      customer: {
        firstName: paymentInfo?.creditCardData?.firstName,
        lastName: paymentInfo?.creditCardData?.lastName,
        emailAddress: billingInfo?.email,
        isEmailVerified: true,
        isPhoneVerified: false,
        address: {
          street1: billingInfo?.street1,
          street2: "",
          city: billingInfo?.city,
          regionCode: billingInfo?.state,
          postalCode: billingInfo?.postalCode,
          countryCode: billingInfo?.country,
        },
      },
      transaction: {
        id: window.crypto.randomUUID(),
        currencyCode: "USD",
        actionType: "buy",
        amount: taxes?.totalTaxedPrice,
        paymentMethod: {
          type: "card",
          card: {
            first6,
            last4,
            hash: `${first6}${last4}${meData?.me?.user?.id}`,
          },
        },
      },
    },
  };
};

export const formCreatePaymentMethodObject = (
  orgId: string,
) => {
  return {
    orgID: orgId,
    input: {
      paymentType: "CreditCard",
      creditCardData: {
        keyID: "key1",
        encryptedData:
          "LS0tLS1CRUdJTiBQR1AgTUVTU0FHRS0tLS0tCgp3Y0JNQTBYV1NGbEZScFZoQVFnQW1DSi82ZyttWlBRM3lsZ3g0TW1idkxXR2puTWszZjdJS1JNQ2RaYm8KT2pSQlBQQTdQWEpCZHVwdGU2WnhyQktQenAwUnMyWXF5OXlndnd6NVhQaHovTVJ6UEw2aCtRUjZJc2EwCkxMSFVpcWFwYnNiRVJpR0xvMHIvcTBqUk9NWklWMU5jSUdBSDZrblh6elpaZWRWcUhQc2VTOW5PR2NwNgpNM0J6aXZBaGFTeU9vallOZExmSVV4SEk3aDd2NHVxVjlaK0I0TUlqSnhVN0NvM0gyMVlqSkxIZEg5UW0KQk4vMTNkOUVDV3B5eVBwNlUxUjB6aVJOQXFyZ2tyVEdaRGdreEs5elVpNVpCbWh4YVlrdkRVREQxeE8rClpFSXZSNkdQQ0tGc0ExS04vUVdsVGpiSDNHcWJKRTdmaHU5dFRXa3A2UkgrQ2NROEJieEFOcVhkd1NNTQpxdEphQWNUejVvYU1GbVc4Q1BhOHNNSTQwaCtYZjVnSVBXUDhNZjFUaXR5UDVvSEZXZHkvVXQ2aWV5NFcKSXN3WUlQTVNHTG13WEVQNEhVS2J2REx2SXNJRHBydUtIWlFCWlppbUNsWmJzM1FmTUZmTGRtTUFJWFVoCktHL04KPW04Z2YKLS0tLS1FTkQgUEdQIE1FU1NBR0UtLS0tLQo=",
        expirationMonth: 12,
        expirationYear: 2026,
        metadata: {
          email: "showri.srinivas@ionixxtech.com",
          phoneNumber: "+919010804763",
        },
        billingDetails: {
          city: "Charlotte",
          country: "US",
          address1: "234 - street2",
          address2: "iuhjknkjn,",
          district: "OK",
          postalCode: "28375",
          name: "Showri Srinivas",
        },
      },
    },
  };
};
