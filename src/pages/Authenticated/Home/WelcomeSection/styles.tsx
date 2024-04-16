import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    width: '100%',
  },
  container: {
    display: 'flex',
    width: '100%',
    backgroundColor: theme.palette.primary.light,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: 'linear-gradient(to top, #22577a, transparent)',
    height: '17.49888rem',
    [theme.breakpoints.down('sm')]: {
      height: '7.813rem !important',
    },
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), ${theme.palette.primary.light} 100%)`,
  },
  leftColumn: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '65% !important',
    },
    [theme.breakpoints.down('sm')]: {
      width: '50% !important',
    },
  },
  titleContainer: {
    width: '25.9rem',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      width: '18.9375rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      width: '9.313rem !important',
    },
  },
  title: {
    fontFamily: 'Roboto !important',
    fontWeight: '700 !important',
    fontSize: '2.125rem !important',
    color: 'rgba(255, 255, 255, 1) !important',
    letterSpacing: '0.25px !important',
    lineHeight: '123.5% !important',
    [theme.breakpoints.down('md')]: {
      letterSpacing: '0.45px !important',
      fontSize: '1.875rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      lineHeight: '1.05rem !important',
      fontSize: '0.875rem !important',
      letterSpacing: '0.15px !important',
    },
  },
  description: {
    fontFamily: 'Roboto !important',
    fontWeight: '400 !important',
    fontSize: '16px !important',
    color: 'rgba(0, 0, 0, 0.87) !important',
    letterSpacing: '0.15px !important',
    lineHeight: '150% !important',
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  colorBlock: {
    height: '17.5rem !important',
    width: '100%',
    background: theme.palette.primary.light,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '0.9375rem',
    flexDirection: 'column',
    paddingTop: '1.88rem',
    [theme.breakpoints.down('sm')]: {
      height: '11.25rem !important',
    },
  },
  noServicesPadding: {
    padding: '4.56rem 2.5rem 6.5rem !important',
    [theme.breakpoints.down('md')]: {
      padding: '3.75rem 5.81rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '2.5rem 2rem !important',
      height: '13.75rem !important',
    },
  },
  welcomeTitle: {
    fontWeight: '500 !important',
    fontSize: '2.5rem !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.875rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem !important',
    },
  },
  noServicesTitle: {
    color: 'rgba(0, 0, 0, 0.75)',
    fontWeight: '500 !important',
    fontSize: '1.5rem !important',
    lineHeight: '133.4% !important',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      lineHeight: '116.7%',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem !important',
    },
  },
  noServicesSubtitle: {
    color: 'rgba(0, 0, 0, 0.75)',
    fontWeight: '400 !important',
    fontSize: '1.125rem !important',
    lineHeight: '133.4% !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem !important',
      lineHeight: '150%',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem !important',
      lineHeight: '143%',
    },
  },
  noServicesSubtitleContainer: {
    gap: '4px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcomeSubtitle: {
    fontWeight: '400 !important',
    fontSize: '1rem !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem !important',
    },
  },
  searchInputContainer: {
    width: '25.25rem',
    [theme.breakpoints.down('sm')]: {
      width: '18.25rem !important',
      '& .MuiOutlinedInput-root': {
        height: '2.0625rem !important',
      },
    },
  },
  button: {
    fontFamily: 'Roboto !important',
    fontWeight: '500 !important',
    fontSize: '14px !important',
    letterSpacing: '0.46px !important',
    lineHeight: '26px !important',
    width: '130px',
    height: '42px',
    borderRadius: '10px',
    backgroundColor: `${theme.palette.primary.main} !important`,
    boxShadow:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
  },
}));
