import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  logo: {
    maxHeight: '39px',
    maxWidth: '277.95px',
    marginBottom: 20,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginTop: 'auto',
    },
  },
}));
