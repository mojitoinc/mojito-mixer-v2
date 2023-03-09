import { __awaiter } from '../../../node_modules/tslib/tslib.es6.js';
import React__default, { useState, useCallback, useEffect, useMemo } from 'react';
import '../../../node_modules/@apollo/client/core/index.js';
import '../../../node_modules/@apollo/client/utilities/globals/index.js';
import '../../../node_modules/@apollo/client/utilities/graphql/storeUtils.js';
import '../../../node_modules/@apollo/client/utilities/graphql/transform.js';
import '../../../node_modules/@apollo/client/utilities/common/mergeDeep.js';
import '../../../node_modules/@apollo/client/utilities/observables/Observable.js';
import '../../../node_modules/@apollo/client/utilities/observables/Concast.js';
import '../../../node_modules/@apollo/client/utilities/common/canUse.js';
import { useQuery } from '../../../node_modules/@apollo/client/react/hooks/useQuery.js';
import { useMutation } from '../../../node_modules/@apollo/client/react/hooks/useMutation.js';
import '../../../node_modules/@apollo/client/react/parser/index.js';
import { meQuery } from '../../queries/me.js';
import { addressScreeningQuery } from '../../queries/Payment.js';
import { useDebug } from '../../providers/DebugProvider.js';
import '../../providers/ErrorProvider.js';
import { useBilling } from '../../providers/BillingProvider.js';
import '../../providers/ContainerStateProvider.js';
import '../../providers/UIConfigurationProvider.js';
import { useCheckout } from '../../providers/CheckoutProvider.js';
import { usePayment } from '../../providers/PaymentProvider.js';
import '../../providers/EventProvider.js';
import { useSecurityOptions } from '../../providers/SecurityOptionsProvider.js';
import '../../providers/UserInfoProvider.js';
import { PaymentTypes, RiskRating } from '../../constants/index.js';
import { useWeb3ModalConnect } from '../../providers/Web3ModalConnect.js';
import Delivery$1 from './Delivery.js';

const NEW_MULTI_SIG = 'NEW_MULTI_SIG';
const Delivery = () => {
    var _a, _b, _c;
    const debug = useDebug('Delivery');
    const [selectedDeliveryAddress, setSelectedDeliveryAddress] = useState('');
    const [walletOptions, setWalletOptions] = useState([]);
    const { billingInfo } = useBilling();
    const { orgId } = useCheckout();
    const { paymentInfo, onConfirmCreditCardPurchase, onConfirmWireTransferPurchase, onConfirmCoinbasePurchase, onConfirmOnChainPurchase } = usePayment();
    const { data: meData } = useQuery(meQuery);
    const [addressScreening, { loading: isLoading }] = useMutation(addressScreeningQuery);
    const [error, setError] = useState();
    const { enableSardine } = useSecurityOptions();
    const { connect, onWalletConnect, onDisconnect, } = useWeb3ModalConnect();
    const handleChange = useCallback((value) => {
        setSelectedDeliveryAddress(value);
    }, []);
    const formatWallets = (wallets) => {
        return wallets.map((item) => ({
            label: item.address,
            value: item.address,
        }));
    };
    useEffect(() => {
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
    const connectedWalletAddress = useMemo(() => {
        var _a;
        if ((paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) === PaymentTypes.WALLET_CONNECT)
            return (_a = paymentInfo.onChainPayment) === null || _a === void 0 ? void 0 : _a.walletAddress;
        if (connect === null || connect === void 0 ? void 0 : connect.connected)
            return connect === null || connect === void 0 ? void 0 : connect.account;
        return undefined;
    }, [connect, paymentInfo]);
    const onClickConfirmPurchase = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        var _d;
        try {
            const deliveryAddress = connectedWalletAddress !== null && connectedWalletAddress !== void 0 ? connectedWalletAddress : (selectedDeliveryAddress === NEW_MULTI_SIG ? '' : selectedDeliveryAddress);
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
                if (((_d = screeningData.data) === null || _d === void 0 ? void 0 : _d.addressScreening) === RiskRating.High) {
                    setError('Please contact support team to use this delivery address');
                    return;
                }
            }
            if ((paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) === PaymentTypes.WIRE_TRANSFER) {
                onConfirmWireTransferPurchase(deliveryAddress);
            }
            if ((paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) === PaymentTypes.CREDIT_CARD) {
                onConfirmCreditCardPurchase(deliveryAddress);
            }
            if ((paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) === PaymentTypes.COIN_BASE) {
                onConfirmCoinbasePurchase(deliveryAddress);
            }
            if ((paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paymentType) === PaymentTypes.WALLET_CONNECT) {
                onConfirmOnChainPurchase(deliveryAddress);
            }
        }
        catch (e) {
            debug.error('onConfirm-start', { e });
        }
    }), [
        debug,
        onConfirmCreditCardPurchase,
        onConfirmWireTransferPurchase,
        onConfirmCoinbasePurchase,
        onConfirmOnChainPurchase,
        paymentInfo,
        orgId,
        selectedDeliveryAddress,
        addressScreening,
        enableSardine,
        connectedWalletAddress,
    ]);
    return (React__default.createElement(Delivery$1, { onWalletChange: handleChange, walletOptions: walletOptions, selectedDeliveryAddress: selectedDeliveryAddress, onClickConfirmPurchase: onClickConfirmPurchase, organizationName: (_c = (_b = (_a = meData === null || meData === void 0 ? void 0 : meData.me) === null || _a === void 0 ? void 0 : _a.userOrgs[0]) === null || _b === void 0 ? void 0 : _b.organization) === null || _c === void 0 ? void 0 : _c.name, billingInfo: billingInfo, paymentInfo: paymentInfo, onClickConnectWallet: onWalletConnect, connectedWalletAddress: connectedWalletAddress, onDisconnect: onDisconnect, error: error, isLoading: isLoading }));
};

export { Delivery, NEW_MULTI_SIG };
//# sourceMappingURL=index.js.map
