'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var usePaymentInfo = require('../../hooks/usePaymentInfo.js');
require('../../providers/DebugProvider.js');
require('../../providers/ErrorProvider.js');
var BillingProvider = require('../../providers/BillingProvider.js');
var ContainerStateProvider = require('../../providers/ContainerStateProvider.js');
require('../../providers/UIConfigurationProvider.js');
var CheckoutProvider = require('../../providers/CheckoutProvider.js');
require('../../providers/PaymentProvider.js');
require('../../providers/EventProvider.js');
require('../../providers/SecurityOptionsProvider.js');
require('openpgp');
require('atob');
require('btoa');
require('../../../node_modules/@apollo/client/core/index.js');
require('../../../node_modules/@apollo/client/utilities/globals/index.js');
require('../../../node_modules/@apollo/client/utilities/graphql/storeUtils.js');
require('../../../node_modules/@apollo/client/utilities/graphql/transform.js');
require('../../../node_modules/@apollo/client/utilities/common/mergeDeep.js');
require('../../../node_modules/@apollo/client/utilities/observables/Observable.js');
require('../../../node_modules/@apollo/client/utilities/observables/Concast.js');
require('../../../node_modules/@apollo/client/utilities/common/canUse.js');
require('../../../node_modules/@apollo/client/react/hooks/useQuery.js');
require('../../../node_modules/@apollo/client/react/parser/index.js');
require('../../../node_modules/@apollo/client/errors/index.js');
require('../../queries/creditCard.js');
require('uuidv4');
require('../../config/paymentConfiguration.js');
require('../../queries/invoiceDetails.js');
require('../../queries/Payment.js');
var CostBreakDown = require('./CostBreakDown.js');
var RootContainer = require('../../interfaces/ContextInterface/RootContainer.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const CostBreakdownContainer = () => {
    const { taxes, collectionData } = BillingProvider.useBilling();
    const { quantity, vertexEnabled } = CheckoutProvider.useCheckout();
    const { taxablePrice } = BillingProvider.useBilling();
    const { taxData, collection, vertexEnabled: vertex, taxablePrice: price, quantity: totalQuanity } = usePaymentInfo["default"]();
    const { containerState } = ContainerStateProvider.useContainer();
    const isConfirmation = React.useMemo(() => {
        return containerState === RootContainer.ContainerTypes.CONFIRMATION;
    }, [containerState]);
    return (React__default["default"].createElement(CostBreakDown["default"], { taxes: isConfirmation ? taxData : taxes, collectionData: isConfirmation ? collection : collectionData, quantity: isConfirmation ? totalQuanity : quantity, taxablePrice: isConfirmation ? price : taxablePrice, vertexEnabled: isConfirmation ? vertex : vertexEnabled }));
};

exports["default"] = CostBreakdownContainer;
//# sourceMappingURL=index.js.map
