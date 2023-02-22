import { __awaiter } from '../../../node_modules/tslib/tslib.es6.js';
import React__default, { useState, useEffect, useMemo, useCallback } from 'react';
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
import { uuid } from 'uuidv4';
import { paymentMethodsQuery, validatePaymentLimitQuery } from '../../queries/billing.js';
import { useDebug } from '../../providers/DebugProvider.js';
import '../../providers/ErrorProvider.js';
import { useBilling } from '../../providers/BillingProvider.js';
import { useContainer } from '../../providers/ContainerStateProvider.js';
import '../../providers/UIConfigurationProvider.js';
import { useCheckout } from '../../providers/CheckoutProvider.js';
import { usePayment } from '../../providers/PaymentProvider.js';
import '../../providers/EventProvider.js';
import '../../providers/SecurityOptionsProvider.js';
import BillingView from './BillingView.js';
import { ContainerTypes } from '../../interfaces/ContextInterface/RootContainer.js';
import { PaymentTypes } from '../../constants/index.js';

const BillingContainer = () => {
    const debug = useDebug('Billing');
    const { orgId, collectionItemId, quantity, vertexEnabled } = useCheckout();
    const { setBillingInfo, billingInfo, refetchTaxes, pincodeError } = useBilling();
    const [isEditing, setIsEditing] = useState(true);
    const { setContainerState } = useContainer();
    const { setPaymentInfo, paymentInfo, setPaymentMethods } = usePayment();
    const [fetchBilling, { data: paymentData }] = useLazyQuery(paymentMethodsQuery);
    const { data: validPaymnetMethods, loading: validpaymentMethodLoading } = useQuery(validatePaymentLimitQuery, {
        variables: {
            collectionId: collectionItemId,
            itemsCount: quantity,
        },
        skip: !collectionItemId || !quantity,
    });
    useEffect(() => {
        var _a, _b, _c, _d;
        if ((validPaymnetMethods === null || validPaymnetMethods === void 0 ? void 0 : validPaymnetMethods.validatePaymentLimit) &&
            !validpaymentMethodLoading) {
            setPaymentMethods({
                exceedCreditCard: !((_b = (_a = validPaymnetMethods === null || validPaymnetMethods === void 0 ? void 0 : validPaymnetMethods.validatePaymentLimit) === null || _a === void 0 ? void 0 : _a.creditCard) === null || _b === void 0 ? void 0 : _b.isLimitExceeded),
                exceedWire: !((_d = (_c = validPaymnetMethods === null || validPaymnetMethods === void 0 ? void 0 : validPaymnetMethods.validatePaymentLimit) === null || _c === void 0 ? void 0 : _c.wire) === null || _d === void 0 ? void 0 : _d.isLimitExceeded),
            });
        }
    }, [validPaymnetMethods, setPaymentMethods, validpaymentMethodLoading]);
    useEffect(() => {
        debug.info('load', { orgId });
        if (orgId) {
            fetchBilling({
                variables: {
                    orgID: orgId,
                },
            });
        }
    }, [fetchBilling, orgId, debug]);
    const paymentItem = useMemo(() => {
        var _a, _b;
        return (_b = (_a = paymentData === null || paymentData === void 0 ? void 0 : paymentData.getPaymentMethodList) === null || _a === void 0 ? void 0 : _a.find((item) => item.type === PaymentTypes.CREDIT_CARD && item.billingDetails)) !== null && _b !== void 0 ? _b : paymentData === null || paymentData === void 0 ? void 0 : paymentData.getPaymentMethodList[0];
    }, [paymentData]);
    useEffect(() => {
        debug.info('paymentData', paymentItem);
        if (paymentItem) {
            setIsEditing(false);
        }
        else {
            setIsEditing(true);
        }
    }, [paymentItem, debug]);
    const onClickEdit = useCallback(() => {
        setIsEditing(true);
    }, []);
    const onChangeValues = useCallback((isValid, values) => {
        if (isValid) {
            console.log('isValidBillingForm', isValid, values);
            if (vertexEnabled)
                refetchTaxes(values);
        }
        else {
            setIsEditing(true);
        }
    }, [vertexEnabled, refetchTaxes]);
    const onClickContinue = useCallback((values) => __awaiter(void 0, void 0, void 0, function* () {
        setBillingInfo(Object.assign(Object.assign({}, values), { name: `${values === null || values === void 0 ? void 0 : values.firstName} ${values === null || values === void 0 ? void 0 : values.lastName}` }));
        setPaymentInfo(Object.assign({ sessionKey: uuid() }, paymentInfo));
        setContainerState(ContainerTypes.PAYMENT);
    }), [
        setBillingInfo,
        setContainerState,
        paymentInfo,
        setPaymentInfo,
    ]);
    return (React__default.createElement(BillingView, { isEditing: isEditing, onClickEdit: onClickEdit, onClickContinue: onClickContinue, pincodeError: pincodeError, billingInfo: billingInfo, paymentItem: paymentItem, onChangeValues: onChangeValues }));
};

export { BillingContainer as default };
//# sourceMappingURL=index.js.map
