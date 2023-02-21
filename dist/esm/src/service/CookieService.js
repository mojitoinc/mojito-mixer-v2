import Cookies from '../../node_modules/universal-cookie/es6/Cookies.js';

class CookieStorage {
    constructor(key) {
        this.setValue = (value) => {
            this.cookies.set(this.key, value, {
                maxAge: 5 * 60,
            });
        };
        this.getValue = () => {
            if (typeof window !== 'undefined') {
                return this.cookies.get(this.key);
            }
            return undefined;
        };
        this.remove = () => {
            this.cookies.remove(this.key, { path: '/' });
        };
        this.key = key;
        this.cookies = new Cookies();
    }
}
const CookieService = {
    billing: new CookieStorage('billing'),
    paymentInfo: new CookieStorage('payment-info'),
    taxes: new CookieStorage('taxes'),
    reserveLotData: new CookieStorage('reserveLotData'),
    collectionData: new CookieStorage('collectionData'),
    paymentResult: new CookieStorage('paymentResult'),
    quantity: new CookieStorage('quantity'),
    vertexEnabled: new CookieStorage('vertexEnabled'),
    taxablePrice: new CookieStorage('taxablePrice'),
};

export { CookieService };
//# sourceMappingURL=CookieService.js.map
