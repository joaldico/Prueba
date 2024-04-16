import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  paymentContent: {
    display: 'none !important',
    '& p': {
      margin: 0,
    },
  },
  paymentContentDesktop: {
    display: 'block !important',
  },
  '@media (max-width: 998px)': {
    paymentContentDesktop: {
      display: 'none !important',
    },
    paymentContent: {
      display: 'block !important',
    },
  },
}));
