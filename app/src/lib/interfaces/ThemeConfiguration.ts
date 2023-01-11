export interface ThemeFont {
    primary?: string;
    secondary?: string;
}

export interface CheckOutColor {
    continueButtonBackground?: string;
    continueButtonTextColor?: string;
}

interface ThemeColor {
    primary?: string;
    secondary?: string;
    background?: string;
    text?: string;
    checkOutColors?: CheckOutColor;
    placeholder?: string;
}
export interface ThemeConfiguration{
    color?: ThemeColor;
    font?: ThemeFont;
}
