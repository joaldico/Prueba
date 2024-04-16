import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 74,
    padding: '16px 32px 16px 32px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 16px 16px 16px',
    },
  },
  text: {
    fontSize: '16px',
    color: `${theme.palette.primary.main}`,
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  phone: {
    fontSize: '16px',
    color: `${theme.palette.primary.main}`,
    display: 'flex',
    gap: '8px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      justifyContent: 'center',
    },
  },
  contactContainer: {
    backgroundColor: `${theme.palette.primary.light}`,
    height: 42,
    padding: '6px 16px 6px 16px',
    display: 'inline-flex',
    gap: '20px',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      height: 60,
      display: 'grid',
      gap: '0px',
      padding: '0px',
    },
  },
  icon: {
    color: `${theme.palette.primary.main} !important`,
    fontSize: '20px !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px !important',
    },
  },
}));
