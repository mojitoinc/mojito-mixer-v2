import { __awaiter } from '../../node_modules/tslib/tslib.es6.js';
import React__default, { createContext, useState, useCallback, useMemo, useContext } from 'react';
import { CookieService } from '../service/CookieService.js';
import { useDebug } from './DebugProvider.js';
import { useError } from './ErrorProvider.js';
import { useBilling } from './BillingProvider.js';
import { useContainer } from './ContainerStateProvider.js';
import './UIConfigurationProvider.js';
import { useCheckout } from './CheckoutProvider.js';
import './EventProvider.js';
import './SecurityOptionsProvider.js';
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
import '../../node_modules/country-state-city/lib/country.js';
import '../../node_modules/country-state-city/lib/state.js';
import '../../node_modules/country-state-city/lib/city.js';
import 'uuidv4';
import '../config/paymentConfiguration.js';
import { useCreatePayment } from '../hooks/useCreatePayment.js';
import { ContainerTypes } from '../interfaces/ContextInterface/RootContainer.js';

const PaymentContext = createContext({});
const PaymentProvider = ({ children, }) => {
    const debug = useDebug('PaymentProvider');
    const { setError } = useError();
    const [paymentInfo, setPaymentInfo] = useState();
    const [paymentMethods, setPaymentMethods] = useState();
    const { billingInfo, collectionData, taxes } = useBilling();
    const { orgId, lotId, quantity, invoiceId } = useCheckout();
    const { setContainerState } = useContainer();
    const { makeCreditCardPurchase, makeWireTransferPurchase } = useCreatePayment(paymentInfo, orgId);
    const saveToCookies = useCallback((paymentData, reserveLotData, paymentResult) => {
        CookieService.billing.setValue(JSON.stringify(billingInfo));
        CookieService.paymentInfo.setValue(JSON.stringify(paymentData));
        CookieService.taxes.setValue(JSON.stringify(taxes));
        CookieService.collectionData.setValue(JSON.stringify(collectionData));
        CookieService.reserveLotData.setValue(JSON.stringify(reserveLotData));
        CookieService.paymentResult.setValue(JSON.stringify(paymentResult));
    }, [billingInfo, collectionData, taxes]);
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
    const values = useMemo(() => {
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
    return (React__default.createElement(PaymentContext.Provider, { value: values }, children));
};
const usePayment = () => {
    return useContext(PaymentContext);
};

export { PaymentProvider, usePayment };
//# sourceMappingURL=PaymentProvider.js.map
