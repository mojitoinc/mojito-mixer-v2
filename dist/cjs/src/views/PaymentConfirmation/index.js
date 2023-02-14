'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../../../node_modules/@apollo/client/core/index.js');
require('../../../node_modules/@apollo/client/utilities/globals/index.js');
require('../../../node_modules/@apollo/client/utilities/graphql/storeUtils.js');
require('../../../node_modules/@apollo/client/utilities/graphql/transform.js');
require('../../../node_modules/@apollo/client/utilities/common/mergeDeep.js');
require('../../../node_modules/@apollo/client/utilities/observables/Observable.js');
require('../../../node_modules/@apollo/client/utilities/observables/Concast.js');
require('../../../node_modules/@apollo/client/utilities/common/canUse.js');
var useQuery = require('../../../node_modules/@apollo/client/react/hooks/useQuery.js');
require('../../../node_modules/@apollo/client/react/parser/index.js');
require('../../../node_modules/@apollo/client/errors/index.js');
var billing = require('../../queries/billing.js');
require('../../providers/DebugProvider.js');
require('../../providers/ErrorProvider.js');
require('../../providers/BillingProvider.js');
require('../../providers/ContainerStateProvider.js');
require('../../providers/UIConfigurationProvider.js');
var CheckoutProvider = require('../../providers/CheckoutProvider.js');
var PaymentProvider = require('../../providers/PaymentProvider.js');
require('../../providers/EventProvider.js');
var ConfirmationView = require('./ConfirmationView.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const PaymentConfirmationContainer = () => {
    const { orgId } = CheckoutProvider.useCheckout();
    const { paymentInfo } = PaymentProvider.usePayment();
    const [paymentStatus, setPaymentStatus] = React.useState('');
    const { data: paymentMethodsData } = useQuery.useQuery(billing.paymentMethodsQuery, {
        variables: {
            orgID: orgId,
        },
        fetchPolicy: 'no-cache',
        skip: !orgId,
    });
    React.useEffect(() => {
        var _a;
        if (paymentMethodsData === null || paymentMethodsData === void 0 ? void 0 : paymentMethodsData.getPaymentMethodList) {
            const filteredData = paymentMethodsData === null || paymentMethodsData === void 0 ? void 0 : paymentMethodsData.getPaymentMethodList.filter((item) => item.id === (paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentId));
            setPaymentStatus((_a = filteredData[0]) === null || _a === void 0 ? void 0 : _a.status);
        }
    }, [paymentMethodsData, paymentInfo]);
    return (React__default["default"].createElement(ConfirmationView["default"], { paymentStatus: paymentStatus }));
};

exports["default"] = PaymentConfirmationContainer;
//# sourceMappingURL=index.js.map
