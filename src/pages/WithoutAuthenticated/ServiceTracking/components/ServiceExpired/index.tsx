import { Box, Button, Grid } from '@mui/material';
import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import serviceExpired from '../../../../../assets/images/serviceExpired.svg';
import { Image } from '../../../../../components/Atoms/Image';
import BusinessUnitParamsContext from '../../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { useStyles } from './styles';

export const ServiceExpired: FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { contactChannelPhone } = useContext(BusinessUnitParamsContext);

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12} sm={6} md={6} className={classes.imageContainer}>
        <Image src={serviceExpired} alt={'service-expired'} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} className={classes.textGrid}>
        <Box className={classes.textContainer}>
          <p className={classes.title}>{t('portalPublic.page.serviceExpired.title')}</p>
          <div>
            <p className={classes.text}>{t('portalPublic.page.serviceExpired.contactText')}</p>
            <p className={classes.text}>{t('portalPublic.page.serviceExpired.suggestText')}</p>
          </div>
          <div>
            <p className={classes.text}>
              {t('portalPublic.page.serviceExpired.problemContinueText')}
            </p>
            <div className={classes.contactContainer}>
              <p className={classes.text}>
                {t('portalPublic.page.serviceExpired.numberText')}
                &nbsp;
                <b>{contactChannelPhone}.</b>
              </p>
            </div>
          </div>
          <Button
            variant="contained"
            className={classes.button}
            size={'small'}
            sx={{ textTransform: 'none' }}
          >
            {t('portalPublic.page.serviceExpired.button')}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
