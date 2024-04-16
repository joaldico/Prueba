import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  subTitle: {
    marginTop: '33px !important',
    marginBottom: '10px !important',
  },
  emptyTitle: {
    color: `${theme.palette.primary.main} !important`,
    textAlign: 'center',
    fontFamily: 'Roboto !important',
    fontSize: '22px !important',
    fontStyle: 'normal !important',
    fontWeight: '400 !important',
    lineHeight: '133.4% !important',
  },
  emptyBody: {
    marginTop: '16px !important',
    color: 'rgba(0, 0, 0, 0.75)',
    textAlign: 'center',
    fontFamily: 'Roboto !important',
    fontSize: '13px !important',
    fontStyle: 'normal !important',
    fontWeight: '400 !important',
    lineHeight: '143% !important',
    letterSpacing: '0.15px !important',
  },
  phoneNumber: {
    color: `${theme.palette.primary.main} !important`,
  },
  empty: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    margin: '92px 256px 0px 256px',
    [theme.breakpoints.down('md')]: {
      margin: '92px 5px 0px 5px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '92px 0px 0px 0px',
      justifyContent: 'space-around !important',
    },
  },
}));
