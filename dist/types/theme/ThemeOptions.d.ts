import { CheckOutColor, ConfirmationColors, CostBreakDownColors } from '../interfaces';
import { ThemeOptions, Theme } from '@mui/material/styles';
export interface ExtendsThemeOptions {
    font?: {
        primary?: string;
        secondary?: string;
        tertiary?: string;
        sneak?: string;
    };
    global?: {
        background: string;
        errorBackground: string;
        highlightedText: string;
        unHighlightedText: string;
        linksText: string;
        lines: string;
        border: string;
        cardBackground: string;
        cardShadow: string;
        cardBorder: string;
        black: string;
        white: string;
        required: string;
        placeholder: string;
        checkOutColors: CheckOutColor;
        costBreakDownColors: CostBreakDownColors;
        confirmationColors: ConfirmationColors;
        cardGrayedText: string;
        grayBackground: string;
    };
}
export type MixThemeOptions = ExtendsThemeOptions & ThemeOptions;
export type MixTheme = ExtendsThemeOptions & Theme;
