import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '56px',
    padding: '0px 32px 0px 32px',
    display: 'flex',
    gap: '68px',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderBottom: '1px solid #e5e5e5',
    maxHeight: '90px',
    [theme.breakpoints.down('sm')]: {
      gap: '13px',
      padding: '0px 16px 0px 16px',
    },
  },
  logo: {
    maxHeight: '35px',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '1.575rem',
    },
  },
}));
