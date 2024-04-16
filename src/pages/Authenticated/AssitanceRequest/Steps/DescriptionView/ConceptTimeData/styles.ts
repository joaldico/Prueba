import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: '16px !important',
    fontStyle: 'normal !important',
    fontWeight: '500 !important',
    lineHeight: '22px !important',
  },
  text: {
    fontSize: '14px !important',
    fontStyle: 'normal !important',
    fontWeight: '400 !important',
    lineHeight: '20px !important',
    textAlign: 'left',
  },
  checkboxField: {
    '& span': {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
      color: `${theme.palette.primary.main} !important`,
      marginRight: '-8px',
    },
  },
  checkboxDisabledTime: {
    '& span': {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
      color: `#000000 !important`,
      marginRight: '-8px',
      opacity: 0.75,
    },
  },
  dateField: {
    marginLeft: '16px',
    marginRight: '16px',
    marginBottom: '20px',
    width: '90%',
  },
  asterikColor: {
    color: '#f44336',
  },
  cssFocused: {},
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
  notchedOutline: {},
  formInput: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white !important',
      color: 'rgba(0, 0, 0, 0.75) !important',
    },
  },
}));
