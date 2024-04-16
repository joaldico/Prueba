import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex !important',
    justifyContent: 'center !important',
  },
  textGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    display: 'flex !important',
    justifyContent: 'center !important',
    maxHeight: '496px !important',
    maxWidth: '548px !important',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '275px !important',
      maxWidth: '287px !important',
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: '25px !important',
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
    fontSize: '14px',
    margin: '1px 0px',
    color: 'rgba(0, 0, 0, 0.75)',
  },
  numberText: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px',
    margin: '1px 0px',
    color: `${theme.palette.primary.main} !important`,
  },
  contactContainer: {
    display: 'flex !important',
    justifyContent: 'center !important',
  },
  button: {
    borderRadius: '20px !important',
    backgroundColor: `${theme.palette.primary.main} !important`,
    width: '124px',
    marginTop: '16px !important',
  },
}));
