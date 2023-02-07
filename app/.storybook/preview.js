import { GlobalStyles, ThemeProvider } from "@mui/material";
import { makeTheme } from '../src/lib/theme'
const themes = makeTheme()

export const decorators = [
  (Story) => {

    return (
      <ThemeProvider theme={themes}>
        <GlobalStyles />
        {Story()}
      </ThemeProvider>
    );
  },
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
};
