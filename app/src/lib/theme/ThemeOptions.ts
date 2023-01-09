// https://mui.com/material-ui/customization/theming/
import { ThemeOptions, Theme } from "@mui/material/styles";

export interface ExtendsThemeOptions {
    font?: {
        primary?: string;
        secondary?: string;
        tertiary?: string;
        sneak?: string;
    };
    global?: {
        background: string;
        highlightedText:string;
        unHighlightedText:string;
        lines:string;
        cardBackground:string;
        cardShadow:string;
        cardBorder:string;
    };

}
export type MixThemeOptions = ExtendsThemeOptions & ThemeOptions;

export type MixTheme = ExtendsThemeOptions & Theme;
