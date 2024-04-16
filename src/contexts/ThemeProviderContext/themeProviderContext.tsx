import { createTheme, PaletteMode, PaletteOptions } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/styles';
import hexToRgba from 'hex-to-rgba';
import React, { useContext } from 'react';

import { COLOR_DEFAULT, COLOR_DEFAULT_LIGHT } from '../../constants/constants';
import BusinessUnitParamsContext from '../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';

export const ThemeProvider: React.FC = ({ children }) => {
  const { colorCode } = useContext(BusinessUnitParamsContext);

  const customColorCode = colorCode ? `#${colorCode}` : COLOR_DEFAULT;
  const customColorLightCode = colorCode ? hexToRgba(colorCode, '0.08') : COLOR_DEFAULT_LIGHT;
  const mainPalette: PaletteOptions = {
    mode: 'light' as PaletteMode,
    primary: {
      main: customColorCode,
      light: customColorLightCode,
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
    typography: {
      fontFamily: 'Roboto, sans-serif',
      body1: {
        fontSize: '1em',
        letterSpacing: '0.15px',
        color: '#000',
      },
      body2: {
        fontSize: '0.875em',
        letterSpacing: '0.15px',
        color: '#000',
      },
      h1: {
        fontSize: '2.3em',
        fontWeight: 300,
      },
      button: {
        fontSize: '1em',
      },
      h2: {
        fontSize: '2.1em',
        fontWeight: 400,
      },
      h3: {
        fontSize: '1.8em',
        fontWeight: 400,
      },
      htmlFontSize: 16,
      body3: {
        display: 'block',
        letterSpacing: '0.15px',
        color: 'rgba(0, 0, 0, 0.75)',
        fontSize: '0.75em',
      },
    },
  });

  return <MuiThemeProvider theme={customMaterialTheme}>{children}</MuiThemeProvider>;
};
