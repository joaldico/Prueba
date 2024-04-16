import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  border: {
    borderBottom: '1px solid #c4c4c4',
    width: '100%',
    [theme.breakpoints.between('lg', 'xl')]: {
      width: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '85%',
    },
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.75)',
    width: '15%',
    [theme.breakpoints.between('lg', 'xl')]: {
      width: '12%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '20%',
    },
  },
}));
