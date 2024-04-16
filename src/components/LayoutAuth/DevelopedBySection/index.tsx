import { Typography } from '@mui/material';

import { LOGO_HORIZONTAL_DEFAULT } from '../../../constants/constants';
import { useStyles } from './styles';

const DevelopedBySection = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerDevelopedBy}>
      <Typography className={classes.developedBy}>{'Desarrollado por'}</Typography>
      <img
        className={classes.logoDevelopedBy}
        src={LOGO_HORIZONTAL_DEFAULT}
        alt={'tutenlabs-logo'}
      />
    </div>
  );
};

export default DevelopedBySection;
