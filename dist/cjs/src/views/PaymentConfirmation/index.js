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
var ConfirmationView = require('./ConfirmationView.js');
var invoiceDetails = require('../../queries/invoiceDetails.js');
var usePaymentInfo = require('../../hooks/usePaymentInfo.js');
require('../../providers/DebugProvider.js');
require('../../providers/ErrorProvider.js');
require('../../providers/BillingProvider.js');
require('../../providers/ContainerStateProvider.js');
require('../../providers/UIConfigurationProvider.js');
require('../../providers/CheckoutProvider.js');
require('../../providers/PaymentProvider.js');
require('../../providers/EventProvider.js');
require('../../providers/SecurityOptionsProvider.js');
require('../../providers/UserInfoProvider.js');
require('openpgp');
require('atob');
require('btoa');
require('../../queries/creditCard.js');
require('uuidv4');
require('../../config/paymentConfiguration.js');
require('../../queries/Payment.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const PaymentConfirmationContainer = () => {
    const { lotData } = usePaymentInfo["default"]();
    const [paymentStatus, setPaymentStatus] = React.useState('');
    const { data: invoiceData } = useQuery.useQuery(invoiceDetails.invoiceDetailsQuery, {
        variables: {
            invoiceID: lotData === null || lotData === void 0 ? void 0 : lotData.invoiceID,
        },
        skip: !(lotData === null || lotData === void 0 ? void 0 : lotData.invoiceID),
        fetchPolicy: 'network-only',
    });
    console.log('invoiceData?.getInvoiceDetails?.status', invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.getInvoiceDetails.status);
    React.useEffect(() => {
        if (invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.getInvoiceDetails) {
            setPaymentStatus(invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.getInvoiceDetails.status);
        }
    }, [invoiceData]);
    return (React__default["default"].createElement(ConfirmationView["default"], { paymentStatus: paymentStatus }));
};

exports["default"] = PaymentConfirmationContainer;
//# sourceMappingURL=index.js.map
