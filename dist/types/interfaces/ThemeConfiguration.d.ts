export interface MojitoFont {
    primary?: string;
    secondary?: string;
}
export interface PaymentConfirmationColor {
    processedBackground?: string;
    processedTextColor?: string;
    awaitingPaymentBackground?: string;
    awaitingPaymentTextColor?: string;
    copyIconColor?: string;
}
export interface CheckoutColor {
    continueButtonBackground?: string;
    continueButtonTextColor?: string;
}
export interface CostBreakDownColor {
    applyButtonBackground?: string;
    applyButtonTextColor?: string;
}
export interface MojitoColor {
    primary?: string;
    secondary?: string;
    background?: string;
    errorBackground?: string;
    text?: string;
    cardBackground?: string;
    placeholder?: string;
    checkout?: CheckoutColor;
    costBreakdown?: CostBreakDownColor;
    paymentConfirmation?: PaymentConfirmationColor;
}
export interface ThemeConfiguration {
    color?: MojitoColor;
    font?: MojitoFont;
}
