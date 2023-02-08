import { __awaiter } from '../../../node_modules/tslib/tslib.es6.js';
import React__default, { useState, useEffect, useMemo, useCallback } from 'react';
import { useFormik } from '../../../node_modules/formik/dist/formik.esm.js';
import '../../../node_modules/yup/es/mixed.js';
import '../../../node_modules/yup/es/boolean.js';
import { create as create$1 } from '../../../node_modules/yup/es/string.js';
import '../../../node_modules/yup/es/locale.js';
import '../../../node_modules/yup/es/schema.js';
import '../../../node_modules/yup/es/date.js';
import { create } from '../../../node_modules/yup/es/object.js';
import '../../../node_modules/yup/es/Reference.js';
import 'property-expr';
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
import '../../../node_modules/@apollo/client/react/hooks/useQuery.js';
import { uuid } from 'uuidv4';
import { paymentMethodsQuery } from '../../queries/billing.js';
import { useDebug } from '../../providers/DebugProvider.js';
import '../../providers/ErrorProvider.js';
import { useBilling } from '../../providers/BillingProvider.js';
import { useContainer, ContainerTypes } from '../../providers/ContainerStateProvider.js';
import '../../providers/ConfigurationProvider.js';
import { useDelivery } from '../../providers/DeliveryProvider.js';
import { usePayment } from '../../providers/PaymentProvider.js';
import BillingView from './BillingView.js';

const BillingContainer = () => {
    const debug = useDebug('Billing');
    const { orgId } = useDelivery();
    const { setBillingInfo, billingInfo, refetchTaxes } = useBilling();
    const [isEditing, setIsEditing] = useState(true);
    const { setContainerState } = useContainer();
    const { setPaymentInfo, paymentInfo } = usePayment();
    const [fetchBilling, { data: paymentData }] = useLazyQuery(paymentMethodsQuery);
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
    const schema = create().shape({
        country: create$1().required('Please select a country'),
        state: create$1().required('Please select a state'),
        city: create$1().required('Please select a city'),
        postalCode: create$1().required('Please enter zipcode'),
        email: create$1()
            .email('Please enter valid email')
            .required('Please enter email'),
        phoneNumber: create$1().required('Please enter a mobile number'),
        street1: create$1().required('Please enter your address'),
    });
    const { values, errors, handleChange, setValues, isValid } = useFormik({
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
    const isValidBillingForm = useMemo(() => {
        return !((errors === null || errors === void 0 ? void 0 : errors.country) || (errors === null || errors === void 0 ? void 0 : errors.state) || (errors === null || errors === void 0 ? void 0 : errors.city) || (errors === null || errors === void 0 ? void 0 : errors.postalCode) || (errors === null || errors === void 0 ? void 0 : errors.phoneNumber) || (errors === null || errors === void 0 ? void 0 : errors.name));
    }, [errors]);
    const setBillingValues = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
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
    useEffect(() => {
        debug.info('paymentData', paymentData);
        if (paymentData) {
            setBillingValues();
        }
    }, [paymentData, setBillingValues, debug]);
    const onClickEdit = useCallback(() => {
        setIsEditing(true);
    }, []);
    useEffect(() => {
        if (isValidBillingForm) {
            refetchTaxes(values);
        }
        else {
            setIsEditing(true);
        }
    }, [values, refetchTaxes, isValidBillingForm]);
    const onClickContinue = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
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
        setPaymentInfo(Object.assign({ sessionKey: uuid() }, paymentInfo));
        setContainerState(ContainerTypes.PAYMENT);
    }), [values, setBillingInfo, isEditing, isValid, setContainerState, paymentInfo, setPaymentInfo]);
    return (React__default.createElement(BillingView, { isEditing: isEditing, values: values, errors: errors, onChange: handleChange, onClickEdit: onClickEdit, onClickContinue: onClickContinue, isValidBillingForm: isValidBillingForm, isValid: isValid }));
};

export { BillingContainer as default };
//# sourceMappingURL=index.js.map
