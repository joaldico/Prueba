import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  containerDevelopedBy: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: '20px',
  },
  developedBy: {
    fontFamily: 'Roboto !important',
    fontWeight: '400 !important',
    fontSize: '12px !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px !important',
    },
  },
  logoDevelopedBy: {
    maxHeight: '10.17px',
    maxWidth: '73.44px',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '1.575rem',
    },
  },
}));
