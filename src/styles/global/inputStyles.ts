import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  asteriskColor: {
    color: '#f44336',
  },
  errorColor: {
    color: '#f44336',
  },
  labelRoot: {
    '&$cssFocused': {
      color: `${theme.palette.primary.main} !important`,
    },
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  root: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  cssFocused: {},
  notchedOutline: {},
  helperText: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  p: {
    marginBlock: 0,
  },
  selected: {
    backgroundColor: `${theme.palette.primary.light} !important`,
    color: '#000 !important',
    '&:hover': {
      backgroundColor: `${theme.palette.primary.light} !important`,
    },
  },
  rootMenu: {
    '&:hover': {
      backgroundColor: `${theme.palette.primary.light} !important`,
    },
  },
  input: {
    '&:hover fieldset': {
      borderColor: `${theme.palette.primary.main} !important`,
    },
    '&.Mui-focused fieldset': {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  asterikColor: {
    color: '#f44336',
  },
}));
