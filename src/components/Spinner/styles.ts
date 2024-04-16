import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    width: '150px !important',
    height: '150px !important',
  },
}));
