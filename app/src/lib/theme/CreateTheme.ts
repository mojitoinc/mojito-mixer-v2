import { createTheme } from '@mui/material/styles';
import { MixThemeOptions, MixTheme } from './ThemeOptions';

export const theme = () => {
  return createTheme({
    typography: {
      fontFamily: 'Sneak',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
                @font-face {
                  font-family: 'Sneak';
                  font-style: normal;
                  font-display: swap;
                  font-weight: 400;
                }
                @font-face {
                    font-family: 'Sneak';
                    font-style: normal;
                    font-display: swap;
                    font-weight: 400;
                  }
              `,
      },
    },
    palette: {
      primary: {
        main: '#6663FD',
      },
      secondary: {
        main: '#FFFFFF',
      },
      background: {
        default: '#FAFAFC',
      },
      text: {
        primary: '#000000',
      },
    },
    font: {
      primary: 'Sneak',
      secondary: 'Sneak',
      tertiary: 'Sneak',
      sneak: 'Sneak',
    },
    global: {
      background: '#FAFAFC',
      highlightedText: '#6663FD',
      unHighlightedText: '#8A8AB9',
      lines: '#CACAE0',
      cardBackground: '#FFFFFF',
      cardShadow: 'rgba(0,0,0,0.08)',
      cardBorder: '#EAEAF3',
    },
  } as MixThemeOptions)as MixTheme;
};
