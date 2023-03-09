'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
require('../../node_modules/ethers/lib.esm/index.js');
var index = require('../../node_modules/@ethersproject/units/lib.esm/index.js');

const getETHValueTo1USD = () => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH');
    return response.json();
});
function convertUsdToEth(price, toFixedValue = 4) {
    var _a;
    return tslib_es6.__awaiter(this, void 0, void 0, function* () {
        const ethToUsdValue = yield getETHValueTo1USD();
        const value = price * Number((_a = ethToUsdValue === null || ethToUsdValue === void 0 ? void 0 : ethToUsdValue.ETH) !== null && _a !== void 0 ? _a : 1);
        const ethValue = parseFloat(value.toFixed(toFixedValue));
        return ethValue !== null && ethValue !== void 0 ? ethValue : 0;
    });
}
const computeValue = (price) => tslib_es6.__awaiter(void 0, void 0, void 0, function* () {
    const ethValue = yield convertUsdToEth(price, 18);
    const pricePercentage = (ethValue * 1) / 100;
    const finalValue = index.parseEther((ethValue + pricePercentage).toFixed(18).toString());
    return finalValue;
});

exports.computeValue = computeValue;
exports.convertUsdToEth = convertUsdToEth;
exports.getETHValueTo1USD = getETHValueTo1USD;
//# sourceMappingURL=ethUtils.js.map
