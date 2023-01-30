import { GlobalStyles, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { makeTheme } from '../src/lib/theme/CreateTheme'
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
