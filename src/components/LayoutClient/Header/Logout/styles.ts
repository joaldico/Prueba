import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  link: {
    fontSize: '14px',
    cursor: 'pointer',
    textDecorationColor: `${theme.palette.primary.main} !important`,
    color: `${theme.palette.primary.main} !important`,
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  linkContainer: {
    display: 'flex',
    gap: '8px',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
      gridTemplateColumns: 'max-content max-content',
      gap: '8px',
    },
  },
  icon: {
    color: `${theme.palette.primary.main} !important`,
    fontSize: '20px !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px !important',
    },
  },
  hiddenMobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  isHiddenDesktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));
