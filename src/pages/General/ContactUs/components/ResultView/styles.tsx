import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  buttonLeftContainer: {
    display: 'flex',
    justifyContent: 'end',
  },
  buttonRightContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttonLeft: {
    maxHeight: '2.25rem',
    borderRadius: '10px !important',
    fontSize: '14px !important',
    backgroundColor: `white !important`,
    color: `${theme.palette.primary.main} !important`,
    borderColor: `${theme.palette.primary.main} !important`,
    [theme.breakpoints.up('sm')]: {
      marginRight: '1rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: '1.938rem !important',
    },
  },
  button: {
    maxHeight: '2.25rem',
    borderRadius: '10px !important',
    fontSize: '14px !important',
    backgroundColor: `${theme.palette.primary.main} !important`,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  imageMobile: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem !important',
    [theme.breakpoints.up('sm')]: {
      display: 'none !important',
    },
  },
  imageDesktop: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem !important',
    [theme.breakpoints.down('sm')]: {
      display: 'none !important',
    },
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '0.625rem !important',
  },
  title: {
    fontSize: '34px !important',
    color: 'rgba(32, 33, 36, 1) !important',
    fontWeight: '400 !important',
  },
  bodyContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.8rem !important',
  },
  body: {
    fontSize: '14px !important',
    color: 'rgba(32, 33, 36, 1) !important',
    fontWeight: '400 !important',
    textAlign: 'center',
  },
}));
