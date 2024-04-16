import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import { hexToRGBA } from '../../../../../../../util/commons';

export const useStyles = makeStyles((theme: Theme) => ({
  subTitle: {
    marginTop: '33px !important',
    marginBottom: '10px !important',
  },
  card: {
    padding: '16px 16px 0px 16px !important',
    borderRadius: '15px !important',
    gap: '16px',
    height: '100%',
  },
  cardContent: {
    padding: '0px !important',
  },
  isSelected: {
    background: `linear-gradient(0deg, 
      ${hexToRGBA(theme.palette.primary.main, 0.08)} 0%, 
      ${hexToRGBA(theme.palette.primary.main, 0.08)} 100%), #FFF`,
  },
  alert: {
    width: '190px !important',
    height: '35px !important',
    borderRadius: '16px !important',
    padding: '0px !important',
  },
  titleAlert: {
    fontFamily: 'Roboto',
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '18px',
    letterSpacing: '0.16px',
  },
}));
