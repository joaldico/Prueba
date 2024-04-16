import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#fff',
    padding: '3.12rem 4.75rem 3.12rem 4.75rem !important',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      padding: '3.12rem 3.125rem 6.25rem 3.125rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1.563rem 1.5rem 4.375rem 1.5rem !important',
    },
  },
}));
