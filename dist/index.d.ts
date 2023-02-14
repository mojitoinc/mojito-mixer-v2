/// <reference types="react" />
import React, { ErrorInfo } from 'react';
import { Theme, ThemeOptions } from '@mui/material/styles';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

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
    cardNumber?: string;
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

interface Font {
    primary: string;
    secondary: string;
}
interface PaymentConfirmationColor {
    processedBackground: string;
    processedTextColor: string;
    awaitingPaymentBackground: string;
    awaitingPaymentTextColor: string;
    copyIconColor: string;
}
interface CheckoutColor {
    continueButtonBackground: string;
    continueButtonTextColor: string;
}
interface CostBreakDownColor {
    applyButtonBackground: string;
    applyButtonTextColor: string;
}
interface Color {
    primary: string;
    secondary: string;
    background: string;
    errorBackground: string;
    text: string;
    cardBackground: string;
    placeholder: string;
    checkout: CheckoutColor;
    costBreakdown: CostBreakDownColor;
    paymentConfirmation: PaymentConfirmationColor;
}
interface ThemeConfiguration {
    color: Color;
    font: Font;
}

interface MojitoFont {
    primary?: string;
    secondary?: string;
}
interface MojitoPaymentConfirmationColor {
    processedBackground?: string;
    processedTextColor?: string;
    awaitingPaymentBackground?: string;
    awaitingPaymentTextColor?: string;
    copyIconColor?: string;
}
interface MojitoCheckoutColor {
    continueButtonBackground?: string;
    continueButtonTextColor?: string;
}
interface MojitoCostBreakDownColor {
    applyButtonBackground?: string;
    applyButtonTextColor?: string;
}
interface MojitoColor {
    primary?: string;
    secondary?: string;
    background?: string;
    errorBackground?: string;
    text?: string;
    cardBackground?: string;
    placeholder?: string;
    checkout?: MojitoCheckoutColor;
    costBreakdown?: MojitoCostBreakDownColor;
    paymentConfirmation?: MojitoPaymentConfirmationColor;
}
interface MojitoThemeConfiguration {
    color?: MojitoColor;
    font?: MojitoFont;
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
    firstName?: string;
    lastName?: string;
}

interface CheckoutOptions {
    orgId?: string;
    lotId?: string;
    quantity?: number;
    paymentId?: string;
    collectionItemId?: string;
    invoiceId?: string;
    discountCode?: string;
    vertexEnabled?: boolean;
}

interface MojitoUIConfiguration {
    global?: {
        logoSrc?: string;
        loaderImageSrc?: string;
        errorImageSrc?: string;
    };
    billing?: {
        isEnableExpressCheckout?: boolean;
        gpay?: boolean;
        applepay?: boolean;
        walletConnect?: boolean;
        metaMask?: boolean;
    };
    payment?: {
        gpay?: boolean;
        applepay?: boolean;
        walletConnect?: boolean;
        wire?: boolean;
        creditCard?: boolean;
    };
    costBreakdown?: {
        showDiscountCode?: boolean;
    };
    paymentConfirmation?: {
        wireTransferInstructions?: JSX.Element;
        creditCardInstructions?: JSX.Element;
        onGoTo?: () => void;
    };
    delivery?: {
        showConnectWallet?: boolean;
    };
}
interface UIConfiguration {
    global: {
        logoSrc: string;
        loaderImageSrc: string;
        errorImageSrc: string;
    };
    billing: {
        isEnableExpressCheckout: boolean;
        gpay: boolean;
        applepay: boolean;
        walletConnect: boolean;
        metaMask: boolean;
    };
    payment: {
        gpay: boolean;
        applepay: boolean;
        walletConnect: boolean;
        wire: boolean;
        creditCard: boolean;
    };
    costBreakdown: {
        showDiscountCode: boolean;
    };
    paymentConfirmation: {
        wireTransferInstructions: JSX.Element;
        creditCardInstructions: JSX.Element;
        onGoTo: () => void;
    };
    delivery: {
        showConnectWallet: boolean;
    };
}

interface PaymentData {
    creditCardData?: CreditCardFormType;
    wireData?: {
        accountNumber: string;
        routingNumber: string;
        iban: string;
        bankAddress: {
            bankName: string;
            country: string;
            city: string;
        };
        country: string;
    };
    paymentId?: string;
    paymentType?: string;
    destinationAddress?: string;
    deliveryStatus?: string;
    sessionKey?: string;
}

interface EventConfig {
    onError?: (e: any) => void;
    onEvent?: (e: any) => void;
    onCatch?: (e: any) => void;
}

declare const DefaultThemes: ThemeConfiguration;

type SardineEnvironment = 'production' | 'sandbox';

declare const THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY = "paymentId";

interface AuthorizedApolloProviderProps {
    apolloClient?: ApolloClient<NormalizedCacheObject> | null | undefined;
    uri?: string | undefined;
    getAuthenticationToken?: (() => Promise<string | undefined>) | null | undefined;
    children?: React.ReactNode;
}

interface CommonProviderProps {
    onCatch?: (error: Error, errorInfo?: ErrorInfo) => void | true;
}
interface ThemeProviderProps extends CommonProviderProps {
    theme?: Theme | undefined;
    themeOptions?: ThemeOptions | undefined;
}
type ProvidersInjectorProps = ThemeProviderProps & AuthorizedApolloProviderProps;

declare global {
    interface Window {
        _Sardine: any;
    }
}
interface MojitoCheckoutProps {
    uiConfiguration?: MojitoUIConfiguration;
    checkoutOptions: CheckoutOptions;
    theme?: MojitoThemeConfiguration;
    success?: boolean;
    show: boolean;
    debug?: boolean;
    sardineEnvironment?: SardineEnvironment;
    enableSardine?: boolean;
    events?: EventConfig;
}
type PUICheckoutProps = MojitoCheckoutProps & ProvidersInjectorProps;
declare const PUIMojitoCheckout: React.FC<PUICheckoutProps>;

interface PaymentInfo {
    billingInfo?: BillingFormData;
    paymentInfo?: PaymentData;
    lotData?: ReserveNow;
    taxData?: Taxes;
    collection?: CollectionItem;
}
declare const usePaymentInfo: () => PaymentInfo;

export { CheckoutColor, CheckoutOptions, Color, CostBreakDownColor, DefaultThemes, Font, PUIMojitoCheckout as MojitoCheckout, PUICheckoutProps, PaymentConfirmationColor, THREEDS_FLOW_SEARCH_PARAM_SUCCESS_KEY, ThemeConfiguration, UIConfiguration, usePaymentInfo };
