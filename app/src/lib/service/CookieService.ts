const getCookies = (): Record<string, string> => {
  if (typeof document === 'undefined') return {};

  return Object.fromEntries(
    document.cookie.split('; ').map((cookie) => {
      return cookie.split('=');
    }),
  );
};

class CookieStorage {
  key: string;


  constructor(key: string) {
    this.key = key;
  }

  setValue = (value: any) => {
    const date = new Date();
    date.setTime(date.getTime() + (60 * 15 * 1000));
    document.cookie = `${ this.key } = ${ value }; expires = ${ date.toUTCString() }`;
  };

  getValue = () => {
    const cookies = getCookies();
    return cookies[this.key];
  };

  remove = () => {
    document.cookie = `${ this.key } =  ; expires = Thu, 01 Jan 1970 00:00:00 UTC`;
  };
}

export const CookieService = {
  billing: new CookieStorage('billing'),
  paymentInfo: new CookieStorage('payment-info'),
  taxes: new CookieStorage('taxes'),
  reserveLotData: new CookieStorage('reserveLotData'),
  collectionData: new CookieStorage('collectionData'),
  paymentResult: new CookieStorage('paymentResult'),
  quantity: new CookieStorage('quantity'),
  txHash: new CookieStorage('txHash'),
  vertexEnabled: new CookieStorage('vertexEnabled'),
  taxablePrice: new CookieStorage('taxablePrice'),
};
