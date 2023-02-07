/// <reference types="react" />
interface ConfigurationType {
    billing?: {
        hideExpressCheckout?: boolean;
        expressCheckoutConfig?: {
            gpay?: boolean;
            applepay?: boolean;
            walletConnect?: boolean;
            metaMask?: boolean;
        };
        paymentMethods?: {
            gpay?: boolean;
            applepay?: boolean;
            walletConnect?: boolean;
            wire?: boolean;
            creditCard?: boolean;
        };
        showDiscountCode?: boolean;
    };
    paymentConfiguration?: {
        wireTransferInstructions?: JSX.Element;
        creditCardInstructions?: JSX.Element;
        onClickGoToMarketPlace?: () => void;
    };
}

interface CollectionDetails {
    id?: string;
    startDate?: Date;
    endDate?: Date;
    unitPrice?: number;
    totalUnits?: number;
    totalAvailableUnits?: number;
    remainingCount?: number;
    sortNumber?: number;
    __typename?: string;
}
interface CollectionItem {
    id?: string;
    marketplaceTokenId?: string;
    collectionId?: string;
    saleType?: string;
    name?: string;
    slug?: string;
    details?: CollectionDetails;
    __typename?: string;
}

interface VerifiedAddress {
    street1: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    __typename: string;
}
interface Taxes {
    verifiedAddress: VerifiedAddress;
    taxablePrice: number;
    totalTaxAmount: number;
    totalTaxedPrice: number;
    __typename: string;
}

interface BillingDetails {
    name: string;
    city: string;
    country: string;
    address1: string;
    address2: string;
    district: string;
    postalCode: string;
    __typename: string;
}
interface Metadata {
    email: string;
    phoneNumber: string;
    __typename: string;
}
interface BankAddress {
    bankName: string;
    address1: string;
    address2: string;
    country: string;
    district: string;
    city: string;
    __typename: string;
}
interface PaymentMethod {
    id: string;
    type: string;
    status: string;
    __typename: string;
    description?: string;
    bankAddress?: BankAddress;
    billingDetails?: BillingDetails;
    network?: string;
    last4Digit?: string;
    metadata?: Metadata;
}

interface CreditCardFormType {
    isNew: boolean;
    expiry?: string;
    cvv?: string;
    firstName?: string;
    cardNumber?: string;
    lastName?: string;
    cardId?: string;
    save?: boolean;
    cardData?: PaymentMethod;
}

interface Item {
    units: number;
    unitPrice: number;
    taxes: number;
    totalPrice: number;
    invoiceItemID: string;
    __typename: string;
}
interface ReserveNow {
    invoiceID: string;
    status: string;
    items: Item[];
    __typename: string;
}

interface ThemeFont {
    primary?: string;
    secondary?: string;
}
interface ConfirmationColors {
    processedBackground?: string;
    processedTextColor?: string;
    awaitingPaymentBackground?: string;
    awaitingPaymentTextColor?: string;
    copyIconColor?: string;
}
interface CheckOutColor {
    continueButtonBackground?: string;
    continueButtonTextColor?: string;
}
interface CostBreakDownColors {
    applyButtonBackground?: string;
    applyButtonTextColor?: string;
}
interface ThemeColor {
    primary?: string;
    secondary?: string;
    background?: string;
    errorBackground?: string;
    text?: string;
    cardBackground?: string;
    checkOutColors?: CheckOutColor;
    costBreakDownColors?: CostBreakDownColors;
    confirmationColors?: ConfirmationColors;
    placeholder?: string;
}
interface ThemeConfiguration {
    color?: ThemeColor;
    font?: ThemeFont;
}

interface BillingFormData {
    email?: string;
    country?: string;
    state?: string;
    city?: string;
    postalCode?: string;
    phoneNumber?: string;
    street1?: string;
    name?: string;
}

interface Delivery {
    orgId?: string;
    lotId?: string;
    quantity?: number;
    paymentId?: string;
    collectionItemId?: string;
    invoiceId?: string;
}

interface PaymentData {
    creditCardData?: CreditCardFormType;
    wireData?: {
        accountNumber: string;
        routingNumber: string;
        bankAddress: {
            bankName: string;
            country: string;
        };
    };
    paymentId?: string;
    paymentType?: string;
    destinationAddress?: string;
    deliveryStatus?: string;
    sessionKey?: string;
}

declare const RuntimeConfiguration: {
    baseURL: string | undefined;
    AUTH0_DOMAIN: string | undefined;
    AUTH0_CLIENT_ID: string | undefined;
    AUTH0_REDIRECT_URI: string | undefined;
    API_HOST_URL: string | undefined;
};

declare const DefaultThemes: ThemeConfiguration;

type SardineEnvironment = 'production' | 'sandbox';
declare const SardineConfig: {
    sandbox: {
        host: string;
    };
    production: {
        host: string;
    };
};

declare const creditCardInstructions: JSX.Element;
declare const wireTransferInstructions: JSX.Element;

declare const THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY = "paymentId";

declare global {
    interface Window {
        _Sardine: any;
    }
}
interface MojitoCheckoutProps {
    uiConfiguration?: ConfigurationType;
    deliveryConfiguration: Delivery;
    theme?: ThemeConfiguration;
    show: boolean;
    debug?: boolean;
    sardineEnvironment?: SardineEnvironment;
    enableSardine?: boolean;
}
declare const MojitoCheckout: ({ uiConfiguration, theme, show, debug, deliveryConfiguration, enableSardine, sardineEnvironment, }: MojitoCheckoutProps) => JSX.Element;

interface PaymentInfo {
    billingInfo?: BillingFormData;
    paymentInfo?: PaymentData;
    lotData?: ReserveNow;
    taxData?: Taxes;
    collection?: CollectionItem;
}
declare const usePaymentInfo: () => PaymentInfo;

export { DefaultThemes, MojitoCheckout, RuntimeConfiguration, SardineConfig, SardineEnvironment, THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY, creditCardInstructions, usePaymentInfo, wireTransferInstructions };
