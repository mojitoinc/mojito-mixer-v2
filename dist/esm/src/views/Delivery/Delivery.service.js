const formCardScreeningVariable = (orgId, paymentInfo, billingInfo, taxes, meData) => {
    var _a, _b, _c;
    const cardNumber = (_a = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _a === void 0 ? void 0 : _a.cardNumber;
    const first6 = cardNumber === null || cardNumber === void 0 ? void 0 : cardNumber.substring(0, 6);
    const last4 = cardNumber === null || cardNumber === void 0 ? void 0 : cardNumber.substring((cardNumber === null || cardNumber === void 0 ? void 0 : cardNumber.length) > 4 ? (cardNumber.length - 4) : 0);
    return {
        orgID: orgId,
        input: {
            flow: 'card-payment',
            sessionKey: paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.sessionKey,
            customer: {
                firstName: billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.firstName,
                lastName: billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.lastName,
                emailAddress: billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.email,
                isEmailVerified: true,
                isPhoneVerified: false,
                address: {
                    street1: billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.street1,
                    street2: '',
                    city: billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.city,
                    regionCode: billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.state,
                    postalCode: billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.postalCode,
                    countryCode: billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.country,
                },
            },
            transaction: {
                id: window.crypto.randomUUID(),
                currencyCode: 'USD',
                actionType: 'buy',
                amount: taxes === null || taxes === void 0 ? void 0 : taxes.totalTaxedPrice,
                paymentMethod: {
                    type: 'card',
                    card: {
                        first6,
                        last4,
                        hash: `${first6}${last4}${(_c = (_b = meData === null || meData === void 0 ? void 0 : meData.me) === null || _b === void 0 ? void 0 : _b.user) === null || _c === void 0 ? void 0 : _c.id}`,
                    },
                },
            },
        },
    };
};
const formCreatePaymentMethodObject = (orgId, paymentInfo, billingInfo, keyID, encryptedCardData) => {
    var _a, _b, _c, _d;
    const expiry = (_b = (_a = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _a === void 0 ? void 0 : _a.expiry) === null || _b === void 0 ? void 0 : _b.split('/').map(value => parseInt(value.trim(), 10));
    const expirationYear = 2000 + ((_c = expiry === null || expiry === void 0 ? void 0 : expiry[1]) !== null && _c !== void 0 ? _c : 0);
    const expirationMonth = expiry === null || expiry === void 0 ? void 0 : expiry[0];
    return {
        paymentType: 'CreditCard',
        creditCardData: {
            keyID,
            encryptedData: encryptedCardData,
            expirationMonth,
            expirationYear,
            metadata: {
                email: billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.email,
                phoneNumber: (_d = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.phoneNumber) === null || _d === void 0 ? void 0 : _d.replace(/\s/g, ''),
            },
            billingDetails: {
                city: billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.city,
                country: billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.country,
                address1: billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.street1,
                address2: '',
                district: billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.state,
                postalCode: billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.postalCode,
                name: `${billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.firstName} ${billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.lastName}`,
            },
        },
    };
};

export { formCardScreeningVariable, formCreatePaymentMethodObject };
//# sourceMappingURL=Delivery.service.js.map
