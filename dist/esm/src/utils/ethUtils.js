import { __awaiter } from '../../node_modules/tslib/tslib.es6.js';
import '../../node_modules/ethers/lib.esm/index.js';
import { parseEther } from '../../node_modules/@ethersproject/units/lib.esm/index.js';

const getETHValueTo1USD = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH');
    return response.json();
});
function convertUsdToEth(price, toFixedValue = 4) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const ethToUsdValue = yield getETHValueTo1USD();
        const value = price * Number((_a = ethToUsdValue === null || ethToUsdValue === void 0 ? void 0 : ethToUsdValue.ETH) !== null && _a !== void 0 ? _a : 1);
        const ethValue = parseFloat(value.toFixed(toFixedValue));
        return ethValue !== null && ethValue !== void 0 ? ethValue : 0;
    });
}
const computeValue = (price) => __awaiter(void 0, void 0, void 0, function* () {
    const ethValue = yield convertUsdToEth(price, 18);
    const pricePercentage = (ethValue * 1) / 100;
    const finalValue = parseEther((ethValue + pricePercentage).toFixed(18).toString());
    return finalValue;
});

export { computeValue, convertUsdToEth, getETHValueTo1USD };
//# sourceMappingURL=ethUtils.js.map
