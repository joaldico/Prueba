import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: '20px 0px 20px 0px',
    marginBottom: '10px !important',
    display: 'grid',
    gap: '24px',
  },
  buttonCancel: {
    width: '200px',
    height: '36px',
    borderRadius: '15px !important',
    border: `1px solid ${theme.palette.primary.main} !important`,
    fontSize: '14px !important',
    color: `${theme.palette.primary.main} !important`,
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px !important',
      width: '100%',
    },
  },
  buttonSubmit: {
    width: '200px',
    height: '36px',
    borderRadius: '15px !important',
    border: `1px solid ${theme.palette.primary.main} !important`,
    fontSize: '14px !important',
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: `white !important`,
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px !important',
      width: '100%',
    },
  },
  serviceTitle: {
    fontWeight: '500 !important',
    fontSize: '14px !important',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'end',
    gap: '20px',
    marginTop: 16,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      gap: '20px',
      flexDirection: 'column',
    },
  },
}));
