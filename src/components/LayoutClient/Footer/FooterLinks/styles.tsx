import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  link: {
    fontSize: '12px',
    color: `#000000DE !important`,
    textDecorationColor: `${theme.palette.primary.main} !important`,
    '&:hover': {
      color: `${theme.palette.primary.main} !important`,
    },
  },
  linkContainer: {
    display: 'flex',
    gap: '25px',
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
      gridTemplateColumns: 'max-content max-content',
      gap: '0px 40px',
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
