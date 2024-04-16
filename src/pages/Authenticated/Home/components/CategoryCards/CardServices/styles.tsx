import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  categoryName: {
    fontWeight: '400 !important',
    fontSize: '16px !important',
  },
  card: {
    width: '100%',
    borderRadius: '1.875rem !important',
    backgroundColor: 'white',
    display: 'inline-block',
    padding: '25px',
  },
  cardContent: {
    padding: '0px !important',
  },
  content: {
    display: 'grid',
    gap: '25px',
  },
  containerServices: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '25px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  arrow: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    cursor: 'pointer',
  },
}));
