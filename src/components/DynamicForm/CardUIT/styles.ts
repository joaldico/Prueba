import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  button: {
    color: `${theme.palette.primary.main} !important`,
    borderColor: `${theme.palette.primary.main} !important`,
    fontSize: '13px',
    lineHeight: '1.20 !important',
    letterSpacing: 'inherit !important',
    padding: '4px 10px',
  },
  card: {
    fontStyle: 'normal !important',
    fontWeight: '400',
    letterSpacing: '0.15px !important',
    height: '100px !important',
    boxShadow: 'unset !important',
    backgroundColor: 'unset !important',
  },
  cardHeader: {
    padding: '16px 16px',
  },
  cardHeaderTitle: {
    fontSize: '17px',
    letterSpacing: '0.15px',
    color: 'rgba(0, 0, 0, 0.87) !important',
    padding: '0 6px 0 0',
  },
  cardBody: {
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.75) !important',
  },
  cardFooter: {},
  loading: {
    padding: '50px 0 40px 0',
    fontSize: '14px',
    letterSpacing: '0.1px',
    color: '#3D3F4C',
  },
  collapsibleContainer: {
    cursor: 'pointer',
  },
  collapsibleArrow: {
    padding: '0px !important',
  },
}));
