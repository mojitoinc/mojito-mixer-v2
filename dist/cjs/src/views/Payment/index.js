'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var formik_esm = require('../../../node_modules/formik/dist/formik.esm.js');
require('../../../node_modules/yup/es/mixed.js');
var boolean = require('../../../node_modules/yup/es/boolean.js');
var string = require('../../../node_modules/yup/es/string.js');
require('../../../node_modules/yup/es/locale.js');
require('../../../node_modules/yup/es/schema.js');
require('../../../node_modules/yup/es/date.js');
var object = require('../../../node_modules/yup/es/object.js');
require('../../../node_modules/yup/es/Reference.js');
require('property-expr');
var billing = require('../../queries/billing.js');
require('../../../node_modules/@apollo/client/core/index.js');
require('../../../node_modules/@apollo/client/utilities/globals/index.js');
require('../../../node_modules/@apollo/client/utilities/graphql/storeUtils.js');
require('../../../node_modules/@apollo/client/utilities/graphql/transform.js');
require('../../../node_modules/@apollo/client/utilities/common/mergeDeep.js');
require('../../../node_modules/@apollo/client/utilities/observables/Observable.js');
require('../../../node_modules/@apollo/client/utilities/observables/Concast.js');
require('../../../node_modules/@apollo/client/utilities/common/canUse.js');
var useLazyQuery = require('../../../node_modules/@apollo/client/react/hooks/useLazyQuery.js');
require('../../../node_modules/@apollo/client/react/parser/index.js');
require('../../../node_modules/@apollo/client/errors/index.js');
var useQuery = require('../../../node_modules/@apollo/client/react/hooks/useQuery.js');
var index = require('../../constants/index.js');
require('../../providers/DebugProvider.js');
require('../../providers/ErrorProvider.js');
var BillingProvider = require('../../providers/BillingProvider.js');
var ContainerStateProvider = require('../../providers/ContainerStateProvider.js');
var ConfigurationProvider = require('../../providers/ConfigurationProvider.js');
var DeliveryProvider = require('../../providers/DeliveryProvider.js');
var PaymentProvider = require('../../providers/PaymentProvider.js');
var Delivery_service = require('../Delivery/Delivery.service.js');
var creditCard = require('../../queries/creditCard.js');
var me = require('../../queries/me.js');
var PaymentContainer$1 = require('./PaymentContainer.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const PaymentContainer = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
    const { orgId } = DeliveryProvider.useDelivery();
    const { setPaymentInfo, paymentInfo } = PaymentProvider.usePayment();
    const { setContainerState } = ContainerStateProvider.useContainer();
    const { billingInfo, taxes } = BillingProvider.useBilling();
    const { billing: billing$1 } = ConfigurationProvider.useUIConfiguration();
    const [paymentType, setPaymentType] = React.useState(index.PaymentTypes.CREDIT_CARD);
    const onChoosePaymentType = React.useCallback((name, value) => {
        setPaymentType(value ? name : paymentType);
    }, [paymentType]);
    React.useEffect(() => {
        var _a;
        setPaymentType((_a = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) !== null && _a !== void 0 ? _a : index.PaymentTypes.CREDIT_CARD);
    }, [paymentInfo]);
    const validationSchema = object.create().shape({
        accountNumber: string.create()
            .matches(/^[\d\s]+$/, 'Invalid account number')
            .min(9, 'Invalid account number').required('Please enter account number'),
        aba: string.create()
            .matches(/^[\d\s]+$/, 'Invalid aba')
            .min(10, 'Invalid aba').required('Please enter aba'),
        bankCountry: string.create().required('Please select bank country'),
        bankName: string.create().required('Please select bank name'),
    });
    const creditCardSchema = object.create().shape({
        isNew: boolean.create(),
        expiry: string.create()
            .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Invalid expiry')
            .required('Please enter expiry'),
        cvv: string.create()
            .matches(/^[\d\s]+$/, 'Invalid account number')
            .min(3, 'Invalid CVV')
            .required('Please enter CVV'),
        cardNumber: string.create().when('isNew', {
            is: true,
            then: string.create()
                .required('Please enter card number')
                .min(12, 'Please enter valid card number'),
            otherwise: string.create(),
        }),
        firstName: string.create().when('isNew', {
            is: true,
            then: string.create().required('Please enter first name'),
            otherwise: string.create(),
        }),
        lastName: string.create().when('isNew', {
            is: true,
            then: string.create().required('Please enter last name'),
            otherwise: string.create(),
        }),
        cardId: string.create().when('isNew', {
            is: (isNew) => !isNew,
            then: string.create().required('Please select a card'),
            otherwise: string.create().nullable(),
        }),
    });
    const { data: paymentData } = useQuery.useQuery(billing.paymentMethodsQuery, {
        variables: {
            orgID: orgId,
        },
    });
    const [cardScreening] = useLazyQuery.useLazyQuery(creditCard.cardScreeningQuery);
    const { data: meData } = useQuery.useQuery(me.meQuery);
    const [creditCardList, setCreditCardList] = React.useState([]);
    React.useEffect(() => {
        var _a;
        if (paymentData) {
            const creditCards = (_a = paymentData === null || paymentData === void 0 ? void 0 : paymentData.getPaymentMethodList) === null || _a === void 0 ? void 0 : _a.filter((item) => item.type === 'CreditCard');
            const filteredCreditCards = creditCards.filter((item, index, array) => index ===
                array.findIndex(foundItem => foundItem.last4Digit === item.last4Digit &&
                    foundItem.network === item.network));
            setCreditCardList(filteredCreditCards);
        }
    }, [paymentData]);
    const { values: wireTransferFormValues, handleChange: onChangeWireTransferField, setFieldValue: onSetWireTransferField, errors: wireTransferFormErrors, isValid: isValidWireTransfer, } = formik_esm.useFormik({
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
    const { values: creditCardFormValues, handleChange: onChangeCreditCardField, setFieldValue: onSetCreditCardField, errors: creditCardFormErrors, isValid: isValidCreditCardValues, setFieldError, } = formik_esm.useFormik({
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
    const onSubmitCreditCard = React.useCallback(() => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        var _4, _5;
        if (isValidCreditCardValues) {
            const selectedCard = creditCardList.find((item) => item.id === (creditCardFormValues === null || creditCardFormValues === void 0 ? void 0 : creditCardFormValues.cardId));
            const paymentInfoData = Object.assign(Object.assign({}, paymentInfo), { paymentType, creditCardData: Object.assign(Object.assign({}, creditCardFormValues), { cardData: selectedCard }) });
            try {
                if (creditCardFormValues === null || creditCardFormValues === void 0 ? void 0 : creditCardFormValues.isNew) {
                    const variables = Delivery_service.formCardScreeningVariable(orgId !== null && orgId !== void 0 ? orgId : '', paymentInfoData, billingInfo, taxes, meData);
                    const cardScreeningData = yield cardScreening({
                        variables,
                    });
                    if (((_5 = (_4 = cardScreeningData.data) === null || _4 === void 0 ? void 0 : _4.cardScreening) === null || _5 === void 0 ? void 0 : _5.level) !== 'high') {
                        setPaymentInfo(paymentInfoData);
                        setContainerState(ContainerStateProvider.ContainerTypes.DELIVERY);
                    }
                    else {
                        setFieldError('cardNumber', 'Please enter a valid card number.');
                    }
                }
                else {
                    setPaymentInfo(paymentInfoData);
                    setContainerState(ContainerStateProvider.ContainerTypes.DELIVERY);
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
    const onSubmitWireTransfer = React.useCallback(() => {
        setPaymentInfo(Object.assign(Object.assign({}, paymentInfo), { paymentType, wireData: {
                accountNumber: wireTransferFormValues.accountNumber.split(' ').join(''),
                routingNumber: wireTransferFormValues.aba.split(' ').join(''),
                bankAddress: {
                    bankName: wireTransferFormValues.bankName,
                    country: wireTransferFormValues.bankCountry,
                },
            } }));
        setContainerState(ContainerStateProvider.ContainerTypes.DELIVERY);
    }, [
        wireTransferFormValues,
        paymentInfo,
        setPaymentInfo,
        paymentType,
        setContainerState,
    ]);
    const onClickDelivery = React.useCallback(() => {
        if (paymentType === index.PaymentTypes.CREDIT_CARD && !(billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.phoneNumber))
            return;
        if (paymentType === index.PaymentTypes.WIRE_TRANSFER && isValidWireTransfer) {
            onSubmitWireTransfer();
        }
        if (paymentType === index.PaymentTypes.CREDIT_CARD) {
            onSubmitCreditCard();
        }
    }, [paymentType, onSubmitCreditCard, onSubmitWireTransfer, billingInfo, isValidWireTransfer]);
    const buttonDisabled = React.useMemo(() => {
        if (paymentType === index.PaymentTypes.CREDIT_CARD) {
            return !isValidCreditCardValues;
        }
        if (paymentType === index.PaymentTypes.WIRE_TRANSFER) {
            return !isValidWireTransfer;
        }
        return true;
    }, [isValidCreditCardValues, isValidWireTransfer, paymentType]);
    return (React__default["default"].createElement(PaymentContainer$1["default"], { paymentType: paymentType, onChoosePaymentType: onChoosePaymentType, wireTransferFormValues: wireTransferFormValues, onChangeWireTransferField: onChangeWireTransferField, onSetWireTransferField: onSetWireTransferField, wireTransferFormErrors: wireTransferFormErrors, creditCardFormValues: creditCardFormValues, onChangeCreditCardField: onChangeCreditCardField, onSetCreditCardField: onSetCreditCardField, creditCardFormErrors: creditCardFormErrors, creditCardList: creditCardList, onClickDelivery: onClickDelivery, config: billing$1 === null || billing$1 === void 0 ? void 0 : billing$1.paymentMethods, billingInfo: billingInfo, buttonDisabled: buttonDisabled }));
};

exports.PaymentContainer = PaymentContainer;
//# sourceMappingURL=index.js.map
