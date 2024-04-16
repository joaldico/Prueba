import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  description: {
    fontFamily: 'Roboto !important',
    fontWeight: '400 !important',
    fontSize: '14px !important',
    color: '#000',
    letterSpacing: '0.15px !important',
    lineHeight: '143% !important',
  },
  link: {
    fontFamily: 'Roboto !important',
    fontWeight: '400 !important',
    fontSize: '14px !important',
    lineHeight: '143%',
    cursor: 'pointer',
    color: `${theme.palette.primary.main} !important`,
  },
  containerHelp: {
    display: 'flex',
    gap: '8px',
  },
  withPaddingBottom: {
    paddingBottom: 40,
  },
}));
