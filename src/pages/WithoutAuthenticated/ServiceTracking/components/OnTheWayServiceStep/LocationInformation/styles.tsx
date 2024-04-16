import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'grid',
    marginTop: '15px',
    gap: '10px',
  },
  content: {
    fontWeight: '500 !important',
    fontSize: '14px !important',
    color: 'rgba(0, 0, 0, 0.75)',
  },
  buttonOutlined: {
    borderRadius: '20px !important',
    fontFamily: 'Roboto !important',
    fontSize: '14px !important',
    border: `1px solid ${theme.palette.primary.main} !important`,
    color: `${theme.palette.primary.main} !important`,
    width: '220px',
    height: '32px',
    marginTop: '10px !important',
  },
  buttonDisabled: {
    borderRadius: '20px !important',
    fontSize: '14px !important',
    width: '250px',
    height: '32px',
    marginTop: '10px !important',
  },
}));
