'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var React = require('react');
require('../../node_modules/ethers/lib.esm/index.js');
var CookieService = require('../service/CookieService.js');
var DebugProvider = require('./DebugProvider.js');
var ErrorProvider = require('./ErrorProvider.js');
var BillingProvider = require('./BillingProvider.js');
var ContainerStateProvider = require('./ContainerStateProvider.js');
require('./UIConfigurationProvider.js');
var CheckoutProvider = require('./CheckoutProvider.js');
require('./EventProvider.js');
require('./SecurityOptionsProvider.js');
require('./UserInfoProvider.js');
require('openpgp');
require('atob');
require('btoa');
require('../../node_modules/@apollo/client/core/index.js');
require('../../node_modules/@apollo/client/utilities/globals/index.js');
require('../../node_modules/@apollo/client/utilities/graphql/storeUtils.js');
require('../../node_modules/@apollo/client/utilities/graphql/transform.js');
require('../../node_modules/@apollo/client/utilities/common/mergeDeep.js');
require('../../node_modules/@apollo/client/utilities/observables/Observable.js');
require('../../node_modules/@apollo/client/utilities/observables/Concast.js');
require('../../node_modules/@apollo/client/utilities/common/canUse.js');
require('../../node_modules/@apollo/client/react/hooks/useQuery.js');
require('../../node_modules/@apollo/client/react/parser/index.js');
require('../../node_modules/@apollo/client/errors/index.js');
require('../queries/creditCard.js');
require('uuidv4');
require('../config/paymentConfiguration.js');
var useCreatePayment = require('../hooks/useCreatePayment.js');
var RootContainer = require('../interfaces/ContextInterface/RootContainer.js');
var abi = require('../utils/abi.js');
var ethUtils = require('../utils/ethUtils.js');
var Web3ModalConnect = require('./Web3ModalConnect.js');
var index = require('../../node_modules/@ethersproject/contracts/lib.esm/index.js');
var addresses = require('../../node_modules/@ethersproject/constants/lib.esm/addresses.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const PaymentContext = React.createContext({});
const PaymentProvider = ({ children, }) => {
    const debug = DebugProvider.useDebug('PaymentProvider');
    const { setError } = ErrorProvider.useError();
    const [paymentInfo, setPaymentInfo] = React.useState();
    const [paymentMethods, setPaymentMethods] = React.useState();
    const { billingInfo, collectionData, taxes, taxablePrice } = BillingProvider.useBilling();
    const { orgId, lotId, quantity, invoiceId, vertexEnabled } = CheckoutProvider.useCheckout();
    const { setContainerState } = ContainerStateProvider.useContainer();
    const { makeCreditCardPurchase, makeWireTransferPurchase, makeCoinbasePurchase, makeOnChainPurchase, completeOnChainPayment } = useCreatePayment.useCreatePayment(paymentInfo, orgId);
    const { connect, } = Web3ModalConnect.useWeb3ModalConnect();
    const saveToCookies = React.useCallback((paymentData, reserveLotData, paymentResult, txHash) => {
        CookieService.CookieService.billing.setValue(JSON.stringify(billingInfo));
        CookieService.CookieService.paymentInfo.setValue(JSON.stringify(paymentData));
        CookieService.CookieService.taxes.setValue(JSON.stringify(taxes));
        CookieService.CookieService.collectionData.setValue(JSON.stringify(collectionData));
        CookieService.CookieService.reserveLotData.setValue(JSON.stringify(reserveLotData));
        CookieService.CookieService.paymentResult.setValue(JSON.stringify(paymentResult));
        CookieService.CookieService.taxablePrice.setValue(taxablePrice);
        CookieService.CookieService.vertexEnabled.setValue(vertexEnabled);
        CookieService.CookieService.quantity.setValue(quantity);
        CookieService.CookieService.txHash.setValue(txHash);
    }, [billingInfo, collectionData, taxes, quantity, vertexEnabled, taxablePrice]);
    const onConfirmCreditCardPurchase = React.useCallback((deliveryAddress = '') => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        setContainerState(RootContainer.ContainerTypes.LOADING);
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
    const onConfirmWireTransferPurchase = React.useCallback((deliveryAddress = '') => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        var _e;
        setContainerState(RootContainer.ContainerTypes.LOADING);
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
            setContainerState(RootContainer.ContainerTypes.CONFIRMATION);
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
    const onConfirmCoinbasePurchase = React.useCallback((deliveryAddress = '') => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        var _f, _g, _h, _j, _k, _l;
        setContainerState(RootContainer.ContainerTypes.LOADING);
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
                setContainerState(RootContainer.ContainerTypes.CONFIRMATION);
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
    const onConfirmOnChainPurchase = React.useCallback((deliveryAddress = '') => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        var _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        setContainerState(RootContainer.ContainerTypes.LOADING);
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
            const contract = new index.Contract(onChainPaymentAddress, abi.Abi.abi, signer);
            const price = vertexEnabled ? ((_r = taxes === null || taxes === void 0 ? void 0 : taxes.taxablePrice) !== null && _r !== void 0 ? _r : 0) : taxablePrice;
            const value = yield ethUtils.computeValue(price !== null && price !== void 0 ? price : 0);
            const nftDetails = [
                collectionData.collectionId,
                (_u = (_t = (_s = paymentReceipt.invoiceDetails) === null || _s === void 0 ? void 0 : _s.items[0]) === null || _t === void 0 ? void 0 : _t.onChainPaymentInfo) === null || _u === void 0 ? void 0 : _u.ownerWalletAddress,
                Number((_y = (_x = (_w = (_v = paymentReceipt.invoiceDetails) === null || _v === void 0 ? void 0 : _v.items[0]) === null || _w === void 0 ? void 0 : _w.onChainPaymentInfo) === null || _x === void 0 ? void 0 : _x.onChainID) !== null && _y !== void 0 ? _y : 1),
                1,
                quantity,
                deliveryAddress,
                addresses.AddressZero,
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
                    setContainerState(RootContainer.ContainerTypes.CONFIRMATION);
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
    const values = React.useMemo(() => {
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
    return (React__default["default"].createElement(PaymentContext.Provider, { value: values }, children));
};
const usePayment = () => {
    return React.useContext(PaymentContext);
};

exports.PaymentProvider = PaymentProvider;
exports.usePayment = usePayment;
//# sourceMappingURL=PaymentProvider.js.map
