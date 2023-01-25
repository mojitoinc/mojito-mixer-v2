import DefaultThemes from '@lib/constants/themes';
import { ThemeConfiguration } from '@lib/interfaces/ThemeConfiguration';
import { createTheme } from '@mui/material/styles';
import { MixThemeOptions, MixTheme } from './ThemeOptions';

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
      checkOutColors: {
        ...DefaultThemes.color?.checkOutColors,
        ...themeConfiguration?.color?.checkOutColors,
      },
      costBreakDownColors: {
        ...DefaultThemes.color?.costBreakDownColors,
        ...themeConfiguration?.color?.costBreakDownColors,
      },
      confirmationColors: {
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
