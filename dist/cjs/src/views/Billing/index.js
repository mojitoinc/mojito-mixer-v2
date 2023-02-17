'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
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
var uuidv4 = require('uuidv4');
var billing = require('../../queries/billing.js');
var DebugProvider = require('../../providers/DebugProvider.js');
require('../../providers/ErrorProvider.js');
var BillingProvider = require('../../providers/BillingProvider.js');
var ContainerStateProvider = require('../../providers/ContainerStateProvider.js');
require('../../providers/UIConfigurationProvider.js');
var CheckoutProvider = require('../../providers/CheckoutProvider.js');
var PaymentProvider = require('../../providers/PaymentProvider.js');
require('../../providers/EventProvider.js');
require('../../providers/SecurityOptionsProvider.js');
var BillingView = require('./BillingView.js');
var RootContainer = require('../../interfaces/ContextInterface/RootContainer.js');
var index = require('../../constants/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const BillingContainer = () => {
    const debug = DebugProvider.useDebug('Billing');
    const { orgId, collectionItemId, quantity, vertexEnabled } = CheckoutProvider.useCheckout();
    const { setBillingInfo, billingInfo, refetchTaxes, pincodeError } = BillingProvider.useBilling();
    const [isEditing, setIsEditing] = React.useState(true);
    const { setContainerState } = ContainerStateProvider.useContainer();
    const { setPaymentInfo, paymentInfo, setPaymentMethods } = PaymentProvider.usePayment();
    const [fetchBilling, { data: paymentData }] = useLazyQuery.useLazyQuery(billing.paymentMethodsQuery);
    const { data: validPaymnetMethods, loading: validpaymentMethodLoading } = useQuery.useQuery(billing.validatePaymentLimitQuery, {
        variables: {
            collectionId: collectionItemId,
            itemsCount: quantity,
        },
        skip: !collectionItemId || !quantity,
    });
    React.useEffect(() => {
        var _a, _b, _c, _d;
        if ((validPaymnetMethods === null || validPaymnetMethods === void 0 ? void 0 : validPaymnetMethods.validatePaymentLimit) &&
            !validpaymentMethodLoading) {
            setPaymentMethods({
                exceedCreditCard: !((_b = (_a = validPaymnetMethods === null || validPaymnetMethods === void 0 ? void 0 : validPaymnetMethods.validatePaymentLimit) === null || _a === void 0 ? void 0 : _a.creditCard) === null || _b === void 0 ? void 0 : _b.isLimitExceeded),
                exceedWire: !((_d = (_c = validPaymnetMethods === null || validPaymnetMethods === void 0 ? void 0 : validPaymnetMethods.validatePaymentLimit) === null || _c === void 0 ? void 0 : _c.wire) === null || _d === void 0 ? void 0 : _d.isLimitExceeded),
            });
        }
    }, [validPaymnetMethods, setPaymentMethods, validpaymentMethodLoading]);
    React.useEffect(() => {
        debug.info('load', { orgId });
        if (orgId) {
            fetchBilling({
                variables: {
                    orgID: orgId,
                },
            });
        }
    }, [fetchBilling, orgId, debug]);
    const paymentItem = React.useMemo(() => {
        var _a, _b;
        return (_b = (_a = paymentData === null || paymentData === void 0 ? void 0 : paymentData.getPaymentMethodList) === null || _a === void 0 ? void 0 : _a.find((item) => item.type === index.PaymentTypes.CREDIT_CARD && item.billingDetails)) !== null && _b !== void 0 ? _b : paymentData === null || paymentData === void 0 ? void 0 : paymentData.getPaymentMethodList[0];
    }, [paymentData]);
    React.useEffect(() => {
        debug.info('paymentData', paymentItem);
        if (paymentItem) {
            setIsEditing(false);
        }
        else {
            setIsEditing(true);
        }
    }, [paymentItem, debug]);
    const onClickEdit = React.useCallback(() => {
        setIsEditing(true);
    }, []);
    const onChangeValues = React.useCallback((isValid, values) => {
        if (isValid) {
            console.log('isValidBillingForm', isValid, values);
            if (vertexEnabled)
                refetchTaxes(values);
        }
        else {
            setIsEditing(true);
        }
    }, [vertexEnabled, refetchTaxes]);
    const onClickContinue = React.useCallback((values) => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (!isEditing) {
            const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            const isValidEmail = emailRegex.test((_a = values === null || values === void 0 ? void 0 : values.email) !== null && _a !== void 0 ? _a : '');
            if (!isValidEmail)
                return;
        }
        setBillingInfo(Object.assign(Object.assign({}, values), { name: `${values === null || values === void 0 ? void 0 : values.firstName} ${values === null || values === void 0 ? void 0 : values.lastName}` }));
        setPaymentInfo(Object.assign({ sessionKey: uuidv4.uuid() }, paymentInfo));
        setContainerState(RootContainer.ContainerTypes.PAYMENT);
    }), [
        setBillingInfo,
        isEditing,
        setContainerState,
        paymentInfo,
        setPaymentInfo,
    ]);
    return (React__default["default"].createElement(BillingView["default"], { isEditing: isEditing, onClickEdit: onClickEdit, onClickContinue: onClickContinue, pincodeError: pincodeError, billingInfo: billingInfo, paymentItem: paymentItem, onChangeValues: onChangeValues }));
};

exports["default"] = BillingContainer;
//# sourceMappingURL=index.js.map
