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
  containerTitle: {
    display: 'grid',
    gap: '6px',
  },
  containerForm: {
    width: '380px',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
    },
  },
  button: {
    borderRadius: '20px !important',
    fontSize: '14px !important',
    backgroundColor: `${theme.palette.primary.main} !important`,
    width: '100%',
    boxShadow:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
  },
  buttonOutlined: {
    borderRadius: '20px !important',
    fontFamily: 'Roboto !important',
    fontSize: '14px !important',
    border: `1px solid ${theme.palette.primary.main} !important`,
    color: `${theme.palette.primary.main} !important`,
    width: '100%',
  },
  link: {
    fontFamily: 'Roboto !important',
    fontWeight: '400 !important',
    fontSize: '14px !important',
    lineHeight: '143%',
    cursor: 'pointer',
    color: `${theme.palette.primary.main} !important`,
  },
  containerLink: {
    justifyContent: 'flex-end',
    display: 'flex',
  },
  divider: {
    margin: '10px 0px',
  },
  containerCreateUser: {
    display: 'grid',
    gap: '20px',
    marginTop: 20,
  },
  fakeStyle: {
    position: 'fixed',
    width: '0px',
    height: '0px',
    top: '-1000px',
    left: '-1000px',
    background: 'white',
    border: 'none',
  },
}));
