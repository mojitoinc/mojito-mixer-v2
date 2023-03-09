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
import ConfirmationView from './ConfirmationView.js';
import { invoiceDetailsQuery } from '../../queries/invoiceDetails.js';
import usePaymentInfo from '../../hooks/usePaymentInfo.js';
import '../../providers/DebugProvider.js';
import '../../providers/ErrorProvider.js';
import '../../providers/BillingProvider.js';
import '../../providers/ContainerStateProvider.js';
import '../../providers/UIConfigurationProvider.js';
import '../../providers/CheckoutProvider.js';
import '../../providers/PaymentProvider.js';
import '../../providers/EventProvider.js';
import '../../providers/SecurityOptionsProvider.js';
import '../../providers/UserInfoProvider.js';
import 'openpgp';
import 'atob';
import 'btoa';
import '../../queries/creditCard.js';
import 'uuidv4';
import '../../config/paymentConfiguration.js';
import '../../queries/Payment.js';

const PaymentConfirmationContainer = () => {
    const { lotData } = usePaymentInfo();
    const [paymentStatus, setPaymentStatus] = useState('');
    const { data: invoiceData } = useQuery(invoiceDetailsQuery, {
        variables: {
            invoiceID: lotData === null || lotData === void 0 ? void 0 : lotData.invoiceID,
        },
        skip: !(lotData === null || lotData === void 0 ? void 0 : lotData.invoiceID),
        fetchPolicy: 'network-only',
    });
    console.log('invoiceData?.getInvoiceDetails?.status', invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.getInvoiceDetails.status);
    useEffect(() => {
        if (invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.getInvoiceDetails) {
            setPaymentStatus(invoiceData === null || invoiceData === void 0 ? void 0 : invoiceData.getInvoiceDetails.status);
        }
    }, [invoiceData]);
    return (React__default.createElement(ConfirmationView, { paymentStatus: paymentStatus }));
};

export { PaymentConfirmationContainer as default };
//# sourceMappingURL=index.js.map
