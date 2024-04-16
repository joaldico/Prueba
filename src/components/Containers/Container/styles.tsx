import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#fff',
    display: 'grid',
    gap: '40px',
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      padding: '0px !important',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0px !important',
    },
  },
}));
