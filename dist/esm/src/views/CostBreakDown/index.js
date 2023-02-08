import React__default from 'react';
import usePaymentInfo from '../../hooks/usePaymentInfo.js';
import '../../providers/DebugProvider.js';
import '../../providers/ErrorProvider.js';
import { useBilling } from '../../providers/BillingProvider.js';
import '../../providers/ContainerStateProvider.js';
import '../../providers/ConfigurationProvider.js';
import '../../providers/DeliveryProvider.js';
import '../../providers/PaymentProvider.js';
import 'openpgp';
import 'atob';
import 'btoa';
import '../../../node_modules/@apollo/client/core/index.js';
import '../../../node_modules/@apollo/client/utilities/globals/index.js';
import '../../../node_modules/@apollo/client/utilities/graphql/storeUtils.js';
import '../../../node_modules/@apollo/client/utilities/graphql/transform.js';
import '../../../node_modules/@apollo/client/utilities/common/mergeDeep.js';
import '../../../node_modules/@apollo/client/utilities/observables/Observable.js';
import '../../../node_modules/@apollo/client/utilities/observables/Concast.js';
import '../../../node_modules/@apollo/client/utilities/common/canUse.js';
import '../../../node_modules/@apollo/client/react/hooks/useQuery.js';
import '../../../node_modules/@apollo/client/react/parser/index.js';
import '../../../node_modules/@apollo/client/errors/index.js';
import '../../queries/creditCard.js';
import '../../../node_modules/country-state-city/lib/country.js';
import '../../../node_modules/country-state-city/lib/state.js';
import '../../../node_modules/country-state-city/lib/city.js';
import 'uuidv4';
import '../../config/RuntimeConfiguration.js';
import '../../config/paymentConfiguration.js';
import '../../queries/invoiceDetails.js';
import '../../queries/Payment.js';
import CostBreakDown from './CostBreakDown.js';

const CostBreakdownContainer = () => {
    const { taxes, collectionData } = useBilling();
    const { taxData, collection } = usePaymentInfo();
    return (React__default.createElement(CostBreakDown, { taxes: taxData !== null && taxData !== void 0 ? taxData : taxes, collectionData: collection !== null && collection !== void 0 ? collection : collectionData }));
};

export { CostBreakdownContainer as default };
//# sourceMappingURL=index.js.map
