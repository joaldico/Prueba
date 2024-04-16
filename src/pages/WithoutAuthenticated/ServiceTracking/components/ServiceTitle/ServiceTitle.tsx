import { Grid, Typography } from '@mui/material';
import moment from 'moment';
import { FC, useContext } from 'react';

import BusinessUnitParamsContext from '../../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { ServiceData } from '../../../../../models/ServiceDataModel';
import { useStyles } from './styles';

type Props = {
  serviceData: ServiceData | undefined;
};

export const ServiceTitle: FC<Props> = ({ serviceData }) => {
  const classes = useStyles();
  const { dateFormatCode, timeFormat, timezoneIdName } = useContext(BusinessUnitParamsContext);
  const dateFormat =
    timeFormat === '12hr'
      ? `${dateFormatCode} - hh:mma`
      : timeFormat === '24hr'
      ? `${dateFormatCode} - HH:mm`
      : dateFormatCode;

  return (
    <>
      <Grid item md={7} sm={7} xs={12}>
        <Typography className={classes.serviceTitle}>{serviceData?.nameService}</Typography>
      </Grid>
      <Grid container item md={5} sm={5} xs={12} justifyContent="flex-end">
        <div className={classes.dateContainer}>
          <div>
            <Typography className={classes.dates}>{'Número del servicio:'}</Typography>
          </div>
          <div className={classes.datesInfo}>
            <Typography className={classes.dates}>
              {serviceData?.bookingId ? serviceData?.bookingId : ''}
            </Typography>
          </div>
          <div>
            <Typography className={classes.dates}>{'Servicio creado:'}</Typography>
          </div>
          <div className={classes.datesInfo}>
            <Typography className={classes.dates}>
              {serviceData?.creationDate
                ? moment(serviceData?.creationDate)
                    .tz(timezoneIdName || '')
                    .format(dateFormat)
                : ''}
            </Typography>
          </div>
        </div>
      </Grid>
    </>
  );
};
