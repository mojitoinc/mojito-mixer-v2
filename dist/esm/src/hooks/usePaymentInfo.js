import { CookieService } from '../service/CookieService.js';
import { useState, useEffect } from 'react';

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
    const [paymentData, setPaymentData] = useState();
    useEffect(() => {
        const billing = CookieService.billing.getValue();
        const payment = CookieService.paymentInfo.getValue();
        const taxes = CookieService.taxes.getValue();
        const reserveLotData = CookieService.reserveLotData.getValue();
        const collectionData = CookieService.collectionData.getValue();
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

export { usePaymentInfo as default };
//# sourceMappingURL=usePaymentInfo.js.map
