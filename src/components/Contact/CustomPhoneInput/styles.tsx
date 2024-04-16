import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  borderInput: {
    '&.react-tel-input .special-label': {
      color: 'rgba(0, 0, 0, 0.54)',
      fontSize: '11.2px',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: '0.00938em',
      paddingLeft: '5px',
      paddingRight: '2px',
      paddingTop: '1px',
      left: '10px',
      zIndex: 1,
      position: 'absolute',
      whiteSpace: 'nowrap',
      padding: '0 5px',
    },
    '&.react-tel-input .form-control:focus': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0px 0px 0px 0px ${theme.palette.primary.main}`,
    },
    '&.react-tel-input .form-control': {
      height: '3.37em !important',
      width: '100% !important',
    },
  },
}));

export default useStyles;
