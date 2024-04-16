import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  progress: {
    width: '25px !important',
    height: '25px !important',
    color: `${theme.palette.primary.main} !important`,
  },
}));
