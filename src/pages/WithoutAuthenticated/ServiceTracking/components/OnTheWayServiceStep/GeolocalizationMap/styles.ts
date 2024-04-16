import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  divSpaceSection: {
    marginBottom: '20px',
  },
  load: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '500px',
    flexDirection: 'column',
    gap: '20px',
  },
  progress: {
    color: `${theme.palette.primary.main} !important`,
  },
}));
