import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  colorRadio: {
    color: '#f44336',
  },
  radio: {
    '&$checked': {
      color: `${theme.palette.primary.main} !important`,
    },
  },
  checked: {},
}));
