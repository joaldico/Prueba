import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  menuPaper: {
    boxShadow:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12) !important',
    borderRadius: '0px 0px 15px 15px !important',
    display: 'flex',
    maxWidth: '850px !important',
    flexWrap: 'wrap',
    padding: '25px !important',
    borderTop: `3px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'unset !important',
      width: '100% !important',
      maxHeight: 'cal(100% -90px) !important',
    },
  },
  menuItemRoot: {
    width: '400px',
    minHeight: '47px !important',
    '&:hover': {
      borderLeft: `4px solid ${theme.palette.primary.main}`,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
    },
  },
  menuItemMobileRoot: {
    [theme.breakpoints.up('sm')]: {
      display: 'none !important',
    },
  },
  menuItemPlanRoot: {
    width: '380px',
    minHeight: '47px !important',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
    },
  },
  category: {
    fontFamily: 'Roboto !important',
    fontWeight: '400 !important',
    fontSize: '16px !important',
    letterSpacing: '0.15px !important',
    lineHeight: '150% !important',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontWeight: '500 !important',
    },
  },
  plan: {
    fontFamily: 'Roboto !important',
    fontWeight: '400 !important',
    fontSize: '14px !important',
    letterSpacing: '0.15px !important',
    lineHeight: '143% !important',
    color: 'rgba(0, 0, 0, 0.87)',
    marginLeft: 20,
  },
  link: {
    fontFamily: 'Roboto !important',
    fontSize: '14px !important',
    fontWeight: '500 !important',
    letterSpacing: '0.46px !important',
    lineHeight: '26px !important',
    cursor: 'pointer',
    display: 'flex',
    gap: '4px',
    color: `${theme.palette.primary.main} !important`,
  },
  icon: {
    color: `${theme.palette.primary.main} !important`,
    cursor: 'pointer',
  },
  title: {
    width: '100%',
    fontFamily: 'Roboto !important',
    fontWeight: '500 !important',
    fontSize: '18px !important',
    letterSpacing: '0.15px !important',
    lineHeight: '160% !important',
    color: 'rgba(0, 0, 0, 0.87)',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  divider: {
    width: '100%',
    marginBottom: '10px !important',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menuListRoot: {
    width: '390px',
    padding: '0px !important',
  },
}));
