'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var formik_esm = require('../../../node_modules/formik/dist/formik.esm.js');
require('../../../node_modules/yup/es/mixed.js');
require('../../../node_modules/yup/es/boolean.js');
var string = require('../../../node_modules/yup/es/string.js');
require('../../../node_modules/yup/es/locale.js');
require('../../../node_modules/yup/es/schema.js');
require('../../../node_modules/yup/es/date.js');
var object = require('../../../node_modules/yup/es/object.js');
require('../../../node_modules/yup/es/Reference.js');
require('property-expr');
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
require('../../../node_modules/@apollo/client/react/hooks/useQuery.js');
var billing = require('../../queries/billing.js');
var DebugProvider = require('../../providers/DebugProvider.js');
require('../../providers/ErrorProvider.js');
var BillingProvider = require('../../providers/BillingProvider.js');
var ContainerStateProvider = require('../../providers/ContainerStateProvider.js');
require('../../providers/ConfigurationProvider.js');
var DeliveryProvider = require('../../providers/DeliveryProvider.js');
var PaymentProvider = require('../../providers/PaymentProvider.js');
var uuidv4 = require('uuidv4');
var BillingView = require('./BillingView.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const BillingContainer = () => {
    const debug = DebugProvider.useDebug('Billing');
    const { orgId } = DeliveryProvider.useDelivery();
    const { setBillingInfo, billingInfo, refetchTaxes } = BillingProvider.useBilling();
    const [isEditing, setIsEditing] = React.useState(true);
    const { setContainerState } = ContainerStateProvider.useContainer();
    const { setPaymentInfo, paymentInfo } = PaymentProvider.usePayment();
    const [fetchBilling, { data: paymentData }] = useLazyQuery.useLazyQuery(billing.paymentMethodsQuery);
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
    const schema = object.create().shape({
        country: string.create().required('Please select a country'),
        state: string.create().required('Please select a state'),
        city: string.create().required('Please select a city'),
        postalCode: string.create().required('Please enter zipcode'),
        email: string.create()
            .email('Please enter valid email')
            .required('Please enter email'),
        phoneNumber: string.create().required('Please enter a mobile number'),
        street1: string.create().required('Please enter your address'),
    });
    const { values, errors, handleChange, setValues, isValid } = formik_esm.useFormik({
        initialValues: {
            email: '',
            country: '',
            state: '',
            city: '',
            postalCode: '',
            phoneNumber: '',
            street1: '',
            name: '',
        },
        onSubmit: () => undefined,
        validationSchema: schema,
    });
    const isValidBillingForm = React.useMemo(() => {
        return !((errors === null || errors === void 0 ? void 0 : errors.country) || (errors === null || errors === void 0 ? void 0 : errors.state) || (errors === null || errors === void 0 ? void 0 : errors.city) || (errors === null || errors === void 0 ? void 0 : errors.postalCode) || (errors === null || errors === void 0 ? void 0 : errors.phoneNumber) || (errors === null || errors === void 0 ? void 0 : errors.name));
    }, [errors]);
    const setBillingValues = React.useCallback(() => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        const paymentItem = (_a = paymentData === null || paymentData === void 0 ? void 0 : paymentData.getPaymentMethodList) === null || _a === void 0 ? void 0 : _a.find((item) => item.type === 'CreditCard' && item.billingDetails);
        if (paymentItem) {
            setIsEditing(false);
            const billingValues = {
                city: (_b = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.city) !== null && _b !== void 0 ? _b : (_c = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.billingDetails) === null || _c === void 0 ? void 0 : _c.city,
                country: (_d = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.country) !== null && _d !== void 0 ? _d : (_e = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.billingDetails) === null || _e === void 0 ? void 0 : _e.country,
                postalCode: (_f = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.postalCode) !== null && _f !== void 0 ? _f : (_g = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.billingDetails) === null || _g === void 0 ? void 0 : _g.postalCode,
                state: (_h = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.state) !== null && _h !== void 0 ? _h : (_j = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.billingDetails) === null || _j === void 0 ? void 0 : _j.district,
                email: (_k = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.email) !== null && _k !== void 0 ? _k : (_l = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.metadata) === null || _l === void 0 ? void 0 : _l.email,
                phoneNumber: (_m = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.phoneNumber) !== null && _m !== void 0 ? _m : (_o = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.metadata) === null || _o === void 0 ? void 0 : _o.phoneNumber,
                street1: (_p = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.street1) !== null && _p !== void 0 ? _p : (_q = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.billingDetails) === null || _q === void 0 ? void 0 : _q.address1,
                name: (_r = billingInfo === null || billingInfo === void 0 ? void 0 : billingInfo.name) !== null && _r !== void 0 ? _r : (_s = paymentItem === null || paymentItem === void 0 ? void 0 : paymentItem.billingDetails) === null || _s === void 0 ? void 0 : _s.name,
            };
            setValues(billingValues);
        }
        else {
            setIsEditing(true);
        }
    }), [billingInfo, paymentData, setValues]);
    React.useEffect(() => {
        debug.info('paymentData', paymentData);
        if (paymentData) {
            setBillingValues();
        }
    }, [paymentData, setBillingValues, debug]);
    const onClickEdit = React.useCallback(() => {
        setIsEditing(true);
    }, []);
    React.useEffect(() => {
        if (isValidBillingForm) {
            refetchTaxes(values);
        }
        else {
            setIsEditing(true);
        }
    }, [values, refetchTaxes, isValidBillingForm]);
    const onClickContinue = React.useCallback(() => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        var _t;
        if (isEditing && !isValid)
            return;
        if (!isEditing) {
            const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            const isValidEmail = emailRegex.test((_t = values === null || values === void 0 ? void 0 : values.email) !== null && _t !== void 0 ? _t : '');
            if (!isValidEmail)
                return;
        }
        setBillingInfo(Object.assign({}, values));
        setPaymentInfo(Object.assign({ sessionKey: uuidv4.uuid() }, paymentInfo));
        setContainerState(ContainerStateProvider.ContainerTypes.PAYMENT);
    }), [values, setBillingInfo, isEditing, isValid, setContainerState, paymentInfo, setPaymentInfo]);
    return (React__default["default"].createElement(BillingView["default"], { isEditing: isEditing, values: values, errors: errors, onChange: handleChange, onClickEdit: onClickEdit, onClickContinue: onClickContinue, isValidBillingForm: isValidBillingForm, isValid: isValid }));
};

exports["default"] = BillingContainer;
//# sourceMappingURL=index.js.map
