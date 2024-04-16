import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  formCard: {
    minHeight: '27.188rem !important',
    backgroundColor: 'rgba(250, 250, 250, 1) !important',
    padding: '2rem 1.5rem 1.813rem !important',
    borderRadius: '15px !important',
    display: 'flex !important',
    justifyContent: 'center',
  },
  cardContent: {
    display: 'flex !important',
    padding: '0rem !important',
  },
  formContent: {
    height: '5.938rem',
  },
  formTitle: {
    color: 'rgba(32, 33, 36, 1) !important',
    fontSize: '18px !important',
    fontWeight: '500 !important',
    marginBottom: '0.98rem !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px !important',
    },
  },
  formInput: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white !important',
      color: 'rgba(0, 0, 0, 0.75) !important',
    },
  },
  formInputMultiline: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white !important',
      color: 'rgba(0, 0, 0, 0.75) !important',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'end',
    margin: '1rem 1.25rem',
    [theme.breakpoints.up('sm')]: {
      paddingRight: '1rem !important',
      marginTop: '1rem !important',
    },
  },
  button: {
    borderRadius: '10px !important',
    fontSize: '14px !important',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  buttonColor: {
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
  buttonColorOutlined: {
    backgroundColor: `white !important`,
    color: `${theme.palette.primary.main} !important`,
    borderColor: `${theme.palette.primary.main} !important`,
    right: '15px',
  },
  contactCard: {
    height: '5.938rem',
    backgroundColor: `${theme.palette.primary.light} !important`,
    paddingBottom: '0rem !important',
    borderRadius: '15px !important',
  },
  contactContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '5.938rem',
    padding: '1rem !important',
  },
  contactTitle: {
    fontSize: '18px !important',
    fontWeight: '500 !important',
    color: 'rgba(0, 0, 0, 0.87) !important',
  },
  contactPhone: {
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  },
  label: {
    fontFamily: 'Roboto !important',
    fontSize: '14px !important',
    fontWeight: '400 !important',
    lineHeight: '20px !important',
    letterSpacing: '0.15000000596046448px !important',
    textAlign: 'left',
  },
  link: {
    color: `${theme.palette.primary.main} !important`,
  },
  labelContainer: {
    display: 'inline-flex',
    gap: '4px',
  },
  checkboxStyle: {
    color: `${theme.palette.primary.main} !important`,
  },
  containerCheck: {
    paddingLeft: '55px !important',
  },
}));
