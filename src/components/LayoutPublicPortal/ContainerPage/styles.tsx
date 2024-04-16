import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#fff',
    padding: '1.563rem 200px !important',
    display: 'grid',
    alignItems: 'start !important',
    [theme.breakpoints.down('md')]: {
      padding: '1.563rem 2rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1.563rem 1rem !important',
      gap: '30px',
    },
  },
}));
