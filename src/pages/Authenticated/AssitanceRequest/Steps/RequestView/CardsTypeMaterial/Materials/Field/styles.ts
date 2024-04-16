import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    gap: '10px',
  },
  column: {
    flex: '0 1 8rem',
    display: 'flex',
    flexDirection: 'column',
  },
  columnSmall: {
    flex: '0 1 5rem',
    display: 'flex',
    flexDirection: 'column',
  },
  columnValue: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    fontFamily: 'Roboto  !important',
    fontWeight: 400,
    fontSize: '14px  !important',
    lineHeight: '21.98px',
    letterSpacing: '0.1px',
    color: 'rgba(0, 0, 0, 0.75)',
  },
  textValue: {
    fontFamily: 'Roboto  !important',
    fontWeight: 400,
    fontSize: '14px  !important',
    lineHeight: '21.98px',
    letterSpacing: '0.1px',
    color: 'rgba(0, 0, 0, 0.75)',
    wordBreak: 'break-word',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  textStrong: {
    fontWeight: '500 !important',
  },
  isDisabled: {
    fontFamily: 'Roboto  !important',
    fontWeight: 400,
    fontSize: '14px  !important',
    lineHeight: '21.98px',
    letterSpacing: '0.1px',
    color: 'rgba(0, 0, 0, 0.38)',
  },
}));
