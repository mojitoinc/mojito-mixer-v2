import React__default, { useState, useEffect } from 'react';
import '../../../node_modules/@apollo/client/core/index.js';
import '../../../node_modules/@apollo/client/utilities/globals/index.js';
import '../../../node_modules/@apollo/client/utilities/graphql/storeUtils.js';
import '../../../node_modules/@apollo/client/utilities/graphql/transform.js';
import '../../../node_modules/@apollo/client/utilities/common/mergeDeep.js';
import '../../../node_modules/@apollo/client/utilities/observables/Observable.js';
import '../../../node_modules/@apollo/client/utilities/observables/Concast.js';
import '../../../node_modules/@apollo/client/utilities/common/canUse.js';
import { useQuery } from '../../../node_modules/@apollo/client/react/hooks/useQuery.js';
import '../../../node_modules/@apollo/client/react/parser/index.js';
import '../../../node_modules/@apollo/client/errors/index.js';
import { paymentMethodsQuery } from '../../queries/billing.js';
import '../../providers/DebugProvider.js';
import '../../providers/ErrorProvider.js';
import '../../providers/BillingProvider.js';
import '../../providers/ContainerStateProvider.js';
import '../../providers/ConfigurationProvider.js';
import { useDelivery } from '../../providers/DeliveryProvider.js';
import { usePayment } from '../../providers/PaymentProvider.js';
import ConfirmationView from './ConfirmationView.js';

const PaymentConfirmationContainer = () => {
    const { orgId } = useDelivery();
    const { paymentInfo } = usePayment();
    const [paymentStatus, setPaymentStatus] = useState('');
    const { data: paymentMethodsData } = useQuery(paymentMethodsQuery, {
        variables: {
            orgID: orgId,
        },
        fetchPolicy: 'no-cache',
        skip: !orgId,
    });
    useEffect(() => {
        var _a;
        if (paymentMethodsData === null || paymentMethodsData === void 0 ? void 0 : paymentMethodsData.getPaymentMethodList) {
            const filteredData = paymentMethodsData === null || paymentMethodsData === void 0 ? void 0 : paymentMethodsData.getPaymentMethodList.filter((item) => item.id === (paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentId));
            setPaymentStatus((_a = filteredData[0]) === null || _a === void 0 ? void 0 : _a.status);
        }
    }, [paymentMethodsData, paymentInfo]);
    return (React__default.createElement(ConfirmationView, { paymentStatus: paymentStatus }));
};

export { PaymentConfirmationContainer as default };
//# sourceMappingURL=index.js.map
