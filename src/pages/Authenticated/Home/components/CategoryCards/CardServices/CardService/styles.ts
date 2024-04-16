import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  serviceName: {
    fontWeight: '400 !important',
    fontSize: '16px!important',
    color: `${theme.palette.primary.main} !important`,
    textAlign: 'center',
  },
  serviceNameDisabled: {
    fontWeight: '400 !important',
    fontSize: '16px!important',
    color: `rgba(0, 0, 0, 0.38) !important`,
    textAlign: 'center',
    cursor: 'default',
  },
  card: {
    width: '308.75px',
    height: '64px',
    borderRadius: '20px !important',
    backgroundColor: 'white',
    display: 'inline-block',
    padding: '20px, 16px, 20px, 16px !important',
  },
  cardPointer: {
    cursor: 'pointer',
  },
}));
