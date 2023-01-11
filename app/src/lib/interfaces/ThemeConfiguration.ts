export interface ThemeFont {
    primary?: string;
    secondary?: string;
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
    text?: string;
    checkOutColors?: CheckOutColor;
    costBreakDownColors?: CostBreakDownColors;
    placeholder?: string;
}
export interface ThemeConfiguration{
    color?: ThemeColor;
    font?: ThemeFont;
}
