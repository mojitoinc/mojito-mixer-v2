import Cookies from 'universal-cookie';

class CookieStorage {
  key: string;

  cookies:Cookies;

  constructor(key: string) {
    this.key = key;
    this.cookies = new Cookies();
  }

  setValue = (value: any) => {
    this.cookies.set(this.key, value, {
      maxAge: 5 * 60,
    });
  };

  getValue = () => {
    if (typeof window !== 'undefined') {
      return this.cookies.get(this.key);
    }
    return undefined;
  };

  remove = () => {
    this.cookies.remove(this.key, { path: '/' });
  };
}

export const CookieService = {
  billing: new CookieStorage('billing'),
  paymentInfo: new CookieStorage('payment-info'),
  taxes: new CookieStorage('taxes'),
  reserveLotData: new CookieStorage('reserveLotData'),
  collectionData: new CookieStorage('collectionData'),
};
