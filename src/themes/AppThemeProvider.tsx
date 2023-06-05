import * as React from 'react';

import { PaletteMode } from '@mui/material';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

import { useAppSelector } from '@/app/store';
type Props = {
  children?: React.ReactNode;
};

declare module '@mui/material/styles' {
  // index signature typegradients

  interface TypeGradient {
    [key: string]: string;
  }

  interface Palette {
    gradient: TypeGradient;
  }
  interface PaletteOptions {
    gradient: TypeGradient;
  }

  interface TypeBackground {
    opposite: string;
  }
}

//children with ReactNode type
export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        primary: {
          main: '#DD3333',
        },
        secondary: {
          main: '#222489',
        },
        gradient: {
          bronze: 'linear-gradient(180deg, #9C6D3E 0%, #E8C8A9 100%)',
          silver: 'linear-gradient(180deg, #808080 0%, #DFDFDF 100%)',
          gold: 'linear-gradient(180deg, #A3873C 0%, #E3D294 100%)',
        },
      },
      typography: {
        fontFamily: 'Lato, sans-serif',
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              // ---CSS BODY--- \\
            },
          },
        },
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
