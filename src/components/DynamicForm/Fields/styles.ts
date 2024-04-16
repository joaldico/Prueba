import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStylesInputLabel = makeStyles((theme: Theme) => ({
  asteriskColor: {
    color: 'rgba(245, 0, 87, 1)',
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  cssLabel: {
    fontWeight: '400',
    backgroundColor: 'white',
  },
  cssFocused: {
    color: `${theme.palette.primary.main} !important`,
  },
  cssError: {
    color: `${theme.palette.error.main} !important`,
  },
  rightText: {
    textAlign: 'right',
    marginTop: 0,
    marginBottom: 0,
  },
  leftText: {
    textAlign: 'left',
    marginTop: 0,
  },
  alertColor: {
    color: '#F44336',
  },
}));

export const inputPropsDefault = (classes: any) => {
  return {
    shrink: true,
    classes: {
      asterisk: classes.asteriskColor,
      root: classes.cssLabel,
      label: classes.cssLabel,
      focused: classes.cssFocused,
      error: classes.cssError,
    },
  };
};
