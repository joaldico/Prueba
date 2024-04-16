import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#fff',
  },
  leftColumn: {
    width: '50%',
    padding: '2.469rem 2.469rem 0rem 4.75rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
    [theme.breakpoints.down('md')]: {
      padding: '2.469rem 2.469rem 0rem 3.125rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '1.938rem 1.938rem 0rem 1.5rem',
      gap: '16px',
    },
  },
  rightColumn: {
    width: '50%',
    display: 'flex',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '250px 0 0 0',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));
