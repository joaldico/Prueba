import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  link: {
    fontFamily: 'Roboto !important',
    fontWeight: '400 !important',
    fontSize: '14px !important',
    lineHeight: '143%',
    cursor: 'pointer',
    color: `${theme.palette.primary.main} !important`,
    paddingLeft: 6,
  },
}));
