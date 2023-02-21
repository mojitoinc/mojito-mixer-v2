import React__default, { useMemo } from 'react';
import usePaymentInfo from '../../hooks/usePaymentInfo.js';
import '../../providers/DebugProvider.js';
import '../../providers/ErrorProvider.js';
import { useBilling } from '../../providers/BillingProvider.js';
import { useContainer } from '../../providers/ContainerStateProvider.js';
import '../../providers/UIConfigurationProvider.js';
import { useCheckout } from '../../providers/CheckoutProvider.js';
import '../../providers/PaymentProvider.js';
import '../../providers/EventProvider.js';
import '../../providers/SecurityOptionsProvider.js';
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
import 'uuidv4';
import '../../config/paymentConfiguration.js';
import '../../queries/invoiceDetails.js';
import '../../queries/Payment.js';
import CostBreakDown from './CostBreakDown.js';
import { ContainerTypes } from '../../interfaces/ContextInterface/RootContainer.js';

const CostBreakdownContainer = () => {
    const { taxes, collectionData } = useBilling();
    const { quantity, vertexEnabled } = useCheckout();
    const { taxablePrice } = useBilling();
    const { taxData, collection, vertexEnabled: vertex, taxablePrice: price, quantity: totalQuanity } = usePaymentInfo();
    const { containerState } = useContainer();
    const isConfirmation = useMemo(() => {
        return containerState === ContainerTypes.CONFIRMATION;
    }, [containerState]);
    return (React__default.createElement(CostBreakDown, { taxes: isConfirmation ? taxData : taxes, collectionData: isConfirmation ? collection : collectionData, quantity: isConfirmation ? totalQuanity : quantity, taxablePrice: isConfirmation ? price : taxablePrice, vertexEnabled: isConfirmation ? vertex : vertexEnabled }));
};

export { CostBreakdownContainer as default };
//# sourceMappingURL=index.js.map
