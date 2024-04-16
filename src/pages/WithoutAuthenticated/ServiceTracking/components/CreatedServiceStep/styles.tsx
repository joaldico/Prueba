import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  textTitle: {
    fontWeight: '500 !important',
    fontSize: '14px !important',
    lineHeight: '157% !important',
    letterSpacing: '0.1px !important',
    color: 'rgba(0, 0, 0, 0.75)',
    fontStyle: 'normal',
  },
  textBody: {
    fontWeight: '400 !important',
    fontSize: '14px !important',
    lineHeight: '143% !important',
    letterSpacing: '0.15px !important',
    color: 'rgba(0, 0, 0, 0.75)',
    fontStyle: 'normal',
  },
}));
