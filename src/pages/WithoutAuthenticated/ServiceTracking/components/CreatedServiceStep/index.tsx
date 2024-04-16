import 'moment-timezone';

import { Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import moment from 'moment';
import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import CustomAccordion from '../../../../../components/CustomAccordion/CustomAccordion';
import BusinessUnitParamsContext from '../../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { ServiceData } from '../../../../../models/ServiceDataModel';
import { useStyles } from './styles';

type Props = {
  serviceData: ServiceData | undefined;
};

export const CreatedServiceStep: FC<Props> = ({ serviceData }) => {
  const theme = useTheme();
  const { dateFormatCode, timeFormat, timezoneIdName } = useContext(BusinessUnitParamsContext);
  const dateFormat =
    timeFormat === '12hr'
      ? `${dateFormatCode} - hh:mma`
      : timeFormat === '24hr'
      ? `${dateFormatCode} - HH:mm`
      : dateFormatCode;
  const { t } = useTranslation();
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <CustomAccordion
      title={'Información del servicio'}
      detailsChildren={
        <Grid container sx={{ marginTop: '16px' }}>
          <Grid item>
            <Typography variant="body1" className={classes.textTitle}>
              {t('Solicitud del servicio:')}
            </Typography>
          </Grid>
          <Grid
            item
            sx={
              isDesktop || isTablet
                ? { marginLeft: '38px' }
                : isMobile
                ? { marginLeft: '10px' }
                : {}
            }
          >
            <Typography variant="body1" className={classes.textBody}>
              {moment(serviceData?.desiredDate)
                .tz(timezoneIdName || '')
                .format(dateFormat)}
            </Typography>
          </Grid>
        </Grid>
      }
    />
  );
};
