import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  fakeStyle: {
    position: 'fixed',
    width: '0px',
    height: '0px',
    top: '-1000px',
    left: '-1000px',
    background: 'white',
    border: 'none',
  },
  button: {
    borderRadius: '20px !important',
    fontSize: '14px !important',
    backgroundColor: `${theme.palette.primary.main} !important`,
    width: '100%',
    marginTop: '20px !important',
    boxShadow:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
  },
  buttonDisabled: {
    borderRadius: '20px !important',
    fontSize: '14px !important',
    backgroundColor: `rgba(0, 0, 0, 0.12) !important`,
    width: '100%',
    marginTop: '20px !important',
  },
}));
