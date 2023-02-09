import { __awaiter } from '../../../node_modules/tslib/tslib.es6.js';
import React__default, { useState, useCallback, useEffect, useMemo } from 'react';
import { useFormik } from '../../../node_modules/formik/dist/formik.esm.js';
import '../../../node_modules/yup/es/mixed.js';
import { create as create$2 } from '../../../node_modules/yup/es/boolean.js';
import { create as create$1 } from '../../../node_modules/yup/es/string.js';
import '../../../node_modules/yup/es/locale.js';
import '../../../node_modules/yup/es/schema.js';
import '../../../node_modules/yup/es/date.js';
import { create } from '../../../node_modules/yup/es/object.js';
import '../../../node_modules/yup/es/Reference.js';
import 'property-expr';
import '../../../node_modules/@apollo/client/core/index.js';
import '../../../node_modules/@apollo/client/utilities/globals/index.js';
import '../../../node_modules/@apollo/client/utilities/graphql/storeUtils.js';
import '../../../node_modules/@apollo/client/utilities/graphql/transform.js';
import '../../../node_modules/@apollo/client/utilities/common/mergeDeep.js';
import '../../../node_modules/@apollo/client/utilities/observables/Observable.js';
import '../../../node_modules/@apollo/client/utilities/observables/Concast.js';
import '../../../node_modules/@apollo/client/utilities/common/canUse.js';
import { useLazyQuery } from '../../../node_modules/@apollo/client/react/hooks/useLazyQuery.js';
import '../../../node_modules/@apollo/client/react/parser/index.js';
import '../../../node_modules/@apollo/client/errors/index.js';
import { useQuery } from '../../../node_modules/@apollo/client/react/hooks/useQuery.js';
import { paymentMethodsQuery } from '../../queries/billing.js';
import { PaymentTypes } from '../../constants/index.js';
import { ContainerTypes } from '../../interfaces/ContextInterface/RootContainer.js';
import '../../providers/DebugProvider.js';
import '../../providers/ErrorProvider.js';
import { useBilling } from '../../providers/BillingProvider.js';
import { useContainer } from '../../providers/ContainerStateProvider.js';
import { useUIConfiguration } from '../../providers/UIConfigurationProvider.js';
import { useCheckout } from '../../providers/CheckoutProvider.js';
import { usePayment } from '../../providers/PaymentProvider.js';
import { formCardScreeningVariable } from '../Delivery/Delivery.service.js';
import { cardScreeningQuery } from '../../queries/creditCard.js';
import { meQuery } from '../../queries/me.js';
import PaymentContainer$1 from './PaymentContainer.js';

const PaymentContainer = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
    const { orgId } = useCheckout();
    const { setPaymentInfo, paymentInfo } = usePayment();
    const { setContainerState } = useContainer();
    const { billingInfo, taxes } = useBilling();
    const uiConfiguration = useUIConfiguration();
    const [paymentType, setPaymentType] = useState(PaymentTypes.CREDIT_CARD);
    const onChoosePaymentType = useCallback((name, value) => {
        setPaymentType(value ? name : paymentType);
    }, [paymentType]);
    useEffect(() => {
        var _a;
        setPaymentType((_a = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) !== null && _a !== void 0 ? _a : PaymentTypes.CREDIT_CARD);
    }, [paymentInfo]);
    const validationSchema = create().shape({
        accountNumber: create$1()
            .matches(/^[\d\s]+$/, 'Invalid account number')
            .min(9, 'Invalid account number')
            .required('Please enter account number'),
        aba: create$1()
            .matches(/^[\d\s]+$/, 'Invalid aba')
            .min(10, 'Invalid aba')
            .required('Please enter aba'),
        bankCountry: create$1().required('Please select bank country'),
        bankName: create$1().required('Please select bank name'),
    });
    const creditCardSchema = create().shape({
        isNew: create$2(),
        expiry: create$1()
            .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Invalid expiry')
            .required('Please enter expiry'),
        cvv: create$1()
            .matches(/^[\d\s]+$/, 'Invalid account number')
            .min(3, 'Invalid CVV')
            .required('Please enter CVV'),
        cardNumber: create$1().when('isNew', {
            is: true,
            then: create$1()
                .required('Please enter card number')
                .min(12, 'Please enter valid card number'),
            otherwise: create$1(),
        }),
        firstName: create$1().when('isNew', {
            is: true,
            then: create$1().required('Please enter first name'),
            otherwise: create$1(),
        }),
        lastName: create$1().when('isNew', {
            is: true,
            then: create$1().required('Please enter last name'),
            otherwise: create$1(),
        }),
        cardId: create$1().when('isNew', {
            is: (isNew) => !isNew,
            then: create$1().required('Please select a card'),
            otherwise: create$1().nullable(),
        }),
    });
    const { data: paymentData } = useQuery(paymentMethodsQuery, {
        variables: {
            orgID: orgId,
        },
    });
    const [cardScreening] = useLazyQuery(cardScreeningQuery);
    const { data: meData } = useQuery(meQuery);
    const [creditCardList, setCreditCardList] = useState([]);
    const { values: wireTransferFormValues, handleChange: onChangeWireTransferField, setFieldValue: onSetWireTransferField, errors: wireTransferFormErrors, isValid: isValidWireTransfer, } = useFormik({
        initialValues: {
            accountNumber: (_b = (_a = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _a === void 0 ? void 0 : _a.accountNumber) !== null && _b !== void 0 ? _b : '',
            aba: (_d = (_c = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _c === void 0 ? void 0 : _c.routingNumber) !== null && _d !== void 0 ? _d : '',
            bankCountry: (_g = (_f = (_e = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _e === void 0 ? void 0 : _e.bankAddress) === null || _f === void 0 ? void 0 : _f.country) !== null && _g !== void 0 ? _g : '',
            bankName: (_k = (_j = (_h = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _h === void 0 ? void 0 : _h.bankAddress) === null || _j === void 0 ? void 0 : _j.bankName) !== null && _k !== void 0 ? _k : '',
        },
        validationSchema,
        onSubmit: () => undefined,
        validateOnChange: true,
        validateOnMount: true,
    });
    const { values: creditCardFormValues, handleChange: onChangeCreditCardField, setFieldValue: onSetCreditCardField, errors: creditCardFormErrors, isValid: isValidCreditCardValues, setFieldError, } = useFormik({
        initialValues: {
            isNew: (_m = (_l = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _l === void 0 ? void 0 : _l.isNew) !== null && _m !== void 0 ? _m : false,
            cardData: (_p = (_o = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _o === void 0 ? void 0 : _o.cardData) !== null && _p !== void 0 ? _p : undefined,
            cardId: (_r = (_q = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _q === void 0 ? void 0 : _q.cardId) !== null && _r !== void 0 ? _r : '',
            cardNumber: (_t = (_s = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _s === void 0 ? void 0 : _s.cardNumber) !== null && _t !== void 0 ? _t : '',
            cvv: (_v = (_u = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _u === void 0 ? void 0 : _u.cvv) !== null && _v !== void 0 ? _v : '',
            expiry: (_x = (_w = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _w === void 0 ? void 0 : _w.expiry) !== null && _x !== void 0 ? _x : '',
            save: (_z = (_y = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _y === void 0 ? void 0 : _y.save) !== null && _z !== void 0 ? _z : false,
            firstName: (_1 = (_0 = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _0 === void 0 ? void 0 : _0.firstName) !== null && _1 !== void 0 ? _1 : '',
            lastName: (_3 = (_2 = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _2 === void 0 ? void 0 : _2.lastName) !== null && _3 !== void 0 ? _3 : '',
        },
        validationSchema: creditCardSchema,
        onSubmit: () => undefined,
        validateOnChange: true,
        validateOnMount: true,
    });
    useEffect(() => {
        var _a;
        if (paymentData) {
            const creditCards = (_a = paymentData === null || paymentData === void 0 ? void 0 : paymentData.getPaymentMethodList) === null || _a === void 0 ? void 0 : _a.filter((item) => item.type === 'CreditCard');
            const filteredCreditCards = creditCards.filter((item, index, array) => index ===
                array.findIndex(foundItem => foundItem.last4Digit === item.last4Digit &&
                    foundItem.network === item.network));
            if (filteredCreditCards.length > 0) {
                onSetCreditCardField('cardId', filteredCreditCards[0].id);
            }
            else {
                onSetCreditCardField('isNew', filteredCreditCards.length === 0);
            }
            setCreditCardList(filteredCreditCards);
        }
        else {
            onSetCreditCardField('isNew', true);
        }
    }, [paymentData, onSetCreditCardField]);
    const onSubmitCreditCard = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        var _4, _5;
        if (isValidCreditCardValues) {
            const selectedCard = creditCardList.find((item) => item.id === (creditCardFormValues === null || creditCardFormValues === void 0 ? void 0 : creditCardFormValues.cardId));
            const paymentInfoData = Object.assign(Object.assign({}, paymentInfo), { paymentType, creditCardData: Object.assign(Object.assign({}, creditCardFormValues), { cardData: selectedCard }) });
            try {
                if (creditCardFormValues === null || creditCardFormValues === void 0 ? void 0 : creditCardFormValues.isNew) {
                    const variables = formCardScreeningVariable(orgId !== null && orgId !== void 0 ? orgId : '', paymentInfoData, billingInfo, taxes, meData);
                    const cardScreeningData = yield cardScreening({
                        variables,
                    });
                    if (((_5 = (_4 = cardScreeningData.data) === null || _4 === void 0 ? void 0 : _4.cardScreening) === null || _5 === void 0 ? void 0 : _5.level) !== 'high') {
                        setPaymentInfo(paymentInfoData);
                        setContainerState(ContainerTypes.DELIVERY);
                    }
                    else {
                        setFieldError('cardNumber', 'Please enter a valid card number.');
                    }
                }
                else {
                    setPaymentInfo(paymentInfoData);
                    setContainerState(ContainerTypes.DELIVERY);
                }
            }
            catch (e) {
                console.error('ERROR', e);
            }
        }
    }), [
        creditCardFormValues,
        isValidCreditCardValues,
        creditCardList,
        paymentInfo,
        paymentType,
        orgId,
        billingInfo,
        taxes,
        meData,
        cardScreening,
        setContainerState,
        setFieldError,
        setPaymentInfo,
    ]);
    const onSubmitWireTransfer = useCallback(() => {
        setPaymentInfo(Object.assign(Object.assign({}, paymentInfo), { paymentType, wireData: {
                accountNumber: wireTransferFormValues.accountNumber.split(' ').join(''),
                routingNumber: wireTransferFormValues.aba.split(' ').join(''),
                bankAddress: {
                    bankName: wireTransferFormValues.bankName,
                    country: wireTransferFormValues.bankCountry,
                },
            } }));
        setContainerState(ContainerTypes.DELIVERY);
    }, [
        wireTransferFormValues,
        paymentInfo,
        setPaymentInfo,
        paymentType,
        setContainerState,
    ]);
    const onClickDelivery = useCallback(() => {
        if (paymentType === PaymentTypes.CREDIT_CARD && !(billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.phoneNumber))
            return;
        if (paymentType === PaymentTypes.WIRE_TRANSFER && isValidWireTransfer) {
            onSubmitWireTransfer();
        }
        if (paymentType === PaymentTypes.CREDIT_CARD) {
            onSubmitCreditCard();
        }
    }, [
        paymentType,
        onSubmitCreditCard,
        onSubmitWireTransfer,
        billingInfo,
        isValidWireTransfer,
    ]);
    const buttonDisabled = useMemo(() => {
        if (paymentType === PaymentTypes.CREDIT_CARD) {
            return !isValidCreditCardValues;
        }
        if (paymentType === PaymentTypes.WIRE_TRANSFER) {
            return !isValidWireTransfer;
        }
        return true;
    }, [isValidCreditCardValues, isValidWireTransfer, paymentType]);
    return (React__default.createElement(PaymentContainer$1, { paymentType: paymentType, onChoosePaymentType: onChoosePaymentType, wireTransferFormValues: wireTransferFormValues, onChangeWireTransferField: onChangeWireTransferField, onSetWireTransferField: onSetWireTransferField, wireTransferFormErrors: wireTransferFormErrors, creditCardFormValues: creditCardFormValues, onChangeCreditCardField: onChangeCreditCardField, onSetCreditCardField: onSetCreditCardField, creditCardFormErrors: creditCardFormErrors, creditCardList: creditCardList, onClickDelivery: onClickDelivery, config: uiConfiguration === null || uiConfiguration === void 0 ? void 0 : uiConfiguration.payment, billingInfo: billingInfo, buttonDisabled: buttonDisabled }));
};

export { PaymentContainer };
//# sourceMappingURL=index.js.map
