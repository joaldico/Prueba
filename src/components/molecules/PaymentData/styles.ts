import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  titleText: {
    wordBreak: 'initial',
  },
  '@media (max-width: 480px)': {
    titleText: {
      wordBreak: 'break-all',
    },
  },
}));
