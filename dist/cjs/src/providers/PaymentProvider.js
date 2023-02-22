'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var React = require('react');
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
    const { makeCreditCardPurchase, makeWireTransferPurchase } = useCreatePayment.useCreatePayment(paymentInfo, orgId);
    const saveToCookies = React.useCallback((paymentData, reserveLotData, paymentResult) => {
        CookieService.CookieService.billing.setValue(JSON.stringify(billingInfo));
        CookieService.CookieService.paymentInfo.setValue(JSON.stringify(paymentData));
        CookieService.CookieService.taxes.setValue(JSON.stringify(taxes));
        CookieService.CookieService.collectionData.setValue(JSON.stringify(collectionData));
        CookieService.CookieService.reserveLotData.setValue(JSON.stringify(reserveLotData));
        CookieService.CookieService.paymentResult.setValue(JSON.stringify(paymentResult));
        CookieService.CookieService.taxablePrice.setValue(taxablePrice);
        CookieService.CookieService.vertexEnabled.setValue(vertexEnabled);
        CookieService.CookieService.quantity.setValue(quantity);
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
    const values = React.useMemo(() => {
        return {
            paymentInfo,
            setPaymentInfo,
            onConfirmCreditCardPurchase,
            onConfirmWireTransferPurchase,
            setPaymentMethods,
            paymentMethods,
        };
    }, [
        paymentInfo,
        setPaymentInfo,
        onConfirmCreditCardPurchase,
        onConfirmWireTransferPurchase,
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
