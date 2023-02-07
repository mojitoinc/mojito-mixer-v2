'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var CookieService = require('../service/CookieService.js');
var React = require('react');

const getObject = (value) => {
    if (!value || value === 'undefined')
        return value;
    if (typeof value === 'object')
        return value;
    if (typeof value === 'string')
        return JSON.parse(value);
    return undefined;
};
const usePaymentInfo = () => {
    const [paymentData, setPaymentData] = React.useState();
    React.useEffect(() => {
        const billing = CookieService.CookieService.billing.getValue();
        const payment = CookieService.CookieService.paymentInfo.getValue();
        const taxes = CookieService.CookieService.taxes.getValue();
        const reserveLotData = CookieService.CookieService.reserveLotData.getValue();
        const collectionData = CookieService.CookieService.collectionData.getValue();
        const billingInfo = getObject(billing);
        const paymentInfo = getObject(payment);
        const lotData = getObject(reserveLotData);
        const taxData = getObject(taxes);
        const collection = getObject(collectionData);
        setPaymentData({
            billingInfo,
            paymentInfo,
            lotData,
            taxData,
            collection,
        });
    }, []);
    return Object.assign({}, paymentData);
};

exports["default"] = usePaymentInfo;
//# sourceMappingURL=usePaymentInfo.js.map
