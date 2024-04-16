import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  item: {
    border: `2px solid ${theme.palette.primary.light}`,
    borderRadius: '15px !important',
    marginBottom: '-0.938rem !important',
    '& .Mui-expanded': {
      borderTopLeftRadius: '13px',
      borderTopRightRadius: '13px',
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px',
      backgroundColor: `${theme.palette.primary.light} !important`,
    },
  },
  title: {
    borderRadius: '15px',
    height: '4.5rem',
    '& .Mui-expanded': {
      background: 'unset !important',
    },
    [theme.breakpoints.down('sm')]: {
      height: '100px',
    },
  },
  content: {
    height: '100%',
    overflow: 'hidden',
    padding: '10px 0px',
    alignItems: 'center',
  },
  text: {
    fontSize: '16px !important',
    color: 'rgba(0, 0, 0, 0.87) !important',
  },
  textAnswer: {
    fontSize: '14px !important',
    color: 'rgba(0, 0, 0, 0.87) !important',
  },
  titleResponsive: {
    fontSize: '16px !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px !important',
    },
    color: 'rgba(0, 0, 0, 0.87) !important',
  },
  textDetail: {
    fontSize: '14px !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px !important',
    },
    color: 'rgba(0, 0, 0, 0.87) !important',
  },
  textBold: {
    fontSize: '14px !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px !important',
    },
    color: 'rgba(0, 0, 0, 0.87) !important',
    fontWeight: '500 !important',
  },
  container: {
    margin: '26px 0px',
    width: '100% !important',
  },
  containerQuestions: {
    gap: '40px',
    display: 'grid',
    [theme.breakpoints.down('sm')]: {
      gap: '30px',
    },
  },
}));
