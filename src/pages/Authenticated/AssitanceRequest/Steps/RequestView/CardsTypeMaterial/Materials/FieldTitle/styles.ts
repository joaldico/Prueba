import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    paddingBottom: '4px',
  },
  column: {
    flex: '1 1',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 220,
  },
  text: {
    fontFamily: 'Roboto !important',
    fontWeight: 400,
    fontSize: '16px !important',
    lineHeight: '21.98px',
    letterSpacing: '0.1px',
    color: `${theme.palette.primary.main}`,
  },
  textStrong: {
    fontWeight: '500 !important',
  },
  check: {
    padding: '0px !important',
    color: `${theme.palette.primary.main} !important`,
  },
  isDisabled: {
    fontFamily: 'Roboto !important',
    fontWeight: 400,
    fontSize: '16px !important',
    lineHeight: '21.98px',
    letterSpacing: '0.1px',
    color: 'rgba(0, 0, 0, 0.38)',
  },
  checkDisabled: {
    padding: '0px !important',
    color: 'rgba(0, 0, 0, 0.38)',
  },
}));
