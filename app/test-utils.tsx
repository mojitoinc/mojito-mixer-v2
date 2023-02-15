import { ReactTestRenderer, create, TestRendererOptions } from 'react-test-renderer';
import React, { ReactElement } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00ff00',
      dark: '#0fff00',
      light: '01fff0',
    },
  },
});

const RootProviders = (children: ReactElement, options?: TestRendererOptions): ReactTestRenderer => {
  return create(<ThemeProvider theme={ theme }>{ children }</ThemeProvider>, options);
};

export * from '@testing-library/react';
export { RootProviders as render };
