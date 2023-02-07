import { __awaiter } from '../../node_modules/tslib/tslib.es6.js';
import '../../node_modules/@apollo/client/core/index.js';
import '../../node_modules/@apollo/client/utilities/globals/index.js';
import React__default, { createContext, useState, useCallback, useMemo, useContext } from 'react';
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
import { CookieService } from '../service/CookieService.js';
import { useEncryptCardData } from '../hooks/useEncryptCard.js';
import '../../node_modules/country-state-city/lib/country.js';
import '../../node_modules/country-state-city/lib/state.js';
import '../../node_modules/country-state-city/lib/city.js';
import '../config/RuntimeConfiguration.js';
import '../config/paymentConfiguration.js';
import 'uuidv4';
import { getPaymentNotificationQuery } from '../queries/creditCard.js';
import { reserveNowBuyLotQuery } from '../queries/invoiceDetails.js';
import { createPaymentMethodQuery, createPaymentQuery, getPaymentMethodStatus } from '../queries/Payment.js';
import { formCreatePaymentMethodObject } from '../views/Delivery/Delivery.service.js';
import { useDebug } from './DebugProvider.js';
import { useError } from './ErrorProvider.js';
import { useBilling } from './BillingProvider.js';
import { useContainer, ContainerTypes } from './ContainerStateProvider.js';
import './ConfigurationProvider.js';
import { useDelivery } from './DeliveryProvider.js';

const PaymentContext = createContext({});
const PaymentProvider = ({ children }) => {
    const debug = useDebug('PaymentProvider');
    const { setError } = useError();
    const [paymentInfo, setPaymentInfo] = useState();
    const { billingInfo, collectionData, taxes } = useBilling();
    const { orgId, lotId, quantity, invoiceId } = useDelivery();
    const { setContainerState } = useContainer();
    const [createPaymentMethod] = useMutation(createPaymentMethodQuery);
    const [createPayment] = useMutation(createPaymentQuery);
    const [encryptCardData] = useEncryptCardData({ orgID: orgId !== null && orgId !== void 0 ? orgId : '' });
    const [paymentMethodStatus] = useLazyQuery(getPaymentMethodStatus);
    const [paymentNotification] = useLazyQuery(getPaymentNotificationQuery);
    const [reserveNow] = useMutation(reserveNowBuyLotQuery);
    const getInvoiceData = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
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
    }), [invoiceId, reserveNow, lotId, quantity]);
    const saveToCookies = useCallback((paymentData, reserveLotData) => {
        CookieService.billing.setValue(JSON.stringify(billingInfo));
        CookieService.paymentInfo.setValue(JSON.stringify(paymentData));
        CookieService.taxes.setValue(JSON.stringify(taxes));
        CookieService.collectionData.setValue(JSON.stringify(collectionData));
        CookieService.reserveLotData.setValue(JSON.stringify(reserveLotData));
    }, [billingInfo, collectionData, taxes]);
    const onConfirmCreditCardPurchase = useCallback((deliveryAddress = '') => __awaiter(void 0, void 0, void 0, function* () {
        var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        setContainerState(ContainerTypes.LOADING);
        try {
            debug.info('onConfirm-start', { deliveryAddress, paymentInfo });
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
                const inputData = formCreatePaymentMethodObject(orgId !== null && orgId !== void 0 ? orgId : '', paymentInfo, billingInfo, keyID, encryptedCardData);
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
            const reserveLotData = yield getInvoiceData();
            debug.info('onConfirm-reserveLotData', reserveLotData);
            if (paymentMethodId) {
                debug.info('ready-paymentMethodId', {
                    paymentMethodID: paymentMethodId,
                    invoiceID: reserveLotData === null || reserveLotData === void 0 ? void 0 : reserveLotData.invoiceID,
                    metadata: {
                        destinationAddress: deliveryAddress,
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
                            destinationAddress: deliveryAddress,
                            creditCardData: {
                                keyID,
                                encryptedData: encryptedCardData,
                            },
                        },
                    },
                });
                debug.info('ready-createPayment');
                const notificationData = yield paymentNotification();
                const paymentData = Object.assign(Object.assign({}, paymentInfo), { paymentId: paymentMethodId, destinationAddress: deliveryAddress });
                debug.success('paymentData', { paymentData, notificationData });
                saveToCookies(paymentData, reserveLotData);
                window.location.href =
                    (_v = (_u = (_t = notificationData === null || notificationData === void 0 ? void 0 : notificationData.data) === null || _t === void 0 ? void 0 : _t.getPaymentNotification) === null || _u === void 0 ? void 0 : _u.message) === null || _v === void 0 ? void 0 : _v.redirectURL;
            }
        }
        catch (e) {
            const message = (_w = e.message) !== null && _w !== void 0 ? _w : '';
            debug.error('confirm', { message });
            setError(message);
        }
    }), [
        debug,
        orgId,
        paymentInfo,
        billingInfo,
        setError,
        paymentNotification,
        createPayment,
        createPaymentMethod,
        encryptCardData,
        paymentMethodStatus,
        getInvoiceData,
        saveToCookies,
        setContainerState,
    ]);
    const onConfirmWireTransferPurchase = useCallback((deliveryAddress = '') => __awaiter(void 0, void 0, void 0, function* () {
        var _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10;
        setContainerState(ContainerTypes.LOADING);
        try {
            const inputData = {};
            const copiedBillingDetails = Object.assign(Object.assign({}, billingInfo), { district: billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.state, address1: billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.street1 });
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
            if ((_y = (_x = result === null || result === void 0 ? void 0 : result.data) === null || _x === void 0 ? void 0 : _x.createPaymentMethod) === null || _y === void 0 ? void 0 : _y.id) {
                if (((_0 = (_z = result === null || result === void 0 ? void 0 : result.data) === null || _z === void 0 ? void 0 : _z.createPaymentMethod) === null || _0 === void 0 ? void 0 : _0.status) !== 'complete') {
                    yield paymentMethodStatus({
                        variables: {
                            paymentMethodID: (_2 = (_1 = result === null || result === void 0 ? void 0 : result.data) === null || _1 === void 0 ? void 0 : _1.createPaymentMethod) === null || _2 === void 0 ? void 0 : _2.id,
                        },
                    });
                }
                const reserveLotData = yield getInvoiceData();
                const result1 = yield createPayment({
                    variables: {
                        paymentMethodID: (_4 = (_3 = result === null || result === void 0 ? void 0 : result.data) === null || _3 === void 0 ? void 0 : _3.createPaymentMethod) === null || _4 === void 0 ? void 0 : _4.id,
                        invoiceID: reserveLotData === null || reserveLotData === void 0 ? void 0 : reserveLotData.invoiceID,
                        metadata: {
                            destinationAddress: deliveryAddress,
                        },
                    },
                });
                const paymentData = Object.assign(Object.assign({}, paymentInfo), { deliveryStatus: (_6 = (_5 = result1 === null || result1 === void 0 ? void 0 : result1.data) === null || _5 === void 0 ? void 0 : _5.createPayment) === null || _6 === void 0 ? void 0 : _6.status, paymentId: (_9 = (_8 = (_7 = result === null || result === void 0 ? void 0 : result.data) === null || _7 === void 0 ? void 0 : _7.createPaymentMethod) === null || _8 === void 0 ? void 0 : _8.id) !== null && _9 !== void 0 ? _9 : '', destinationAddress: deliveryAddress });
                setPaymentInfo(paymentData);
                saveToCookies(paymentData, reserveLotData);
                setContainerState(ContainerTypes.CONFIRMATION);
            }
        }
        catch (e) {
            const message = (_10 = e.message) !== null && _10 !== void 0 ? _10 : '';
            debug.error('confirm', { message });
            setError(message);
        }
    }), [
        debug,
        paymentInfo,
        billingInfo,
        orgId,
        setError,
        paymentMethodStatus,
        setContainerState,
        setPaymentInfo,
        createPaymentMethod,
        createPayment,
        getInvoiceData,
        saveToCookies,
    ]);
    const values = useMemo(() => {
        return {
            paymentInfo,
            setPaymentInfo,
            onConfirmCreditCardPurchase,
            onConfirmWireTransferPurchase,
        };
    }, [paymentInfo, setPaymentInfo, onConfirmCreditCardPurchase, onConfirmWireTransferPurchase]);
    return (React__default.createElement(PaymentContext.Provider, { value: values }, children));
};
const usePayment = () => {
    return useContext(PaymentContext);
};

export { PaymentProvider, usePayment };
//# sourceMappingURL=PaymentProvider.js.map
