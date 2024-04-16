import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  gridCustomComponent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  title: {
    fontWeight: '500 !important',
    fontSize: '14px !important',
    color: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    fontWeight: '400 !important',
    fontSize: '14px !important',
    color: 'rgba(0, 0, 0, 0.75)',
  },
  container: {
    gap: '8px',
    display: 'flex',
    flexDirection: 'column',
  },
  dateContainer: {
    display: 'grid',
    gap: '8px',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  chipContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
