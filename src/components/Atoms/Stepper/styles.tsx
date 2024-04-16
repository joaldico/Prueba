import { stepConnectorClasses } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiStepLabel-label.Mui-completed': {
      display: 'none',
    },
    '& .MuiStepLabel-label.Mui-disabled': {
      display: 'none',
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
      border: `1px solid ${theme.palette.primary.main}`,
      color: 'white',
      borderRadius: '64px',
      '& .MuiStepIcon-text': {
        fill: `${theme.palette.primary.dark}`,
      },
    },
  },
  stepperRoot: {
    margin: '0 -13%',
    [theme.breakpoints.down('sm')]: {
      margin: '0 -4% 0 -2%',
    },
    '& .MuiStep-root.MuiStep-horizontal.Mui-completed': {
      [theme.breakpoints.down('sm')]: {
        padding: '0px !important',
      },
    },
    '& .MuiStepLabel-label.Mui-active': {
      [theme.breakpoints.down('sm')]: {
        color: `${theme.palette.primary.dark}`,
        fontSize: 12,
      },
    },
  },
  stepperRootInitial: {
    margin: '0 -13% 0 -6%',
    [theme.breakpoints.down('sm')]: {
      margin: '0 -5% 0 -3%',
    },
    '& .MuiStepLabel-label.Mui-active': {
      [theme.breakpoints.down('sm')]: {
        color: `${theme.palette.primary.dark}`,
        fontSize: 12,
      },
    },
  },
  stepperRootLast: {
    margin: '0 -6% 0 -13%',
    [theme.breakpoints.down('sm')]: {
      margin: '0 -3% 0 -2%',
    },
    '& .MuiStep-root.MuiStep-horizontal.Mui-completed': {
      [theme.breakpoints.down('sm')]: {
        padding: '0px !important',
      },
    },
    '& .MuiStepLabel-label.Mui-active': {
      [theme.breakpoints.down('sm')]: {
        color: `${theme.palette.primary.dark}`,
        fontSize: 12,
      },
    },
  },
  stepperRootAllCompleted: {
    margin: '0 -6% 0 -13%',
    [theme.breakpoints.down('sm')]: {
      margin: '0 -6% 0 -4%',
    },
    '& .MuiStepLabel-label.Mui-active': {
      [theme.breakpoints.down('sm')]: {
        color: `${theme.palette.primary.dark}`,
      },
    },
  },
  label: {
    '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': {
      color: `${theme.palette.primary.dark}`,
    },
  },
  qontoStepIconRoot: {
    display: 'flex',
    height: 22,
    alignItems: 'center',
    '& .QontoStepIcon-completedIcon': {
      color: `${theme.palette.primary.main}`,
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
    },
    '& .QontoStepIcon-circle-disabled': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: `rgba(0, 0, 0, 0.38)`,
    },
  },
  qontoStepConnector: {
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.primary.main,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.primary.main,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : `rgba(0, 0, 0, 0.38)`,
      borderRadius: 1,
    },
  },
  qontoStepConnectorLast: {
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.primary.main,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.primary.main,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : `rgba(0, 0, 0, 0.38)`,
      borderRadius: 1,
    },
  },
  qontoStepConnectorAllCompleted: {
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.primary.main,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.primary.main,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : `rgba(0, 0, 0, 0.38)`,
      borderRadius: 1,
    },
  },
}));
