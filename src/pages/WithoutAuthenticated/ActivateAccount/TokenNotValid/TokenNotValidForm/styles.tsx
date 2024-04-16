import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontFamily: 'Roboto !important',
    fontWeight: '600 !important',
    fontSize: '22px !important',
    color: `${theme.palette.primary.main} !important`,
    lineHeight: '133.4% !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px !important',
    },
  },
  subTitle: {
    fontFamily: 'Roboto !important',
    fontWeight: '500 !important',
    fontSize: '14px !important',
    color: '#000',
    letterSpacing: '0.15px !important',
    lineHeight: '143% !important',
  },
  containerTitle: {
    display: 'grid',
    gap: '20px',
    maxWidth: '380px',
  },
  button: {
    borderRadius: '20px !important',
    fontSize: '14px !important',
    backgroundColor: `${theme.palette.primary.main} !important`,
    width: '100%',
    boxShadow:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
  },
}));
