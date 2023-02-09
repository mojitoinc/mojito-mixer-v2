import { createTheme } from '@mui/material/styles';
import { DefaultThemes } from '../config';
import { ThemeConfiguration } from '../interfaces';
import { MixThemeOptions, MixTheme } from '.';

export const makeTheme = (themeConfiguration?: ThemeConfiguration) => {
  return createTheme({
    typography: {
      fontFamily: 'Sneak',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
                @font-face {
                  font-family: ${ themeConfiguration?.font?.primary ?? DefaultThemes.font?.primary };
                  font-style: normal;
                  font-display: swap;
                  font-weight: 400;
                }
                @font-face {
                    font-family: ${ themeConfiguration?.font?.secondary ?? DefaultThemes.font?.secondary };
                    font-style: normal;
                    font-display: swap;
                    font-weight: 400;
                  }
              `,
      },
    },
    palette: {
      primary: {
        main: themeConfiguration?.color?.primary ?? DefaultThemes.color?.primary,
      },
      secondary: {
        main: themeConfiguration?.color?.secondary ?? DefaultThemes.color?.secondary,
      },
      background: {
        default: themeConfiguration?.color?.background ?? DefaultThemes.color?.background,
      },
      text: {
        primary: themeConfiguration?.color?.text ?? DefaultThemes.color?.text,
        disabled: themeConfiguration?.color?.placeholder ?? DefaultThemes.color?.placeholder,
      },
    },
    font: {
      primary: 'Sneak',
      secondary: 'Sneak',
      tertiary: 'Sneak',
      sneak: 'Sneak',
    },
    global: {
      background: themeConfiguration?.color?.background ?? DefaultThemes.color?.background,
      errorBackground: themeConfiguration?.color?.errorBackground ?? DefaultThemes.color?.errorBackground,
      highlightedText: '#6663FD',
      unHighlightedText: '#8A8AB9',
      linksText: '#8A8AB9',
      lines: '#CACAE0',
      black: '#000000',
      white: '#FFFFFF',
      border: '#000000',
      cardBackground: themeConfiguration?.color?.cardBackground ?? DefaultThemes.color?.cardBackground,
      cardShadow: 'rgba(0,0,0,0.08)',
      cardBorder: '#EAEAF3',
      required: '#CE2818',
      placeholder: themeConfiguration?.color?.placeholder ?? DefaultThemes.color?.placeholder,
      checkout: {
        ...DefaultThemes.color?.checkout,
        ...themeConfiguration?.color?.checkout,
      },
      costBreakdown: {
        ...DefaultThemes.color?.costBreakdown,
        ...themeConfiguration?.color?.costBreakdown,
      },
      paymentConfirmation: {
        awaitingPaymentBackground: '#FCFB99',
        awaitingPaymentTextColor: '#F98028',
        processedBackground: '#E7EFE8',
        processedTextColor: '#0B4D12',
        copyIconColor: '#B0AFFE',
      },
      cardGrayedText: '#5C5C9B',
      grayBackground: '#F4F4F5',
    },
  } as MixThemeOptions) as MixTheme;
};
