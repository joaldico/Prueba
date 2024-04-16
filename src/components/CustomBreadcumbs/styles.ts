import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontSize: '12px',
    cursor: 'pointer',
    color: 'rgba(0, 0, 0, 0.75) !important',
    fontFamily: 'Roboto',
  },
  text2: {
    fontSize: '12px',
    cursor: 'pointer',
    color: 'rgba(0, 0, 0, 0.38) !important',
    fontFamily: 'Roboto',
  },
  title: {
    fontSize: '22px !important',
    fontFamily: 'Roboto !important',
    color: 'rgba(37, 37, 37, 1)',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px !important',
    },
  },
  root: {
    marginBottom: '1.563rem',
  },
}));
