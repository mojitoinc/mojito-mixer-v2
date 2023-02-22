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
var useQuery = require('../../../node_modules/@apollo/client/react/hooks/useQuery.js');
var useMutation = require('../../../node_modules/@apollo/client/react/hooks/useMutation.js');
require('../../../node_modules/@apollo/client/react/parser/index.js');
var me = require('../../queries/me.js');
var Payment = require('../../queries/Payment.js');
var DebugProvider = require('../../providers/DebugProvider.js');
require('../../providers/ErrorProvider.js');
var BillingProvider = require('../../providers/BillingProvider.js');
require('../../providers/ContainerStateProvider.js');
require('../../providers/UIConfigurationProvider.js');
var CheckoutProvider = require('../../providers/CheckoutProvider.js');
var PaymentProvider = require('../../providers/PaymentProvider.js');
require('../../providers/EventProvider.js');
var SecurityOptionsProvider = require('../../providers/SecurityOptionsProvider.js');
require('../../providers/UserInfoProvider.js');
var index = require('../../constants/index.js');
var Web3ModalConnect = require('../../providers/Web3ModalConnect.js');
var Delivery$1 = require('./Delivery.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const NEW_MULTI_SIG = 'NEW_MULTI_SIG';
const Delivery = () => {
    var _a, _b, _c;
    const debug = DebugProvider.useDebug('Delivery');
    const [selectedDeliveryAddress, setSelectedDeliveryAddress] = React.useState('');
    const [walletOptions, setWalletOptions] = React.useState([]);
    const { billingInfo } = BillingProvider.useBilling();
    const { orgId } = CheckoutProvider.useCheckout();
    const { paymentInfo, onConfirmCreditCardPurchase, onConfirmWireTransferPurchase } = PaymentProvider.usePayment();
    const { data: meData } = useQuery.useQuery(me.meQuery);
    const [addressScreening, { loading: isLoading }] = useMutation.useMutation(Payment.addressScreeningQuery);
    const [error, setError] = React.useState();
    const { enableSardine } = SecurityOptionsProvider.useSecurityOptions();
    const { connect, onWalletConnect, onDisconnect, } = Web3ModalConnect.useWeb3ModalConnect();
    const handleChange = React.useCallback((value) => {
        setSelectedDeliveryAddress(value);
    }, []);
    const formatWallets = (wallets) => {
        return wallets.map((item) => ({
            label: item.address,
            value: item.address,
        }));
    };
    React.useEffect(() => {
        var _a, _b;
        let formattedWallets = [];
        if ((_a = meData === null || meData === void 0 ? void 0 : meData.me) === null || _a === void 0 ? void 0 : _a.wallets) {
            formattedWallets = formatWallets((_b = meData.me) === null || _b === void 0 ? void 0 : _b.wallets);
            formattedWallets.push({
                label: 'I don’t have a wallet / Create a new Multi-sig',
                value: NEW_MULTI_SIG,
            });
            setWalletOptions(formattedWallets);
        }
    }, [meData]);
    const onClickConfirmPurchase = React.useCallback(() => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
        var _d;
        try {
            const deliveryAddress = (connect === null || connect === void 0 ? void 0 : connect.connected) ? connect === null || connect === void 0 ? void 0 : connect.account : selectedDeliveryAddress === NEW_MULTI_SIG ? '' : selectedDeliveryAddress;
            if (!deliveryAddress && selectedDeliveryAddress !== NEW_MULTI_SIG) {
                setError('Please select a delivery address');
                return;
            }
            if (deliveryAddress !== '' && enableSardine) {
                const screeningData = yield addressScreening({
                    variables: {
                        orgID: orgId,
                        input: {
                            address: deliveryAddress,
                            network: 'ethereum',
                            asset: 'ETH',
                        },
                    },
                });
                debug.info('onConfirm-start', { screeningData, paymentInfo });
                if (((_d = screeningData.data) === null || _d === void 0 ? void 0 : _d.addressScreening) === index.RiskRating.High) {
                    setError('Please contact support team to use this delivery address');
                    return;
                }
            }
            if ((paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) === index.PaymentTypes.WIRE_TRANSFER) {
                onConfirmWireTransferPurchase(deliveryAddress);
            }
            if ((paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) === index.PaymentTypes.CREDIT_CARD) {
                onConfirmCreditCardPurchase(deliveryAddress);
            }
        }
        catch (e) {
            debug.error('onConfirm-start', { e });
        }
    }), [
        debug,
        onConfirmCreditCardPurchase,
        onConfirmWireTransferPurchase,
        paymentInfo,
        orgId,
        selectedDeliveryAddress,
        addressScreening,
        connect,
        enableSardine,
    ]);
    return (React__default["default"].createElement(Delivery$1["default"], { onWalletChange: handleChange, walletOptions: walletOptions, selectedDeliveryAddress: selectedDeliveryAddress, onClickConfirmPurchase: onClickConfirmPurchase, organizationName: (_c = (_b = (_a = meData === null || meData === void 0 ? void 0 : meData.me) === null || _a === void 0 ? void 0 : _a.userOrgs[0]) === null || _b === void 0 ? void 0 : _b.organization) === null || _c === void 0 ? void 0 : _c.name, billingInfo: billingInfo, paymentInfo: paymentInfo, onClickConnectWallet: onWalletConnect, connect: connect, onDisconnect: onDisconnect, error: error, isLoading: isLoading }));
};

exports.Delivery = Delivery;
exports.NEW_MULTI_SIG = NEW_MULTI_SIG;
//# sourceMappingURL=index.js.map
