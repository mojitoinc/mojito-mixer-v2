export interface MojitoFont {
    primary?: string;
    secondary?: string;
}
export interface MojitoPaymentConfirmationColor {
    processedBackground?: string;
    processedTextColor?: string;
    awaitingPaymentBackground?: string;
    awaitingPaymentTextColor?: string;
    copyIconColor?: string;
}
export interface MojitoCheckoutColor {
    continueButtonBackground?: string;
    continueButtonTextColor?: string;
}
export interface MojitoCostBreakDownColor {
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
    checkout?: MojitoCheckoutColor;
    costBreakdown?: MojitoCostBreakDownColor;
    paymentConfirmation?: MojitoPaymentConfirmationColor;
}
export interface MojitoThemeConfiguration {
    color?: MojitoColor;
    font?: MojitoFont;
}
