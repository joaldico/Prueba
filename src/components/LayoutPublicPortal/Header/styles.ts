import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center !important',
    height: '70px',
    width: '100%',
    backgroundColor: '#fff',
    borderBottom: '1px solid #e5e5e5',
    maxHeight: '90px',
    padding: '0.9rem 12.5rem',
    [theme.breakpoints.down('md')]: {
      padding: '1rem 3rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0.813rem 1rem 0.875rem',
      alignItems: 'unset',
      height: '55px',
    },
  },
  logo: {
    maxHeight: '2.525rem',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '1.75rem',
    },
  },
  title: {
    fontFamily: 'Roboto !important',
    fontSize: '18px !important',
    fontWeight: '500 !important',
    color: 'rgba(0, 0, 0, 0.87) !important',
  },
  titleMobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: '1',
  },
}));
