import { __awaiter } from '../../node_modules/tslib/tslib.es6.js';
import '../../node_modules/@apollo/client/core/index.js';
import '../../node_modules/@apollo/client/utilities/globals/index.js';
import { useCallback, useMemo } from 'react';
import '../../node_modules/@apollo/client/utilities/graphql/storeUtils.js';
import '../../node_modules/@apollo/client/utilities/graphql/transform.js';
import '../../node_modules/@apollo/client/utilities/common/mergeDeep.js';
import '../../node_modules/@apollo/client/utilities/observables/Observable.js';
import '../../node_modules/@apollo/client/utilities/observables/Concast.js';
import '../../node_modules/@apollo/client/utilities/common/canUse.js';
import { useLazyQuery } from '../../node_modules/@apollo/client/react/hooks/useLazyQuery.js';
import { useMutation } from '../../node_modules/@apollo/client/react/hooks/useMutation.js';
import '../../node_modules/@apollo/client/react/hooks/useQuery.js';
import '../../node_modules/@apollo/client/react/parser/index.js';
import { formCreatePaymentMethodObject } from '../views/Delivery/Delivery.service.js';
import { useEncryptCardData } from './useEncryptCard.js';
import { reserveNowBuyLotQuery, invoiceDetailsQuery } from '../queries/invoiceDetails.js';
import { createPaymentMethodQuery, createPaymentQuery, getPaymentMethodStatus, completeOnChainPaymentQuery } from '../queries/Payment.js';
import { useDebug } from '../providers/DebugProvider.js';
import '../providers/ErrorProvider.js';
import '../providers/BillingProvider.js';
import '../providers/ContainerStateProvider.js';
import '../providers/UIConfigurationProvider.js';
import { useCheckout } from '../providers/CheckoutProvider.js';
import '../providers/PaymentProvider.js';
import '../providers/EventProvider.js';
import '../providers/SecurityOptionsProvider.js';
import '../providers/UserInfoProvider.js';
import { useAPIService } from './useAPIService.js';

const Countries = {
    US: 'US',
    INTERNATIONAL: 'International',
};
const useCreatePayment = (paymentInfo, orgId) => {
    const debug = useDebug('useCreatePayment');
    const { getPaymentNotification } = useAPIService();
    const [createPaymentMethod] = useMutation(createPaymentMethodQuery);
    const [createPayment] = useMutation(createPaymentQuery);
    const [encryptCardData] = useEncryptCardData({ orgID: orgId !== null && orgId !== void 0 ? orgId : '' });
    const [paymentMethodStatus] = useLazyQuery(getPaymentMethodStatus);
    const [reserveNow] = useMutation(reserveNowBuyLotQuery);
    const { successURL, errorURL } = useCheckout();
    const [getInvoiceDetails] = useLazyQuery(invoiceDetailsQuery);
    const [onCompleteChain] = useMutation(completeOnChainPaymentQuery);
    const getInvoiceData = useCallback((invoiceId, lotId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
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
    const makeCreditCardPurchase = useCallback((options) => __awaiter(void 0, void 0, void 0, function* () {
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
            const inputData = formCreatePaymentMethodObject(orgId !== null && orgId !== void 0 ? orgId : '', paymentInfo, options.billingInfo, keyID, encryptedCardData);
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
    const makeWireTransferPurchase = useCallback((options) => __awaiter(void 0, void 0, void 0, function* () {
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
    const makeCoinbasePurchase = useCallback((options) => __awaiter(void 0, void 0, void 0, function* () {
        var _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35;
        const inputData = {
            paymentType: 'Crypto',
        };
        const result = yield createPaymentMethod({
            variables: {
                orgID: orgId,
                input: inputData,
            },
        });
        if ((_21 = (_20 = result === null || result === void 0 ? void 0 : result.data) === null || _20 === void 0 ? void 0 : _20.createPaymentMethod) === null || _21 === void 0 ? void 0 : _21.id) {
            if (((_23 = (_22 = result === null || result === void 0 ? void 0 : result.data) === null || _22 === void 0 ? void 0 : _22.createPaymentMethod) === null || _23 === void 0 ? void 0 : _23.status) !== 'complete') {
                yield paymentMethodStatus({
                    variables: {
                        paymentMethodID: (_25 = (_24 = result === null || result === void 0 ? void 0 : result.data) === null || _24 === void 0 ? void 0 : _24.createPaymentMethod) === null || _25 === void 0 ? void 0 : _25.id,
                    },
                });
            }
            const reserveLotData = yield getInvoiceData(options.invoiceId, options.lotId, options.quantity);
            const paymentResponse = yield createPayment({
                variables: {
                    paymentMethodID: (_27 = (_26 = result === null || result === void 0 ? void 0 : result.data) === null || _26 === void 0 ? void 0 : _26.createPaymentMethod) === null || _27 === void 0 ? void 0 : _27.id,
                    invoiceID: reserveLotData === null || reserveLotData === void 0 ? void 0 : reserveLotData.invoiceID,
                    metadata: {
                        destinationAddress: options.deliveryAddress,
                        cryptoData: {
                            name: (_28 = options.billingInfo) === null || _28 === void 0 ? void 0 : _28.name,
                            description: '',
                            billingDetails: {
                                city: (_29 = options.billingInfo) === null || _29 === void 0 ? void 0 : _29.city,
                                country: (_30 = options.billingInfo) === null || _30 === void 0 ? void 0 : _30.country,
                                address1: (_31 = options.billingInfo) === null || _31 === void 0 ? void 0 : _31.street1,
                                address2: '',
                                district: (_32 = options.billingInfo) === null || _32 === void 0 ? void 0 : _32.state,
                                postalCode: (_33 = options.billingInfo) === null || _33 === void 0 ? void 0 : _33.postalCode,
                            },
                            redirectURL: successURL,
                            cancelURL: errorURL,
                        },
                    },
                },
            });
            const paymentResult = (_34 = paymentResponse === null || paymentResponse === void 0 ? void 0 : paymentResponse.data) === null || _34 === void 0 ? void 0 : _34.createPayment;
            const paymentData = Object.assign(Object.assign({}, paymentInfo), { deliveryStatus: paymentResult === null || paymentResult === void 0 ? void 0 : paymentResult.status, paymentId: (_35 = paymentResult === null || paymentResult === void 0 ? void 0 : paymentResult.id) !== null && _35 !== void 0 ? _35 : '', destinationAddress: options.deliveryAddress });
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
        successURL,
        errorURL,
    ]);
    const makeOnChainPurchase = useCallback((options) => __awaiter(void 0, void 0, void 0, function* () {
        var _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53;
        const inputData = {
            paymentType: 'OnchainPayment',
        };
        const reserveLotData = yield getInvoiceData(options.invoiceId, options.lotId, options.quantity);
        const invoiceDetailsResult = yield getInvoiceDetails({
            variables: {
                invoiceID: reserveLotData.invoiceID,
            },
        });
        const invoiceDetails = (_36 = invoiceDetailsResult.data) === null || _36 === void 0 ? void 0 : _36.getInvoiceDetails;
        if (((_37 = invoiceDetails.items) === null || _37 === void 0 ? void 0 : _37.length) === 0 || !invoiceDetails.items[0].isOnchainPaymentAvailable) {
            throw new Error('On Chain payment is not available for this item');
        }
        const result = yield createPaymentMethod({
            variables: {
                orgID: orgId,
                input: inputData,
            },
        });
        if ((_39 = (_38 = result === null || result === void 0 ? void 0 : result.data) === null || _38 === void 0 ? void 0 : _38.createPaymentMethod) === null || _39 === void 0 ? void 0 : _39.id) {
            if (((_41 = (_40 = result === null || result === void 0 ? void 0 : result.data) === null || _40 === void 0 ? void 0 : _40.createPaymentMethod) === null || _41 === void 0 ? void 0 : _41.status) !== 'complete') {
                yield paymentMethodStatus({
                    variables: {
                        paymentMethodID: (_43 = (_42 = result === null || result === void 0 ? void 0 : result.data) === null || _42 === void 0 ? void 0 : _42.createPaymentMethod) === null || _43 === void 0 ? void 0 : _43.id,
                    },
                });
            }
            const paymentResponse = yield createPayment({
                variables: {
                    paymentMethodID: (_45 = (_44 = result === null || result === void 0 ? void 0 : result.data) === null || _44 === void 0 ? void 0 : _44.createPaymentMethod) === null || _45 === void 0 ? void 0 : _45.id,
                    invoiceID: reserveLotData === null || reserveLotData === void 0 ? void 0 : reserveLotData.invoiceID,
                    metadata: {
                        destinationAddress: options.deliveryAddress,
                        onChainPaymentData: {
                            name: (_46 = options.billingInfo) === null || _46 === void 0 ? void 0 : _46.name,
                            description: '',
                            billingDetails: {
                                city: (_47 = options.billingInfo) === null || _47 === void 0 ? void 0 : _47.city,
                                country: (_48 = options.billingInfo) === null || _48 === void 0 ? void 0 : _48.country,
                                address1: (_49 = options.billingInfo) === null || _49 === void 0 ? void 0 : _49.street1,
                                address2: '',
                                district: (_50 = options.billingInfo) === null || _50 === void 0 ? void 0 : _50.state,
                                postalCode: (_51 = options.billingInfo) === null || _51 === void 0 ? void 0 : _51.postalCode,
                            },
                        },
                    },
                },
            });
            const paymentResult = (_52 = paymentResponse === null || paymentResponse === void 0 ? void 0 : paymentResponse.data) === null || _52 === void 0 ? void 0 : _52.createPayment;
            const paymentData = Object.assign(Object.assign({}, paymentInfo), { deliveryStatus: paymentResult === null || paymentResult === void 0 ? void 0 : paymentResult.status, paymentId: (_53 = paymentResult === null || paymentResult === void 0 ? void 0 : paymentResult.id) !== null && _53 !== void 0 ? _53 : '', destinationAddress: options.deliveryAddress });
            return { paymentData, reserveLotData, paymentResult, invoiceDetails };
        }
        throw new Error('unable to create paymentMethod');
    }), [
        paymentInfo,
        orgId,
        paymentMethodStatus,
        createPaymentMethod,
        createPayment,
        getInvoiceData,
        getInvoiceDetails,
    ]);
    const completeOnChainPayment = useCallback((options, receipt, txHash = '') => __awaiter(void 0, void 0, void 0, function* () {
        var _54, _55, _56, _57, _58, _59, _60, _61;
        yield onCompleteChain({
            variables: {
                invoiceId: receipt.reserveLotData.invoiceID,
                networkId: (_56 = (_55 = (_54 = receipt.invoiceDetails) === null || _54 === void 0 ? void 0 : _54.items[0]) === null || _55 === void 0 ? void 0 : _55.onChainPaymentInfo) === null || _56 === void 0 ? void 0 : _56.networkID,
                txHash,
                billingDetails: {
                    city: (_57 = options.billingInfo) === null || _57 === void 0 ? void 0 : _57.city,
                    country: (_58 = options.billingInfo) === null || _58 === void 0 ? void 0 : _58.country,
                    address1: (_59 = options.billingInfo) === null || _59 === void 0 ? void 0 : _59.street1,
                    address2: '',
                    district: (_60 = options.billingInfo) === null || _60 === void 0 ? void 0 : _60.state,
                    postalCode: (_61 = options.billingInfo) === null || _61 === void 0 ? void 0 : _61.postalCode,
                },
            },
        });
    }), [
        onCompleteChain,
    ]);
    const values = useMemo(() => {
        return {
            makeCreditCardPurchase,
            makeWireTransferPurchase,
            makeCoinbasePurchase,
            makeOnChainPurchase,
            completeOnChainPayment,
        };
    }, [makeCreditCardPurchase, makeWireTransferPurchase, makeCoinbasePurchase, makeOnChainPurchase, completeOnChainPayment]);
    return values;
};

export { Countries, useCreatePayment };
//# sourceMappingURL=useCreatePayment.js.map
