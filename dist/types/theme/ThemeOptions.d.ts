import { ThemeOptions, Theme } from '@mui/material/styles';
import { CheckoutColor, PaymentConfirmationColor, CostBreakDownColor } from '../interfaces';
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
        checkout: CheckoutColor;
        costBreakdown: CostBreakDownColor;
        paymentConfirmation: PaymentConfirmationColor;
        cardGrayedText: string;
        grayBackground: string;
        multiSigBorder: string;
        multiSigBackground: string;
        multiSigText: string;
    };
}
export type MixThemeOptions = ExtendsThemeOptions & ThemeOptions;
export type MixTheme = ExtendsThemeOptions & Theme;
