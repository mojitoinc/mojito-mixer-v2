import Cookies from 'universal-cookie';

class CookieStorage {
    key: string;
    cookies:Cookies;

    constructor(key: string) {
        this.key = key;
        this.cookies = new Cookies();
    }
    setValue = (value: any) => {
        this.cookies.set(this.key, value,{
            maxAge:15*60
        });
    }
    getValue = () => {
        if (typeof window !== 'undefined') {
            return this.cookies.get(this.key)
        }
    }
    remove = () => {
        this.cookies.remove(this.key);
    }
}

export const CookieService = {
    billing: new CookieStorage('billing'),
    paymentInfo: new CookieStorage('payment-info'),
    taxes: new CookieStorage('taxes'),
    reserveLotData: new CookieStorage('reserveLotData'),
};
