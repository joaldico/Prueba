import { Button, Grid } from '@mui/material';
import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import linkNotAvailable from '../../../../../assets/images/linkNotAvailable.svg';
import { Image } from '../../../../../components/Atoms/Image';
import BusinessUnitParamsContext from '../../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { useStyles } from './styles';

export const LinkNotAvailable: FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { contactChannelPhone } = useContext(BusinessUnitParamsContext);

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12} sm={6} md={6} className={classes.imageContainer}>
        <Image src={linkNotAvailable} alt={'link-not-available'} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} className={classes.textGrid}>
        <Grid container spacing={0} className={classes.textContainer}>
          <Grid item xs={12} className={classes.textGrid}>
            <p className={classes.title}>{t('portalPublic.page.linkNotAvailable.title')}</p>
          </Grid>

          <Grid item xs={12} className={classes.textGrid}>
            <p className={classes.text}>{t('portalPublic.page.linkNotAvailable.endedLink')}</p>
          </Grid>

          <Grid item xs={12} className={classes.textGrid}>
            <p className={classes.text}>
              {t('portalPublic.page.linkNotAvailable.questions')}
              &nbsp;
              <b>{contactChannelPhone}.</b>
            </p>
          </Grid>
          <Button
            variant="contained"
            className={classes.button}
            size={'small'}
            sx={{ textTransform: 'none' }}
          >
            {t('portalPublic.page.linkNotAvailable.button')}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
