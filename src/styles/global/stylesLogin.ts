import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontFamily: 'Roboto !important',
    fontWeight: '600 !important',
    fontSize: '22px !important',
    color: `${theme.palette.primary.main} !important`,
    lineHeight: '133.4% !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px !important',
    },
  },
  description: {
    fontFamily: 'Roboto !important',
    fontWeight: '400 !important',
    fontSize: '14px !important',
    color: '#000',
    letterSpacing: '0.15px !important',
    lineHeight: '143% !important',
  },
  icon: {
    color: `${theme.palette.primary.main} !important`,
    cursor: 'pointer',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '100%',
  },
  containerTitle: {
    display: 'grid',
    gap: '6px',
    width: '380px',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
    },
  },
  containerForm: {
    width: '380px',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
    },
  },
  containerIcon: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  containerAlert: {
    marginTop: 20,
  },
  button: {
    borderRadius: '20px !important',
    fontSize: '14px !important',
    backgroundColor: `${theme.palette.primary.main} !important`,
    width: '100%',
    marginTop: '20px !important',
    boxShadow:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
  },
  buttonDisabled: {
    borderRadius: '20px !important',
    fontSize: '14px !important',
    backgroundColor: `rgba(0, 0, 0, 0.12) !important`,
    width: '100%',
    marginTop: '20px !important',
  },
}));
