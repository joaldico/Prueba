import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  link: {
    fontSize: '14px',
    color: `#000000DE !important`,
    textDecorationColor: `${theme.palette.primary.main} !important`,
    '&:hover': {
      color: `${theme.palette.primary.main} !important`,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  linkContainer: {
    display: 'flex',
    gap: '50px',
    [theme.breakpoints.down('sm')]: {
      gap: '20px',
      whiteSpace: 'nowrap',
    },
  },
}));
