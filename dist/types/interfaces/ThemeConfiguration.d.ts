export interface ThemeFont {
    primary?: string;
    secondary?: string;
}
export interface ConfirmationColors {
    processedBackground?: string;
    processedTextColor?: string;
    awaitingPaymentBackground?: string;
    awaitingPaymentTextColor?: string;
    copyIconColor?: string;
}
export interface CheckOutColor {
    continueButtonBackground?: string;
    continueButtonTextColor?: string;
}
export interface CostBreakDownColors {
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
export interface ThemeConfiguration {
    color?: ThemeColor;
    font?: ThemeFont;
}
export {};
