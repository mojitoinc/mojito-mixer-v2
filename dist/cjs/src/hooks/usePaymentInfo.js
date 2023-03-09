'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var CookieService = require('../service/CookieService.js');

const getObject = (value) => {
    if (value === 'undefined')
        return undefined;
    if (typeof value !== 'string')
        return value;
    try {
        return JSON.parse(value);
    }
    catch (e) {
        return value;
    }
};
const usePaymentInfo = () => {
    const [paymentData, setPaymentData] = React.useState();
    React.useEffect(() => {
        const billing = CookieService.CookieService.billing.getValue();
        const payment = CookieService.CookieService.paymentInfo.getValue();
        const taxes = CookieService.CookieService.taxes.getValue();
        const reserveLotData = CookieService.CookieService.reserveLotData.getValue();
        const collectionData = CookieService.CookieService.collectionData.getValue();
        const paymentResultData = CookieService.CookieService.paymentResult.getValue();
        const price = CookieService.CookieService.taxablePrice.getValue();
        const vertex = CookieService.CookieService.vertexEnabled.getValue();
        const totalQuantity = CookieService.CookieService.quantity.getValue();
        const hash = CookieService.CookieService.txHash.getValue();
        const billingInfo = getObject(billing);
        const paymentInfo = getObject(payment);
        const lotData = getObject(reserveLotData);
        const taxData = getObject(taxes);
        const collection = getObject(collectionData);
        const paymentResult = getObject(paymentResultData);
        const taxablePrice = Number(getObject(price));
        const vertexEnabled = Boolean(getObject(vertex));
        const quantity = Number(getObject(totalQuantity));
        const txHash = getObject(hash);
        // CookieService.billing.remove();
        // CookieService.paymentInfo.remove();
        // CookieService.taxes.remove();
        // CookieService.reserveLotData.remove();
        // CookieService.collectionData.remove();
        setPaymentData({
            billingInfo,
            paymentInfo,
            lotData,
            taxData,
            collection,
            paymentResult,
            taxablePrice,
            vertexEnabled,
            quantity,
            txHash,
        });
    }, []);
    return Object.assign({}, paymentData);
};

exports["default"] = usePaymentInfo;
//# sourceMappingURL=usePaymentInfo.js.map
