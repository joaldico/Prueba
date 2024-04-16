import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import { hexToRGBA } from '../../../../../../../../util/commons';

export const useStyles = makeStyles((theme: Theme) => ({
  subTitle: {
    marginTop: '33px !important',
    marginBottom: '10px !important',
  },
  card: {
    padding: '16px 16px 16px 16px !important',
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
}));
