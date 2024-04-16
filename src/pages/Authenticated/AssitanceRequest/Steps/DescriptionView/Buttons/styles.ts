import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  buttonCancel: {
    width: '200px',
    height: '36px',
    borderRadius: '15px !important',
    border: `1px solid ${theme.palette.primary.main} !important`,
    fontSize: '14px !important',
    color: `${theme.palette.primary.main} !important`,
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px !important',
    },
  },
  buttonSubmit: {
    width: '200px',
    height: '36px',
    borderRadius: '15px !important',
    border: `1px solid ${theme.palette.primary.main} !important`,
    fontSize: '14px !important',
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: `white !important`,
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px !important',
    },
  },
}));
