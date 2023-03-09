import { __awaiter } from '../../node_modules/tslib/tslib.es6.js';
import React__default, { createContext, useState, useCallback, useMemo, useContext } from 'react';
import '../../node_modules/ethers/lib.esm/index.js';
import { CookieService } from '../service/CookieService.js';
import { useDebug } from './DebugProvider.js';
import { useError } from './ErrorProvider.js';
import { useBilling } from './BillingProvider.js';
import { useContainer } from './ContainerStateProvider.js';
import './UIConfigurationProvider.js';
import { useCheckout } from './CheckoutProvider.js';
import './EventProvider.js';
import './SecurityOptionsProvider.js';
import './UserInfoProvider.js';
import 'openpgp';
import 'atob';
import 'btoa';
import '../../node_modules/@apollo/client/core/index.js';
import '../../node_modules/@apollo/client/utilities/globals/index.js';
import '../../node_modules/@apollo/client/utilities/graphql/storeUtils.js';
import '../../node_modules/@apollo/client/utilities/graphql/transform.js';
import '../../node_modules/@apollo/client/utilities/common/mergeDeep.js';
import '../../node_modules/@apollo/client/utilities/observables/Observable.js';
import '../../node_modules/@apollo/client/utilities/observables/Concast.js';
import '../../node_modules/@apollo/client/utilities/common/canUse.js';
import '../../node_modules/@apollo/client/react/hooks/useQuery.js';
import '../../node_modules/@apollo/client/react/parser/index.js';
import '../../node_modules/@apollo/client/errors/index.js';
import '../queries/creditCard.js';
import 'uuidv4';
import '../config/paymentConfiguration.js';
import { useCreatePayment } from '../hooks/useCreatePayment.js';
import { ContainerTypes } from '../interfaces/ContextInterface/RootContainer.js';
import { Abi } from '../utils/abi.js';
import { computeValue } from '../utils/ethUtils.js';
import { useWeb3ModalConnect } from './Web3ModalConnect.js';
import { Contract } from '../../node_modules/@ethersproject/contracts/lib.esm/index.js';
import { AddressZero } from '../../node_modules/@ethersproject/constants/lib.esm/addresses.js';

const PaymentContext = createContext({});
const PaymentProvider = ({ children, }) => {
    const debug = useDebug('PaymentProvider');
    const { setError } = useError();
    const [paymentInfo, setPaymentInfo] = useState();
    const [paymentMethods, setPaymentMethods] = useState();
    const { billingInfo, collectionData, taxes, taxablePrice } = useBilling();
    const { orgId, lotId, quantity, invoiceId, vertexEnabled } = useCheckout();
    const { setContainerState } = useContainer();
    const { makeCreditCardPurchase, makeWireTransferPurchase, makeCoinbasePurchase, makeOnChainPurchase, completeOnChainPayment } = useCreatePayment(paymentInfo, orgId);
    const { connect, } = useWeb3ModalConnect();
    const saveToCookies = useCallback((paymentData, reserveLotData, paymentResult, txHash) => {
        CookieService.billing.setValue(JSON.stringify(billingInfo));
        CookieService.paymentInfo.setValue(JSON.stringify(paymentData));
        CookieService.taxes.setValue(JSON.stringify(taxes));
        CookieService.collectionData.setValue(JSON.stringify(collectionData));
        CookieService.reserveLotData.setValue(JSON.stringify(reserveLotData));
        CookieService.paymentResult.setValue(JSON.stringify(paymentResult));
        CookieService.taxablePrice.setValue(taxablePrice);
        CookieService.vertexEnabled.setValue(vertexEnabled);
        CookieService.quantity.setValue(quantity);
        CookieService.txHash.setValue(txHash);
    }, [billingInfo, collectionData, taxes, quantity, vertexEnabled, taxablePrice]);
    const onConfirmCreditCardPurchase = useCallback((deliveryAddress = '') => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        setContainerState(ContainerTypes.LOADING);
        try {
            const paymentReceipt = yield makeCreditCardPurchase({
                deliveryAddress,
                lotId,
                quantity: quantity !== null && quantity !== void 0 ? quantity : 1,
                invoiceId,
                billingInfo,
            });
            debug.success('paymentData', { paymentReceipt });
            saveToCookies(paymentReceipt.paymentData, paymentReceipt.reserveLotData, paymentReceipt.paymentResult);
            window.location.href =
                (_c = (_b = (_a = paymentReceipt.notificationData) === null || _a === void 0 ? void 0 : _a.getPaymentNotification) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.redirectURL;
        }
        catch (e) {
            const message = (_d = e.message) !== null && _d !== void 0 ? _d : '';
            debug.error('confirm', { message });
            setError(message);
        }
    }), [
        debug,
        billingInfo,
        invoiceId,
        lotId,
        quantity,
        setError,
        saveToCookies,
        setContainerState,
        makeCreditCardPurchase,
    ]);
    const onConfirmWireTransferPurchase = useCallback((deliveryAddress = '') => __awaiter(void 0, void 0, void 0, function* () {
        var _e;
        setContainerState(ContainerTypes.LOADING);
        try {
            const paymentReceipt = yield makeWireTransferPurchase({
                deliveryAddress,
                lotId,
                quantity: quantity !== null && quantity !== void 0 ? quantity : 1,
                invoiceId,
                billingInfo,
            });
            debug.success('paymentData-wire', { paymentReceipt });
            saveToCookies(paymentReceipt.paymentData, paymentReceipt.reserveLotData, paymentReceipt.paymentResult);
            setPaymentInfo(paymentReceipt.paymentData);
            setContainerState(ContainerTypes.CONFIRMATION);
        }
        catch (e) {
            const message = (_e = e.message) !== null && _e !== void 0 ? _e : '';
            debug.error('confirm', { message });
            setError(message);
        }
    }), [
        debug,
        billingInfo,
        invoiceId,
        lotId,
        quantity,
        setError,
        setContainerState,
        setPaymentInfo,
        saveToCookies,
        makeWireTransferPurchase,
    ]);
    const onConfirmCoinbasePurchase = useCallback((deliveryAddress = '') => __awaiter(void 0, void 0, void 0, function* () {
        var _f, _g, _h, _j, _k, _l;
        setContainerState(ContainerTypes.LOADING);
        try {
            const paymentReceipt = yield makeCoinbasePurchase({
                deliveryAddress,
                lotId,
                quantity: quantity !== null && quantity !== void 0 ? quantity : 1,
                invoiceId,
                billingInfo,
            });
            debug.success('paymentData-coinbase', { paymentReceipt });
            saveToCookies(paymentReceipt.paymentData, paymentReceipt.reserveLotData, paymentReceipt.paymentResult);
            setPaymentInfo(paymentReceipt.paymentData);
            if ((_g = (_f = paymentReceipt.paymentResult) === null || _f === void 0 ? void 0 : _f.details) === null || _g === void 0 ? void 0 : _g.hostedURL) {
                window.location.href = (_k = (_j = (_h = paymentReceipt.paymentResult) === null || _h === void 0 ? void 0 : _h.details) === null || _j === void 0 ? void 0 : _j.hostedURL) !== null && _k !== void 0 ? _k : '';
            }
            else
                setContainerState(ContainerTypes.CONFIRMATION);
        }
        catch (e) {
            const message = (_l = e.message) !== null && _l !== void 0 ? _l : '';
            debug.error('confirm', { message });
            setError(message);
        }
    }), [
        debug,
        billingInfo,
        invoiceId,
        lotId,
        quantity,
        setError,
        setContainerState,
        setPaymentInfo,
        saveToCookies,
        makeCoinbasePurchase,
    ]);
    const onConfirmOnChainPurchase = useCallback((deliveryAddress = '') => __awaiter(void 0, void 0, void 0, function* () {
        var _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        setContainerState(ContainerTypes.LOADING);
        try {
            const options = {
                deliveryAddress,
                lotId,
                quantity: quantity !== null && quantity !== void 0 ? quantity : 1,
                invoiceId,
                billingInfo,
            };
            const paymentReceipt = yield makeOnChainPurchase(options);
            debug.success('paymentData-coinbase', { paymentReceipt });
            const { provider } = connect;
            if (!provider)
                return;
            const { signer } = connect;
            const onChainPaymentAddress = (_q = (_p = (_o = (_m = paymentReceipt.invoiceDetails) === null || _m === void 0 ? void 0 : _m.items[0]) === null || _o === void 0 ? void 0 : _o.onChainPaymentInfo) === null || _p === void 0 ? void 0 : _p.onchainPaymentAddress) !== null && _q !== void 0 ? _q : '';
            const contract = new Contract(onChainPaymentAddress, Abi.abi, signer);
            const price = vertexEnabled ? ((_r = taxes === null || taxes === void 0 ? void 0 : taxes.taxablePrice) !== null && _r !== void 0 ? _r : 0) : taxablePrice;
            const value = yield computeValue(price !== null && price !== void 0 ? price : 0);
            const nftDetails = [
                collectionData.collectionId,
                (_u = (_t = (_s = paymentReceipt.invoiceDetails) === null || _s === void 0 ? void 0 : _s.items[0]) === null || _t === void 0 ? void 0 : _t.onChainPaymentInfo) === null || _u === void 0 ? void 0 : _u.ownerWalletAddress,
                Number((_y = (_x = (_w = (_v = paymentReceipt.invoiceDetails) === null || _v === void 0 ? void 0 : _v.items[0]) === null || _w === void 0 ? void 0 : _w.onChainPaymentInfo) === null || _x === void 0 ? void 0 : _x.onChainID) !== null && _y !== void 0 ? _y : 1),
                1,
                quantity,
                deliveryAddress,
                AddressZero,
                value,
            ];
            const tax = taxes === null || taxes === void 0 ? void 0 : taxes.totalTaxAmount;
            let hash = '';
            try {
                yield contract.estimateGas.buy(nftDetails, tax, {
                    value,
                });
                const tx = yield contract.buy(nftDetails, tax, {
                    value,
                    gasLimit: 400000,
                });
                hash = tx.hash;
                saveToCookies(paymentReceipt.paymentData, paymentReceipt.reserveLotData, paymentReceipt.paymentResult, hash);
                setPaymentInfo(paymentReceipt.paymentData);
                yield provider.waitForTransaction(tx.hash, 4);
            }
            catch (e) {
                console.log('error', e);
                const message = (_z = e.message) !== null && _z !== void 0 ? _z : '';
                debug.error('confirm', { message });
            }
            finally {
                try {
                    yield completeOnChainPayment(options, paymentReceipt, hash);
                    setPaymentInfo(paymentReceipt.paymentData);
                    setContainerState(ContainerTypes.CONFIRMATION);
                }
                catch (e) {
                    console.log('error', e);
                    const message = (_0 = e.message) !== null && _0 !== void 0 ? _0 : '';
                    debug.error('confirm', { message });
                    setError(message);
                }
            }
        }
        catch (e) {
            const message = (_1 = e.message) !== null && _1 !== void 0 ? _1 : '';
            debug.error('confirm', { message });
            console.log('error', e);
            setError(message);
        }
    }), [
        debug,
        billingInfo,
        invoiceId,
        lotId,
        quantity,
        setError,
        setContainerState,
        setPaymentInfo,
        saveToCookies,
        makeOnChainPurchase,
        collectionData,
        completeOnChainPayment,
        taxablePrice,
        taxes,
        vertexEnabled,
        connect,
    ]);
    const values = useMemo(() => {
        return {
            paymentInfo,
            setPaymentInfo,
            onConfirmCreditCardPurchase,
            onConfirmWireTransferPurchase,
            onConfirmCoinbasePurchase,
            setPaymentMethods,
            paymentMethods,
            onConfirmOnChainPurchase,
        };
    }, [
        paymentInfo,
        setPaymentInfo,
        onConfirmCreditCardPurchase,
        onConfirmWireTransferPurchase,
        onConfirmCoinbasePurchase,
        onConfirmOnChainPurchase,
        setPaymentMethods,
        paymentMethods,
    ]);
    return (React__default.createElement(PaymentContext.Provider, { value: values }, children));
};
const usePayment = () => {
    return useContext(PaymentContext);
};

export { PaymentProvider, usePayment };
//# sourceMappingURL=PaymentProvider.js.map
