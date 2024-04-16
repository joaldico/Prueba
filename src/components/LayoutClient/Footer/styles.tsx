import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#FFFFFF',
    height: 120,
    padding: '20px 32px 20px 32px',
    display: 'grid',
    gridTemplateColumns: '1fr 248px',
    borderTop: 'solid 1px rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 148px',
    },
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      padding: '0px',
      borderTop: 'unset',
      gridTemplateColumns: '1fr 128px',
    },
  },
  rootMobile: {
    [theme.breakpoints.down('sm')]: {
      height: '185px',
      padding: '20px 16px 20px 16px',
      display: 'grid',
      gap: '10px',
      borderTop: 'solid 1px rgba(0, 0, 0, 0.12)',
    },
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
    },
  },
  title: {
    fontSize: '14px',
    color: `${theme.palette.primary.main}`,
  },
  subTitle: {
    fontSize: '12px',
  },
  contact: {
    fontSize: '12px',
    color: `${theme.palette.primary.main}`,
  },
  containerFooter: {
    display: 'grid',
    gap: '12px',
  },
  subTitleContainer: {
    display: 'grid',
    gap: '5px',
  },
  contactContainer: {
    display: 'inline-flex',
    gap: '4px',
    [theme.breakpoints.down('sm')]: {
      display: 'initial',
    },
  },
}));
