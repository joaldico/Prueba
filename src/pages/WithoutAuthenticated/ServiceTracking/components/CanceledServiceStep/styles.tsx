import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'grid',
    gap: '24px',
  },
  chipContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: 8,
  },
}));
