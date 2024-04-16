import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import { hexToRGBA } from '../../../util/commons';

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: '22px !important',
    fontFamily: 'Roboto !important',
    color: 'rgba(37, 37, 37, 1)',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px !important',
      marginBottom: '5px !important',
    },
    marginBottom: '15px !important',
  },
  withoutNumbers: {
    '& .MuiStepIcon-text': {
      display: 'none',
    },
  },
  stepContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
    '& .MuiStepLabel-labelContainer': {
      marginTop: '8px',
    },
  },
  root: {
    '& .MuiStepLabel-label.Mui-completed': {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    '& .MuiStepLabel-label.Mui-disabled': {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    '& .MuiStepIcon-root.Mui-active': {
      color: `${theme.palette.primary.main}`,
      border: 'unset',
      '& .MuiStepIcon-text': {
        fill: 'white',
      },
    },
    '& .MuiStepIcon-root.Mui-completed': {
      border: 'unset',
      color: `${theme.palette.primary.main}`,
      '& .MuiStepIcon-text': {
        fill: 'white',
      },
    },
    '& .MuiStepIcon-root': {
      color: 'rgba(0, 0, 0, 0.38)',
      borderRadius: '64px',
      '& .MuiStepIcon-text': {
        fill: `rgba(0, 0, 0, 0.38)`,
      },
    },
  },
  titleMobileStepper: {
    fontFamily: 'Roboto !important',
    fontSize: '12px !important',
    fontWeight: '400 !important',
    lineHeight: '20px !important',
    letterSpacing: '0.4000000059604645px',
    textAlign: 'left',
    color: '#00000061',
  },
  arrowBack: {
    width: '7.41px !important',
    height: '12px !important',
    top: '0px !important',
    left: '8px !important',
    color: '#757575',
    padding: '0px !important',
  },
  stepMobile: {
    width: '100%',
  },
  rootMobile: {
    maxWidth: '100%',
    flexGrow: 1,
    padding: '0px !important',
  },
  rootProgress: {
    width: '100% !important',
    padding: '0px !important',
    backgroundColor: `${hexToRGBA(theme.palette.primary.main, 0.6)} !important`,
    '& .MuiLinearProgress-bar': {
      backgroundColor: `${theme.palette.primary.main} !important`,
    },
  },
  containerAlert: {
    marginTop: 20,
  },
}));
