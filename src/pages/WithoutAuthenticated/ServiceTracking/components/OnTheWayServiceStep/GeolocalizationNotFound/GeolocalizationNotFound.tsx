import { Typography } from '@mui/material';

import geolocalizationNotFound from '../../../../../../assets/images/geolocalizationNotFound.png';
import { Image } from '../../../../../../components/Atoms/Image';
import { useStyles } from './styles';

export const GeolocalizationNotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Image src={geolocalizationNotFound} alt={'geolocalization-not-found'} />
      <Typography className={classes.content}>
        {'El profesional no cuenta con geolocalización.'}
      </Typography>
    </div>
  );
};
