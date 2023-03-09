'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
require('../../../node_modules/@apollo/client/core/index.js');
require('../../../node_modules/@apollo/client/utilities/globals/index.js');
require('../../../node_modules/@apollo/client/utilities/graphql/storeUtils.js');
require('../../../node_modules/@apollo/client/utilities/graphql/transform.js');
require('../../../node_modules/@apollo/client/utilities/common/mergeDeep.js');
require('../../../node_modules/@apollo/client/utilities/observables/Observable.js');
require('../../../node_modules/@apollo/client/utilities/observables/Concast.js');
require('../../../node_modules/@apollo/client/utilities/common/canUse.js');
var useLazyQuery = require('../../../node_modules/@apollo/client/react/hooks/useLazyQuery.js');
require('../../../node_modules/@apollo/client/react/parser/index.js');
require('../../../node_modules/@apollo/client/errors/index.js');
var useQuery = require('../../../node_modules/@apollo/client/react/hooks/useQuery.js');
var billing = require('../../queries/billing.js');
var index = require('../../constants/index.js');
var RootContainer = require('../../interfaces/ContextInterface/RootContainer.js');
require('../../providers/DebugProvider.js');
require('../../providers/ErrorProvider.js');
var BillingProvider = require('../../providers/BillingProvider.js');
var ContainerStateProvider = require('../../providers/ContainerStateProvider.js');
var UIConfigurationProvider = require('../../providers/UIConfigurationProvider.js');
var CheckoutProvider = require('../../providers/CheckoutProvider.js');
var PaymentProvider = require('../../providers/PaymentProvider.js');
require('../../providers/EventProvider.js');
var SecurityOptionsProvider = require('../../providers/SecurityOptionsProvider.js');
require('../../providers/UserInfoProvider.js');
var Delivery_service = require('../Delivery/Delivery.service.js');
var creditCard = require('../../queries/creditCard.js');
var me = require('../../queries/me.js');
var PaymentContainer$1 = require('./PaymentContainer.js');
var WireTransferForm = require('./WireTransferForm.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const PaymentContainer = () => {
    const { orgId } = CheckoutProvider.useCheckout();
    const { setPaymentInfo, paymentInfo, paymentMethods } = PaymentProvider.usePayment();
    const { setContainerState } = ContainerStateProvider.useContainer();
    const { billingInfo, taxes } = BillingProvider.useBilling();
    const uiConfiguration = UIConfigurationProvider.useUIConfiguration();
    const [paymentType, setPaymentType] = React.useState(index.PaymentTypes.CREDIT_CARD);
    const onChoosePaymentType = React.useCallback((name, value) => {
        if (value)
            setPaymentType(name);
    }, []);
    const { enableSardine } = SecurityOptionsProvider.useSecurityOptions();
    React.useEffect(() => {
        var _a;
        setPaymentType((_a = paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) !== null && _a !== void 0 ? _a : index.PaymentTypes.CREDIT_CARD);
    }, [paymentInfo]);
    const { data: paymentData } = useQuery.useQuery(billing.paymentMethodsQuery, {
        variables: {
            orgID: orgId,
        },
    });
    const [cardScreening] = useLazyQuery.useLazyQuery(creditCard.cardScreeningQuery);
    const { data: meData } = useQuery.useQuery(me.meQuery);
    const [creditCardList, setCreditCardList] = React.useState([]);
    const [screeningError, setScreeningError] = React.useState();
    React.useEffect(() => {
        var _a;
        if (paymentData) {
            const creditCards = (_a = paymentData === null || paymentData === void 0 ? void 0 : paymentData.getPaymentMethodList) === null || _a === void 0 ? void 0 : _a.filter((item) => item.type === 'CreditCard');
            const filteredCreditCards = creditCards.filter((item, index, array) => index ===
                array.findIndex(foundItem => foundItem.last4Digit === item.last4Digit &&
                    foundItem.network === item.network));
            setCreditCardList(filteredCreditCards);
        }
    }, [paymentData]);
    const onSubmitCreditCard = React.useCallback((creditCardFormValues) => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        console.log('creditCardFormValues', { creditCardFormValues });
        const selectedCard = creditCardList.find((item) => item.id === (creditCardFormValues === null || creditCardFormValues === void 0 ? void 0 : creditCardFormValues.cardId));
        const paymentInfoData = Object.assign(Object.assign({}, paymentInfo), { paymentType, creditCardData: Object.assign(Object.assign({}, creditCardFormValues), { cardData: selectedCard }) });
        try {
            if ((creditCardFormValues === null || creditCardFormValues === void 0 ? void 0 : creditCardFormValues.isNew) && enableSardine) {
                const variables = Delivery_service.formCardScreeningVariable(orgId !== null && orgId !== void 0 ? orgId : '', paymentInfoData, billingInfo, taxes, meData);
                const cardScreeningData = yield cardScreening({
                    variables,
                });
                if (((_b = (_a = cardScreeningData.data) === null || _a === void 0 ? void 0 : _a.cardScreening) === null || _b === void 0 ? void 0 : _b.level) !== 'high') {
                    setPaymentInfo(paymentInfoData);
                    setContainerState(RootContainer.ContainerTypes.DELIVERY);
                }
                else {
                    setScreeningError('Please enter a valid card number.');
                }
            }
            else {
                setPaymentInfo(paymentInfoData);
                setContainerState(RootContainer.ContainerTypes.DELIVERY);
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
    const onSubmitWireTransfer = React.useCallback((wireTransferFormValues) => {
        setPaymentInfo(Object.assign(Object.assign({}, paymentInfo), { paymentType, wireData: {
                accountNumber: wireTransferFormValues.accountNumber.split(' ').join(''),
                routingNumber: wireTransferFormValues.aba.split(' ').join(''),
                iban: wireTransferFormValues.iban.split(' ').join(''),
                bankAddress: {
                    bankName: wireTransferFormValues.bankName,
                    country: wireTransferFormValues.country === WireTransferForm.Countries.US ? WireTransferForm.Countries.US : wireTransferFormValues.bankCountry,
                    city: wireTransferFormValues.city,
                },
                country: wireTransferFormValues.country,
            } }));
        setContainerState(RootContainer.ContainerTypes.DELIVERY);
    }, [
        paymentInfo,
        setPaymentInfo,
        paymentType,
        setContainerState,
    ]);
    const onContinueToDelivery = React.useCallback(() => {
        setPaymentInfo(Object.assign(Object.assign({}, paymentInfo), { paymentType }));
        setContainerState(RootContainer.ContainerTypes.DELIVERY);
    }, [
        setPaymentInfo,
        paymentType,
        setContainerState,
        paymentInfo,
    ]);
    const onSubmitOnChain = React.useCallback((values) => {
        setPaymentInfo(Object.assign(Object.assign({}, paymentInfo), { paymentType, onChainPayment: Object.assign({}, values) }));
        setContainerState(RootContainer.ContainerTypes.DELIVERY);
    }, [
        paymentInfo,
        setPaymentInfo,
        paymentType,
        setContainerState,
    ]);
    return (React__default["default"].createElement(PaymentContainer$1["default"], { paymentType: paymentType, onChoosePaymentType: onChoosePaymentType, creditCardList: creditCardList, config: uiConfiguration === null || uiConfiguration === void 0 ? void 0 : uiConfiguration.payment, billingInfo: billingInfo, paymentMethodLimit: paymentMethods, screeningError: screeningError, paymentInfo: paymentInfo, onSubmitWireTransfer: onSubmitWireTransfer, onSubmitCreditCard: onSubmitCreditCard, onSubmitOnChain: onSubmitOnChain, onContinueToDelivery: onContinueToDelivery }));
};

exports.PaymentContainer = PaymentContainer;
//# sourceMappingURL=index.js.map
