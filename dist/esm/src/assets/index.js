import abi from './buy.json.js';

const BASE_URL = 'https://raw.githubusercontent.com/mojitoinc/mojito-mixer-v2/develop/app/src/lib/assets/';
const logo = `${BASE_URL}logo.svg`;
const rightArrow = `${BASE_URL}arrow-right.svg`;
const background = `${BASE_URL}background.svg`;
const item = `${BASE_URL}item.svg`;
const gpay = `${BASE_URL}gpay.svg`;
const applepay = `${BASE_URL}applepay.svg`;
const metamask = `${BASE_URL}metamask.svg`;
const walletConnect = `${BASE_URL}wallet-connect.svg`;
const wireTransfer = `${BASE_URL}wiretransfer.svg`;
const lock = `${BASE_URL}lock.svg`;
const creditCards = `${BASE_URL}creditcards.svg`;
const gpayDark = `${BASE_URL}gpay-dark.svg`;
const applepayDark = `${BASE_URL}applepay-dark.svg`;
const visaCard = `${BASE_URL}visa.svg`;
const masterCard = `${BASE_URL}masterCard.svg`;
const americanExpress = `${BASE_URL}americanExpress.svg`;
const loading = `${BASE_URL}loading.svg`;
const walletAddress = `${BASE_URL}walletAddress.svg`;
const coinbase = require('./coinbase.svg');
const DEFAULT_ERROR_IMAGE_SRC = 'https://raw.githubusercontent.com/mojitoinc/mojito-mixers/main/app/src/lib/assets/mojito-error-loader.gif';
const circle = 'https://raw.githubusercontent.com/mojitoinc/mojito-mixers/main/app/src/lib/assets/circle.png';
const Icons = {
    logo,
    rightArrow,
    background,
    item,
    gpay,
    applepay,
    metamask,
    walletConnect,
    wireTransfer,
    lock,
    creditCards,
    gpayDark,
    applepayDark,
    visaCard,
    masterCard,
    americanExpress,
    loading,
    ErrorLoader: DEFAULT_ERROR_IMAGE_SRC,
    walletAddress,
    circle,
    coinbase,
};
const Assets = {
    abi,
};

export { Assets, DEFAULT_ERROR_IMAGE_SRC, Icons };
//# sourceMappingURL=index.js.map
