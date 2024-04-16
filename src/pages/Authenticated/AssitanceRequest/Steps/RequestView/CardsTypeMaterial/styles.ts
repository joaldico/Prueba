import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import { hexToRGBA } from '../../../../../../util/commons';

export const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
  title: {
    color: 'rgba(0, 0, 0, 0.75)',
  },
  iconColor: {
    color: `${theme.palette.primary.main}`,
  },
  titleColor: {
    color: `${theme.palette.primary.main}`,
  },
  isSelected: {
    background: `linear-gradient(0deg, 
      ${hexToRGBA(theme.palette.primary.main, 0.08)} 0%, 
      ${hexToRGBA(theme.palette.primary.main, 0.08)} 100%), #FFF`,
  },
  notSelected: {
    background: 'transparent',
  },
}));
