import { useState, useEffect } from 'react';
import { CookieService } from '../service/CookieService.js';

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
    const [paymentData, setPaymentData] = useState();
    useEffect(() => {
        const billing = CookieService.billing.getValue();
        const payment = CookieService.paymentInfo.getValue();
        const taxes = CookieService.taxes.getValue();
        const reserveLotData = CookieService.reserveLotData.getValue();
        const collectionData = CookieService.collectionData.getValue();
        const paymentResultData = CookieService.paymentResult.getValue();
        const price = CookieService.taxablePrice.getValue();
        const vertex = CookieService.vertexEnabled.getValue();
        const totalQuantity = CookieService.quantity.getValue();
        const billingInfo = getObject(billing);
        const paymentInfo = getObject(payment);
        const lotData = getObject(reserveLotData);
        const taxData = getObject(taxes);
        const collection = getObject(collectionData);
        const paymentResult = getObject(paymentResultData);
        const taxablePrice = Number(getObject(price));
        const vertexEnabled = Boolean(getObject(vertex));
        const quantity = Number(getObject(totalQuantity));
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
        });
    }, []);
    return Object.assign({}, paymentData);
};

export { usePaymentInfo as default };
//# sourceMappingURL=usePaymentInfo.js.map
