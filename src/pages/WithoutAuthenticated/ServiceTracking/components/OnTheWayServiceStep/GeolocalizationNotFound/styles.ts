import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  content: {
    fontWeight: '500 !important',
    fontSize: '16px !important',
    color: 'rgba(0, 0, 0, 0.75)',
  },
}));
