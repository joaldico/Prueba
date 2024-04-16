import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  asterikColor: {
    color: '#f44336',
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },

  cssLabel: {
    fontWeight: '400',
  },
  cssFocused: {
    color: `${theme.palette.primary.main} !important`,
  },
  cssError: {
    color: `#f44336 !important`,
  },
}));

export const InputPropsDefault = () => {
  const classes = useStyles();
  return {
    shrink: true,
    classes: {
      asterisk: classes.asterikColor,
      root: classes.cssLabel,
      label: classes.cssLabel,
      focused: classes.cssFocused,
      error: classes.cssError,
    },
  };
};
