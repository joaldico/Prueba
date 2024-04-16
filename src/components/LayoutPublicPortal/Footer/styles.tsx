import { alpha, Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#FFFFFF',
    maxHeight: '4.625rem',
  },
  alertContainer: {
    padding: '0rem 12.5rem 1rem',
    [theme.breakpoints.down('md')]: {
      padding: '0rem 2rem 1rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0rem 1rem 1rem',
    },
  },
  boxContainer: {
    display: 'flex',
    height: '42px',
    width: '100%',
    marginTop: '16px',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '20px',
    borderRadius: '4px !important',
    backgroundColor: `${alpha(theme.palette.primary.main, 0.1)} !important`,
    '& .MuiAlert-icon': {
      display: 'none',
    },
  },
  initialText: {
    fontWeight: '400 !important',
    color: `${theme.palette.primary.dark} !important`,
    lineHeight: '28px !important',
    letterSpacing: '0.15px !important',
  },
  phoneIcon: {
    marginLeft: '33.25px !important',
    width: '13.5px !important',
    height: '13.5px !important',
    color: `${theme.palette.primary.dark} !important`,
  },
  phoneNumber: {
    marginLeft: '10.25px !important',
    fontSize: '14px !important',
    fontWeight: '500 !important',
    color: `${theme.palette.primary.dark}`,
  },
  buttonMobile: {
    marginLeft: '24px !important',
    borderRadius: '15px !important',
    color: `${theme.palette.primary.dark} !important`,
    borderColor: `${alpha(theme.palette.primary.main, 0.5)} !important`,
    fontSize: '14px !important',
  },
  linkButton: {
    color: `${theme.palette.primary.dark} !important`,
    textDecoration: 'none !important',
  },
}));
