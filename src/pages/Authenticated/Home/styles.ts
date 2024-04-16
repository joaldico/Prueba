import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontFamily: 'Roboto !important',
    fontSize: '34px !important',
    color: 'rgba(0, 0, 0, 0.87) !important',
    letterSpacing: '0.25px !important',
    lineHeight: '123.5% !important',
    fontWeight: '500 !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px !important',
    },
  },
  cardsContainer: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      gap: '10px',
    },
  },
  container: {
    padding: '0px 40px',
    marginTop: '-70px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-18px',
      padding: '0rem 1rem !important',
    },
  },
}));
