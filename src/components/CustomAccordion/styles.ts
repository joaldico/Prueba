import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  item: {
    border: `2px solid ${theme.palette.primary.light}`,
    borderRadius: '15px !important',
    marginBottom: '-0.938rem !important',
    '& .Mui-expanded': {
      borderTopLeftRadius: '13px',
      borderTopRightRadius: '13px',
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px',
      backgroundColor: `${theme.palette.primary.light} !important`,
    },
  },
  title: {
    height: '4.5rem',
    '& .Mui-expanded': {
      background: 'unset !important',
    },
  },
  text: {
    fontSize: '18px !important',
    fontWeight: '500 !important',
    color: 'rgba(0, 0, 0, 0.87) !important',
  },
  cursorDefault: {
    cursor: 'unset !important',
  },
  root: {
    height: '45px !important',
    minHeight: '45px !important',
  },
  content: {
    margin: '0px !important',
  },
}));
