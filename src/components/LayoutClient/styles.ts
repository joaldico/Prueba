import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '0px !important',
  },
  main: {
    width: '100%',
    minHeight: 'calc(100vh - 176px)',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    [theme.breakpoints.down('sm')]: {
      minHeight: 'calc(100vh - 246px)',
    },
  },
}));
