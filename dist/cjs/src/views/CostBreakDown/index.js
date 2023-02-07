'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usePaymentInfo = require('../../hooks/usePaymentInfo.js');
require('../../../node_modules/@apollo/client/core/index.js');
require('../../../node_modules/@apollo/client/utilities/globals/index.js');
var React = require('react');
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
require('../../providers/DebugProvider.js');
require('../../providers/ErrorProvider.js');
var BillingProvider = require('../../providers/BillingProvider.js');
require('../../providers/ContainerStateProvider.js');
require('../../providers/ConfigurationProvider.js');
require('../../providers/DeliveryProvider.js');
require('../../providers/PaymentProvider.js');
require('openpgp');
require('atob');
require('btoa');
require('../../../node_modules/country-state-city/lib/country.js');
require('../../../node_modules/country-state-city/lib/state.js');
require('../../../node_modules/country-state-city/lib/city.js');
require('../../config/RuntimeConfiguration.js');
require('../../config/paymentConfiguration.js');
require('uuidv4');
var CostBreakDown = require('./CostBreakDown.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const CostBreakdownContainer = () => {
    const { taxes, collectionData } = BillingProvider.useBilling();
    const { taxData, collection } = usePaymentInfo["default"]();
    return (React__default["default"].createElement(CostBreakDown["default"], { taxes: taxData !== null && taxData !== void 0 ? taxData : taxes, collectionData: collection !== null && collection !== void 0 ? collection : collectionData }));
};

exports["default"] = CostBreakdownContainer;
//# sourceMappingURL=index.js.map
