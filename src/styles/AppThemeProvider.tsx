import * as React from 'react';

import {
  Theme as MuiTheme,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import '@emotion/react';

import '@fontsource/poppins';

type Props = {
  children?: React.ReactNode;
};

declare module '@mui/material/styles' {
  interface PaletteColor {
    lighter?: string;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
  }
}

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}

//children with ReactNode type
export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        primary: {
          main: '#90caf9',
          light: '#c7e4ff',
          lighter: '#e5f3ff',
        },
        grey: {
          100: '#ededed',
        },
      },
      typography: {
        fontFamily: 'Poppins, Lato, sans-serif',
      },
      components: {
        MuiLink: {
          styleOverrides: {
            root: {
              cursor: 'pointer',
              textDecoration: 'none',
              lineHeight: '16px',
              transition: 'all 0.1s ease-in-out',
              '&:hover': {
                opacity: 0.8,
              },
            },
          },
        },
        MuiModal: {
          styleOverrides: {
            backdrop: {
              backdropFilter: 'blur(4px)',
            },
          },
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              aspectRatio: '1/1',
            },
          },
        },
      },
    }),
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
