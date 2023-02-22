import { __awaiter } from '../../../node_modules/tslib/tslib.es6.js';
import React__default, { useState, useCallback, useEffect } from 'react';
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
import { useQuery } from '../../../node_modules/@apollo/client/react/hooks/useQuery.js';
import { paymentMethodsQuery } from '../../queries/billing.js';
import { PaymentTypes } from '../../constants/index.js';
import { ContainerTypes } from '../../interfaces/ContextInterface/RootContainer.js';
import '../../providers/DebugProvider.js';
import '../../providers/ErrorProvider.js';
import { useBilling } from '../../providers/BillingProvider.js';
import { useContainer } from '../../providers/ContainerStateProvider.js';
import { useUIConfiguration } from '../../providers/UIConfigurationProvider.js';
import { useCheckout } from '../../providers/CheckoutProvider.js';
import { usePayment } from '../../providers/PaymentProvider.js';
import '../../providers/EventProvider.js';
import { useSecurityOptions } from '../../providers/SecurityOptionsProvider.js';
import '../../providers/UserInfoProvider.js';
import { formCardScreeningVariable } from '../Delivery/Delivery.service.js';
import { cardScreeningQuery } from '../../queries/creditCard.js';
import { meQuery } from '../../queries/me.js';
import PaymentContainer$1 from './PaymentContainer.js';
import { Countries } from './WireTransferForm.js';

const PaymentContainer = () => {
    const { orgId } = useCheckout();
    const { setPaymentInfo, paymentInfo, paymentMethods } = usePayment();
    const { setContainerState } = useContainer();
    const { billingInfo, taxes } = useBilling();
    const uiConfiguration = useUIConfiguration();
    const [paymentType, setPaymentType] = useState(PaymentTypes.CREDIT_CARD);
    const onChoosePaymentType = useCallback((name, value) => {
        if (value)
            setPaymentType(name);
    }, []);
    const { enableSardine } = useSecurityOptions();
    useEffect(() => {
        var _a;
        setPaymentType((_a = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) !== null && _a !== void 0 ? _a : PaymentTypes.CREDIT_CARD);
    }, [paymentInfo]);
    const { data: paymentData } = useQuery(paymentMethodsQuery, {
        variables: {
            orgID: orgId,
        },
    });
    const [cardScreening] = useLazyQuery(cardScreeningQuery);
    const { data: meData } = useQuery(meQuery);
    const [creditCardList, setCreditCardList] = useState([]);
    const [screeningError, setScreeningError] = useState();
    useEffect(() => {
        var _a;
        if (paymentData) {
            const creditCards = (_a = paymentData === null || paymentData === void 0 ? void 0 : paymentData.getPaymentMethodList) === null || _a === void 0 ? void 0 : _a.filter((item) => item.type === 'CreditCard');
            const filteredCreditCards = creditCards.filter((item, index, array) => index ===
                array.findIndex(foundItem => foundItem.last4Digit === item.last4Digit &&
                    foundItem.network === item.network));
            setCreditCardList(filteredCreditCards);
        }
    }, [paymentData]);
    const onSubmitCreditCard = useCallback((creditCardFormValues) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        console.log('creditCardFormValues', { creditCardFormValues });
        const selectedCard = creditCardList.find((item) => item.id === (creditCardFormValues === null || creditCardFormValues === void 0 ? void 0 : creditCardFormValues.cardId));
        const paymentInfoData = Object.assign(Object.assign({}, paymentInfo), { paymentType, creditCardData: Object.assign(Object.assign({}, creditCardFormValues), { cardData: selectedCard }) });
        try {
            if ((creditCardFormValues === null || creditCardFormValues === void 0 ? void 0 : creditCardFormValues.isNew) && enableSardine) {
                const variables = formCardScreeningVariable(orgId !== null && orgId !== void 0 ? orgId : '', paymentInfoData, billingInfo, taxes, meData);
                const cardScreeningData = yield cardScreening({
                    variables,
                });
                if (((_b = (_a = cardScreeningData.data) === null || _a === void 0 ? void 0 : _a.cardScreening) === null || _b === void 0 ? void 0 : _b.level) !== 'high') {
                    setPaymentInfo(paymentInfoData);
                    setContainerState(ContainerTypes.DELIVERY);
                }
                else {
                    setScreeningError('Please enter a valid card number.');
                }
            }
            else {
                setPaymentInfo(paymentInfoData);
                setContainerState(ContainerTypes.DELIVERY);
            }
        }
        catch (e) {
            console.error('ERROR', e);
        }
    }), [
        creditCardList,
        paymentInfo,
        paymentType,
        orgId,
        billingInfo,
        taxes,
        meData,
        cardScreening,
        setContainerState,
        setPaymentInfo,
        enableSardine,
    ]);
    const onSubmitWireTransfer = useCallback((wireTransferFormValues) => {
        setPaymentInfo(Object.assign(Object.assign({}, paymentInfo), { paymentType, wireData: {
                accountNumber: wireTransferFormValues.accountNumber.split(' ').join(''),
                routingNumber: wireTransferFormValues.aba.split(' ').join(''),
                iban: wireTransferFormValues.iban.split(' ').join(''),
                bankAddress: {
                    bankName: wireTransferFormValues.bankName,
                    country: wireTransferFormValues.country === Countries.US ? Countries.US : wireTransferFormValues.bankCountry,
                    city: wireTransferFormValues.city,
                },
                country: wireTransferFormValues.country,
            } }));
        setContainerState(ContainerTypes.DELIVERY);
    }, [
        paymentInfo,
        setPaymentInfo,
        paymentType,
        setContainerState,
    ]);
    return (React__default.createElement(PaymentContainer$1, { paymentType: paymentType, onChoosePaymentType: onChoosePaymentType, creditCardList: creditCardList, config: uiConfiguration === null || uiConfiguration === void 0 ? void 0 : uiConfiguration.payment, billingInfo: billingInfo, paymentMethodLimit: paymentMethods, screeningError: screeningError, paymentInfo: paymentInfo, onSubmitWireTransfer: onSubmitWireTransfer, onSubmitCreditCard: onSubmitCreditCard }));
};

export { PaymentContainer };
//# sourceMappingURL=index.js.map
