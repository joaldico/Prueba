import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  rootPlaceholder: {
    fontStyle: 'italic',
    '&:hover': {
      backgroundColor: `${theme.palette.primary.light} !important`,
    },
  },
  root: {
    '&:hover': {
      backgroundColor: `${theme.palette.primary.light} !important`,
    },
  },
}));
