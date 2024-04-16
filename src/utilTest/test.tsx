import { createTheme, PaletteMode, PaletteOptions } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/styles';
import React from 'react';

import { COLOR_DEFAULT } from '../constants/constants';

export const ThemeProviderTest: React.FC = ({ children }) => {
  const mainPalette: PaletteOptions = {
    mode: 'light' as PaletteMode,
    primary: {
      main: COLOR_DEFAULT,
      light: COLOR_DEFAULT,
    },
  };

  const customMaterialTheme = createTheme({
    palette: mainPalette,
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1440,
        xl: 1920,
      },
    },
  });

  return <MuiThemeProvider theme={customMaterialTheme}>{children}</MuiThemeProvider>;
};
