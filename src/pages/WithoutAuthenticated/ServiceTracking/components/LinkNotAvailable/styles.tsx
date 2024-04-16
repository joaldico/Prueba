import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex !important',
    justifyContent: 'center !important',
    padding: '55px 40px !important',
    [theme.breakpoints.down('md')]: {
      padding: '25px 32px !important',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '25px 8px !important',
    },
  },
  textGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px !important',
    },
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: '22px',
    fontWeight: '400',
    lineHeight: '29.35px',
    margin: '1px 0px',
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '14px',
    margin: '1px 0px',
    color: 'rgba(0, 0, 0, 0.75)',
  },
  imageContainer: {
    display: 'flex !important',
    justifyContent: 'center !important',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '120px !important',
      maxWidth: '120px !important',
    },
  },
  numberText: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px',
    margin: '1px 0px',
    color: `${theme.palette.primary.main} !important`,
  },
  button: {
    borderRadius: '20px !important',
    backgroundColor: `${theme.palette.primary.main} !important`,
    width: '124px',
    marginTop: '16px !important',
  },
  contactContainer: {
    display: 'flex !important',
  },
}));
