import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    width: '569px',
    height: '188px',
    borderRadius: '25px !important',
  },
  paperWithoutCancel: {
    width: '569px',
    height: '100%',
    borderRadius: '25px !important',
    [theme.breakpoints.down('md')]: {
      width: '500px !important',
    },
  },
  dialogTitle: {
    height: '61px',
    fontFamily: 'Roboto !important',
    fontSize: '18px !important',
    fontWeight: '500 !important',
    lineHeight: '29px !important',
    letterSpacing: '0.15000000596046448px !important',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px !important',
      height: '58px',
    },
  },
  dialogContent: {
    width: '569px',
    height: '57px',
    padding: '16px 24px 16px 24px !important',
    gap: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      height: '56px',
    },
  },
  dialogContentWithoutCancel: {
    width: '900px',
    height: '57px',
    padding: '16px 24px 16px 24px !important',
    gap: '20px',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      width: '500px !important',
    },
  },
  textContent: {
    fontFamily: 'Roboto !important',
    fontSize: '14px !important',
    fontWeight: '400 !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px !important',
    },
    textAlign: 'center',
  },
  dialogActions: {
    padding: '16px',
    gap: '25px',
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
    height: '68px !important',
    [theme.breakpoints.down('sm')]: {
      height: '62px !important',
    },
  },
  buttonCancel: {
    width: '91px',
    height: '36px',
    borderRadius: '4px !important',
    border: `1px solid ${theme.palette.primary.main} !important`,
    fontSize: '14px !important',
    color: `${theme.palette.primary.main} !important`,
    [theme.breakpoints.down('sm')]: {
      width: '69px',
      fontSize: '13px !important',
      height: '30px',
    },
  },
  buttonSubmit: {
    width: '91px',
    height: '36px',
    borderRadius: '4px !important',
    border: `1px solid ${theme.palette.primary.main} !important`,
    fontSize: '14px !important',
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: `white !important`,
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px !important',
      width: '69px',
      height: '30px',
    },
  },
}));
