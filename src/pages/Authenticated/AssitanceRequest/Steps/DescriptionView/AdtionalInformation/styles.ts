import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: '16px !important',
    fontStyle: 'normal !important',
    fontWeight: '500 !important',
    lineHeight: '22px !important',
  },
  subTitle: {
    fontSize: '12px !important',
    fontStyle: 'normal !important',
    lineHeight: '22px !important',
    color: 'background: rgba(0, 0, 0, 0.75) !important',
    marginTop: '8px !important',
  },
  formInput: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white !important',
      color: 'rgba(0, 0, 0, 0.75) !important',
    },
  },
  load: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '500px',
    flexDirection: 'column',
    gap: '20px',
  },
  customClassContainer: {
    width: '100%',
  },
  mapContainer: {
    display: 'grid !important',
    marginTop: '25px !important',
  },
}));
