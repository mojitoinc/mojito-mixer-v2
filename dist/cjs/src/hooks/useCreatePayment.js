'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
require('../../node_modules/@apollo/client/core/index.js');
require('../../node_modules/@apollo/client/utilities/globals/index.js');
var React = require('react');
require('../../node_modules/@apollo/client/utilities/graphql/storeUtils.js');
require('../../node_modules/@apollo/client/utilities/graphql/transform.js');
require('../../node_modules/@apollo/client/utilities/common/mergeDeep.js');
require('../../node_modules/@apollo/client/utilities/observables/Observable.js');
require('../../node_modules/@apollo/client/utilities/observables/Concast.js');
require('../../node_modules/@apollo/client/utilities/common/canUse.js');
var useLazyQuery = require('../../node_modules/@apollo/client/react/hooks/useLazyQuery.js');
var useMutation = require('../../node_modules/@apollo/client/react/hooks/useMutation.js');
require('../../node_modules/@apollo/client/react/hooks/useQuery.js');
require('../../node_modules/@apollo/client/react/parser/index.js');
var Delivery_service = require('../views/Delivery/Delivery.service.js');
var useEncryptCard = require('./useEncryptCard.js');
var invoiceDetails = require('../queries/invoiceDetails.js');
var Payment = require('../queries/Payment.js');
var DebugProvider = require('../providers/DebugProvider.js');
require('../providers/ErrorProvider.js');
require('../providers/BillingProvider.js');
require('../providers/ContainerStateProvider.js');
require('../providers/UIConfigurationProvider.js');
require('../providers/CheckoutProvider.js');
require('../providers/PaymentProvider.js');
require('../providers/EventProvider.js');
require('../providers/SecurityOptionsProvider.js');
require('../providers/UserInfoProvider.js');
var useAPIService = require('./useAPIService.js');

const Countries = {
    US: 'US',
    INTERNATIONAL: 'International',
};
const useCreatePayment = (paymentInfo, orgId) => {
    const debug = DebugProvider.useDebug('useCreatePayment');
    const { getPaymentNotification } = useAPIService.useAPIService();
    const [createPaymentMethod] = useMutation.useMutation(Payment.createPaymentMethodQuery);
    const [createPayment] = useMutation.useMutation(Payment.createPaymentQuery);
    const [encryptCardData] = useEncryptCard.useEncryptCardData({ orgID: orgId !== null && orgId !== void 0 ? orgId : '' });
    const [paymentMethodStatus] = useLazyQuery.useLazyQuery(Payment.getPaymentMethodStatus);
    const [reserveNow] = useMutation.useMutation(invoiceDetails.reserveNowBuyLotQuery);
    const getInvoiceData = React.useCallback((invoiceId, lotId, quantity) => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        if (invoiceId) {
            return {
                invoiceID: invoiceId,
                items: [],
                status: '',
                __typename: 'BuyNowReserve',
            };
        }
        const reserveData = yield reserveNow({
            variables: {
                input: {
                    marketplaceBuyNowLotID: lotId,
                    itemCount: quantity,
                },
            },
        });
        return (_b = (_a = reserveData === null || reserveData === void 0 ? void 0 : reserveData.data) === null || _a === void 0 ? void 0 : _a.reserveMarketplaceBuyNowLot) === null || _b === void 0 ? void 0 : _b.invoice;
    }), [reserveNow]);
    const makeCreditCardPurchase = React.useCallback((options) => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        debug.info('onConfirm-start', { paymentInfo, options });
        const newCreditCard = (_d = (_c = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _c === void 0 ? void 0 : _c.isNew) !== null && _d !== void 0 ? _d : false;
        const creditCardPayload = newCreditCard ? {
            number: (_f = (_e = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _e === void 0 ? void 0 : _e.cardNumber) === null || _f === void 0 ? void 0 : _f.replace(/\s/g, ''),
            cvv: (_h = (_g = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _g === void 0 ? void 0 : _g.cvv) !== null && _h !== void 0 ? _h : '',
        }
            : { cvv: (_k = (_j = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _j === void 0 ? void 0 : _j.cvv) !== null && _k !== void 0 ? _k : '' };
        debug.info('onConfirm-encryptCardData', { newCreditCard, creditCardPayload });
        const { keyID, encryptedCardData } = yield encryptCardData(creditCardPayload);
        debug.info('onConfirm-encrypt', encryptedCardData);
        let paymentMethodId = ((_l = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _l === void 0 ? void 0 : _l.isNew)
            ? undefined
            : (_m = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _m === void 0 ? void 0 : _m.cardId;
        debug.info('onConfirm-paymentMethodId', paymentInfo);
        if ((_o = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.creditCardData) === null || _o === void 0 ? void 0 : _o.isNew) {
            const inputData = Delivery_service.formCreatePaymentMethodObject(orgId !== null && orgId !== void 0 ? orgId : '', paymentInfo, options.billingInfo, keyID, encryptedCardData);
            const createPaymentMethodResult = yield createPaymentMethod({
                variables: {
                    orgID: orgId,
                    input: inputData,
                },
            });
            paymentMethodId =
                (_q = (_p = createPaymentMethodResult === null || createPaymentMethodResult === void 0 ? void 0 : createPaymentMethodResult.data) === null || _p === void 0 ? void 0 : _p.createPaymentMethod) === null || _q === void 0 ? void 0 : _q.id;
            debug.info('onConfirm-createPaymentMethod', createPaymentMethodResult);
            if (((_s = (_r = createPaymentMethodResult === null || createPaymentMethodResult === void 0 ? void 0 : createPaymentMethodResult.data) === null || _r === void 0 ? void 0 : _r.createPaymentMethod) === null || _s === void 0 ? void 0 : _s.status) !==
                'complete') {
                yield paymentMethodStatus({
                    variables: {
                        paymentMethodID: paymentMethodId,
                    },
                });
            }
        }
        debug.info('onConfirm-paymentMethodId', paymentMethodId);
        const reserveLotData = yield getInvoiceData(options.invoiceId, options.lotId, options.quantity);
        debug.info('onConfirm-reserveLotData', reserveLotData);
        if (paymentMethodId) {
            debug.info('ready-paymentMethodId', {
                paymentMethodID: paymentMethodId,
                invoiceID: reserveLotData === null || reserveLotData === void 0 ? void 0 : reserveLotData.invoiceID,
                metadata: {
                    destinationAddress: options.deliveryAddress,
                    creditCardData: {
                        keyID,
                        encryptedData: encryptedCardData,
                    },
                },
            });
            const paymentResponse = yield createPayment({
                variables: {
                    paymentMethodID: paymentMethodId,
                    invoiceID: reserveLotData === null || reserveLotData === void 0 ? void 0 : reserveLotData.invoiceID,
                    metadata: {
                        destinationAddress: options.deliveryAddress,
                        creditCardData: {
                            keyID,
                            encryptedData: encryptedCardData,
                        },
                    },
                },
            });
            const paymentResult = (_t = paymentResponse === null || paymentResponse === void 0 ? void 0 : paymentResponse.data) === null || _t === void 0 ? void 0 : _t.createPayment;
            debug.info('ready-createPayment');
            const notificationData = yield getPaymentNotification();
            const paymentData = Object.assign(Object.assign({}, paymentInfo), { paymentId: paymentMethodId, destinationAddress: options.deliveryAddress });
            debug.success('paymentData', { paymentData, notificationData });
            return { paymentData, reserveLotData, notificationData: notificationData === null || notificationData === void 0 ? void 0 : notificationData.data, paymentResult };
        }
        throw new Error('unable to create paymentMethod');
    }), [
        debug,
        orgId,
        paymentInfo,
        createPayment,
        createPaymentMethod,
        encryptCardData,
        paymentMethodStatus,
        getPaymentNotification,
        getInvoiceData,
    ]);
    const makeWireTransferPurchase = React.useCallback((options) => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        var _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19;
        const inputData = {};
        const copiedBillingDetails = Object.assign(Object.assign({}, options.billingInfo), { district: (_u = options.billingInfo) === null || _u === void 0 ? void 0 : _u.state, address1: (_v = options.billingInfo) === null || _v === void 0 ? void 0 : _v.street1 });
        delete copiedBillingDetails.state;
        delete copiedBillingDetails.street1;
        delete copiedBillingDetails.email;
        delete copiedBillingDetails.phoneNumber;
        delete copiedBillingDetails.firstName;
        delete copiedBillingDetails.lastName;
        inputData.paymentType = 'Wire';
        const wireData = {
            bankAddress: {
                bankName: (_x = (_w = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _w === void 0 ? void 0 : _w.bankAddress) === null || _x === void 0 ? void 0 : _x.bankName,
                country: (_z = (_y = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _y === void 0 ? void 0 : _y.bankAddress) === null || _z === void 0 ? void 0 : _z.country,
                city: (_1 = (_0 = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _0 === void 0 ? void 0 : _0.bankAddress) === null || _1 === void 0 ? void 0 : _1.city,
            },
        };
        if (((_2 = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _2 === void 0 ? void 0 : _2.country) === Countries.US) {
            wireData.accountNumber = (_3 = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _3 === void 0 ? void 0 : _3.accountNumber;
            wireData.routingNumber = (_4 = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _4 === void 0 ? void 0 : _4.routingNumber;
            inputData.wireData = Object.assign(Object.assign({}, wireData), { billingDetails: copiedBillingDetails });
        }
        else {
            wireData.iban = ((_7 = (_6 = (_5 = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _5 === void 0 ? void 0 : _5.bankAddress) === null || _6 === void 0 ? void 0 : _6.country) !== null && _7 !== void 0 ? _7 : '') + ((_9 = (_8 = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData) === null || _8 === void 0 ? void 0 : _8.iban) !== null && _9 !== void 0 ? _9 : '');
            inputData.wireData = Object.assign(Object.assign({}, wireData), { billingDetails: copiedBillingDetails });
        }
        const result = yield createPaymentMethod({
            variables: {
                orgID: orgId,
                input: inputData,
            },
        });
        if ((_11 = (_10 = result === null || result === void 0 ? void 0 : result.data) === null || _10 === void 0 ? void 0 : _10.createPaymentMethod) === null || _11 === void 0 ? void 0 : _11.id) {
            if (((_13 = (_12 = result === null || result === void 0 ? void 0 : result.data) === null || _12 === void 0 ? void 0 : _12.createPaymentMethod) === null || _13 === void 0 ? void 0 : _13.status) !== 'complete') {
                yield paymentMethodStatus({
                    variables: {
                        paymentMethodID: (_15 = (_14 = result === null || result === void 0 ? void 0 : result.data) === null || _14 === void 0 ? void 0 : _14.createPaymentMethod) === null || _15 === void 0 ? void 0 : _15.id,
                    },
                });
            }
            const reserveLotData = yield getInvoiceData(options.invoiceId, options.lotId, options.quantity);
            const paymentResponse = yield createPayment({
                variables: {
                    paymentMethodID: (_17 = (_16 = result === null || result === void 0 ? void 0 : result.data) === null || _16 === void 0 ? void 0 : _16.createPaymentMethod) === null || _17 === void 0 ? void 0 : _17.id,
                    invoiceID: reserveLotData === null || reserveLotData === void 0 ? void 0 : reserveLotData.invoiceID,
                    metadata: {
                        destinationAddress: options.deliveryAddress,
                    },
                },
            });
            const paymentResult = (_18 = paymentResponse === null || paymentResponse === void 0 ? void 0 : paymentResponse.data) === null || _18 === void 0 ? void 0 : _18.createPayment;
            const paymentData = Object.assign(Object.assign({}, paymentInfo), { deliveryStatus: paymentResult === null || paymentResult === void 0 ? void 0 : paymentResult.status, paymentId: (_19 = paymentResult === null || paymentResult === void 0 ? void 0 : paymentResult.id) !== null && _19 !== void 0 ? _19 : '', destinationAddress: options.deliveryAddress });
            return { paymentData, reserveLotData, paymentResult };
        }
        throw new Error('unable to create paymentMethod');
    }), [
        paymentInfo,
        orgId,
        paymentMethodStatus,
        createPaymentMethod,
        createPayment,
        getInvoiceData,
    ]);
    const values = React.useMemo(() => {
        return {
            makeCreditCardPurchase,
            makeWireTransferPurchase,
        };
    }, [makeCreditCardPurchase, makeWireTransferPurchase]);
    return values;
};

exports.Countries = Countries;
exports.useCreatePayment = useCreatePayment;
//# sourceMappingURL=useCreatePayment.js.map
