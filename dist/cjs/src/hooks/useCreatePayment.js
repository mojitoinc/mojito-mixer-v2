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
var useEncryptCard = require('./useEncryptCard.js');
var invoiceDetails = require('../queries/invoiceDetails.js');
var Payment = require('../queries/Payment.js');
var Delivery_service = require('../views/Delivery/Delivery.service.js');
var DebugProvider = require('../providers/DebugProvider.js');
require('../providers/ErrorProvider.js');
require('../providers/BillingProvider.js');
require('../providers/ContainerStateProvider.js');
require('../providers/ConfigurationProvider.js');
require('../providers/DeliveryProvider.js');
require('../providers/PaymentProvider.js');
var useAPIService = require('./useAPIService.js');

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
        var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
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
            yield createPayment({
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
            debug.info('ready-createPayment');
            const notificationData = yield getPaymentNotification();
            const paymentData = Object.assign(Object.assign({}, paymentInfo), { paymentId: paymentMethodId, destinationAddress: options.deliveryAddress });
            debug.success('paymentData', { paymentData, notificationData });
            return { paymentData, reserveLotData, notificationData: notificationData === null || notificationData === void 0 ? void 0 : notificationData.data };
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
        var _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
        const inputData = {};
        const copiedBillingDetails = Object.assign(Object.assign({}, options.billingInfo), { district: (_t = options.billingInfo) === null || _t === void 0 ? void 0 : _t.state, address1: (_u = options.billingInfo) === null || _u === void 0 ? void 0 : _u.street1 });
        delete copiedBillingDetails.state;
        delete copiedBillingDetails.street1;
        delete copiedBillingDetails.email;
        delete copiedBillingDetails.phoneNumber;
        inputData.paymentType = 'Wire';
        inputData.wireData = Object.assign(Object.assign({}, paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.wireData), { billingDetails: copiedBillingDetails });
        const result = yield createPaymentMethod({
            variables: {
                orgID: orgId,
                input: inputData,
            },
        });
        if ((_w = (_v = result === null || result === void 0 ? void 0 : result.data) === null || _v === void 0 ? void 0 : _v.createPaymentMethod) === null || _w === void 0 ? void 0 : _w.id) {
            if (((_y = (_x = result === null || result === void 0 ? void 0 : result.data) === null || _x === void 0 ? void 0 : _x.createPaymentMethod) === null || _y === void 0 ? void 0 : _y.status) !== 'complete') {
                yield paymentMethodStatus({
                    variables: {
                        paymentMethodID: (_0 = (_z = result === null || result === void 0 ? void 0 : result.data) === null || _z === void 0 ? void 0 : _z.createPaymentMethod) === null || _0 === void 0 ? void 0 : _0.id,
                    },
                });
            }
            const reserveLotData = yield getInvoiceData(options.invoiceId, options.lotId, options.quantity);
            const result1 = yield createPayment({
                variables: {
                    paymentMethodID: (_2 = (_1 = result === null || result === void 0 ? void 0 : result.data) === null || _1 === void 0 ? void 0 : _1.createPaymentMethod) === null || _2 === void 0 ? void 0 : _2.id,
                    invoiceID: reserveLotData === null || reserveLotData === void 0 ? void 0 : reserveLotData.invoiceID,
                    metadata: {
                        destinationAddress: options.deliveryAddress,
                    },
                },
            });
            const paymentData = Object.assign(Object.assign({}, paymentInfo), { deliveryStatus: (_4 = (_3 = result1 === null || result1 === void 0 ? void 0 : result1.data) === null || _3 === void 0 ? void 0 : _3.createPayment) === null || _4 === void 0 ? void 0 : _4.status, paymentId: (_7 = (_6 = (_5 = result === null || result === void 0 ? void 0 : result.data) === null || _5 === void 0 ? void 0 : _5.createPaymentMethod) === null || _6 === void 0 ? void 0 : _6.id) !== null && _7 !== void 0 ? _7 : '', destinationAddress: options.deliveryAddress });
            return { paymentData, reserveLotData };
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

exports.useCreatePayment = useCreatePayment;
//# sourceMappingURL=useCreatePayment.js.map
