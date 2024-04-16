import { Box, Grid, LinearProgress, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Image } from '../../../../../components/Atoms/Image';
import progressImage from '../../assets/progress.svg';
import progressMobile from '../../assets/progress-mobile.svg';
import { useStyles } from './styles';

const ProgressView = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={12} className={classes.imageContainerDesktop}>
        <Image src={progressImage} width={'auto'} />
      </Grid>
      <Grid item xs={12} sm={12} className={classes.imageContainerMobile}>
        <Image src={progressMobile} width={'auto'} />
      </Grid>
      <Grid item xs={12} sm={12} className={classes.progressBarContainer}>
        <Box sx={{ width: '50%' }}>
          <LinearProgress />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} className={classes.textContainer}>
        <Typography variant={'body1'} className={classes.text}>
          {t('Espera, por favor.')}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProgressView;
