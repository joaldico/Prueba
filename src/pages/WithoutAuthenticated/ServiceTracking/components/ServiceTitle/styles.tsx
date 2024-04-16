import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  serviceTitle: {
    fontSize: '22px !important',
    fontWeight: '500 !important',
    fontFamily: 'Roboto !important',
    lineHeight: '27.17px !important',
    letterSpacing: '0.25px !important',
  },
  dates: {
    fontSize: '14px !important',
    fontWeight: '400 !important',
  },
  dateContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '4px',
  },
  datesInfo: {
    display: 'flex',
    justifyContent: 'end',
  },
}));
