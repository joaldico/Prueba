import { Box, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import BoxImage from '../../../../../../assets/images/box.svg';
import { Image } from '../../../../../../components/Atoms/Image';
import BusinessUnitParamsContext from '../../../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { handleContactPhoneNumber } from '../../../../../../util/commons';
import { useStyles } from './styles';

const RequestService = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { portalConfigParams } = useContext(BusinessUnitParamsContext);
  const { contact_phone } = portalConfigParams!;

  return (
    <Box className={classes.empty}>
      <Grid container justifyContent="center" alignItems="flex-start">
        <Grid item xs={3} md={3}>
          <Image src={BoxImage} alt={'Empty'} />
        </Grid>
        <Grid item xs={7} md={3}>
          <Typography className={classes.emptyTitle} color="textPrimary" variant={'h1'}>
            {t('Lo sentimos')}
          </Typography>
          <Typography className={classes.emptyBody} color="textPrimary" variant={'body1'}>
            {t(
              `No dispones de opciones disponibles para este servicio, para continuar con tu solicitud puedes comunicarte al número de contacto `
            )}
            <span className={classes.phoneNumber}>{handleContactPhoneNumber(contact_phone)}</span>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RequestService;
