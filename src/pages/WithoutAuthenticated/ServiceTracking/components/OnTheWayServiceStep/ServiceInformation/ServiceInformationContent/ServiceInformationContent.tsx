import { Grid, Typography } from '@mui/material';
import moment from 'moment';
import { FC, useContext, useEffect, useState } from 'react';

import { getProfesionalProviderInfo } from '../../../../../../../api/api';
import BusinessUnitParamsContext from '../../../../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { useStyles } from './styles';

type Props = {
  idProfessional?: number | null;
  idProvider?: number | null;
  showDateProfessional?: boolean;
  showStarDate?: boolean;
  showEndServiceDate?: boolean;
  showExecutionDate?: boolean;
  cancelServiceDate?: string | null;
  customColumnsChipDesktop?: number | null;
  customComponent?: any;
  executionStartDate?: string | null;
  actualStartDate?: string | null;
  technicalDateOnTheWay?: string | null;
  endDate?: string | null;
};

export const ServiceInformationContent: FC<Props> = ({
  idProfessional,
  idProvider,
  showDateProfessional,
  showStarDate,
  showEndServiceDate,
  showExecutionDate,
  cancelServiceDate,
  customColumnsChipDesktop,
  customComponent,
  executionStartDate,
  actualStartDate,
  technicalDateOnTheWay,
  endDate,
}) => {
  const classes = useStyles();
  const [professional, setProfesional] = useState(null);
  const [provider, setProvider] = useState(null);
  const { dateFormatCode, timeFormat, timezoneIdName } = useContext(BusinessUnitParamsContext);
  const dateFormat =
    timeFormat === '12hr'
      ? `${dateFormatCode} - hh:mma`
      : timeFormat === '24hr'
      ? `${dateFormatCode} - HH:mm`
      : dateFormatCode;

  useEffect(() => {
    if (idProfessional != null || idProvider != null) {
      getInformation();
    }
  }, [idProfessional, idProvider]);

  const getInformation = async () => {
    const response = await getProfesionalProviderInfo(idProfessional, idProvider);
    if (response.code === 200) {
      if (response.data.professionalInfo && response.data.professionalInfo.fullName) {
        setProfesional(response.data.professionalInfo.fullName);
      }
      if (response.data.providerInfo && response.data.providerInfo.nombreEmpresa) {
        setProvider(response.data.providerInfo.nombreEmpresa);
      }
    }
  };

  const getComponentDate = () => {
    if (showEndServiceDate) {
      return (
        <div className={classes.dateContainer}>
          <Typography className={classes.title}>{'Finalización del servicio:'}</Typography>
          <Typography className={classes.content}>
            {endDate
              ? moment(endDate)
                  .tz(timezoneIdName || '')
                  .format(dateFormat)
              : ''}
          </Typography>
        </div>
      );
    } else return null;
  };

  const getComponentCancelDate = () => {
    if (cancelServiceDate) {
      return (
        <div className={classes.dateContainer}>
          <Typography className={classes.title}>{'Fecha cancelación:'}</Typography>
          <Typography className={classes.content}>
            {cancelServiceDate
              ? moment(cancelServiceDate)
                  .tz(timezoneIdName || '')
                  .format(dateFormat)
              : ''}
          </Typography>
        </div>
      );
    } else return null;
  };

  const getComponentExecutionDate = () => {
    return (
      <div className={classes.dateContainer}>
        <Typography className={classes.title}>{'Fecha agendada del servicio:'}</Typography>
        <Typography className={classes.content}>
          {executionStartDate
            ? moment(executionStartDate)
                .tz(timezoneIdName || '')
                .format(dateFormat)
            : ''}
        </Typography>
      </div>
    );
  };

  const getComponentTechnicalDate = () => {
    return (
      <div className={classes.dateContainer}>
        <Typography className={classes.title}>{'Inicio de traslado del profesional:'}</Typography>
        <Typography className={classes.content}>
          {technicalDateOnTheWay
            ? moment(technicalDateOnTheWay)
                .tz(timezoneIdName || '')
                .format(dateFormat)
            : ''}
        </Typography>
      </div>
    );
  };

  const getComponentStartDate = () => {
    return (
      <div className={classes.dateContainer}>
        <Typography className={classes.title}>{'Fecha inicio del servicio:'}</Typography>
        <Typography className={classes.content}>
          {actualStartDate
            ? moment(actualStartDate)
                .tz(timezoneIdName || '')
                .format(dateFormat)
            : ''}
        </Typography>
      </div>
    );
  };

  return (
    <div className={customComponent ? classes.gridCustomComponent : classes.grid}>
      <div className={classes.container}>
        {professional && (
          <>
            <div>
              <Typography className={classes.title}>{'Profesional:'}</Typography>
            </div>
            <div>
              <Typography className={classes.content}>{professional}</Typography>
            </div>
          </>
        )}
        {provider && (
          <>
            <div>
              <Typography className={classes.title}>{'Proveedor:'}</Typography>
            </div>
            <div>
              <Typography className={classes.content}>{provider}</Typography>
            </div>
          </>
        )}
      </div>
      {cancelServiceDate && <div className={classes.container}>{getComponentCancelDate()}</div>}
      <div className={classes.container}>
        {showExecutionDate && getComponentExecutionDate()}
        {showDateProfessional && getComponentTechnicalDate()}
        {getComponentDate()}
        {customComponent && (
          <Grid
            className={classes.chipContainer}
            item
            md={customColumnsChipDesktop ? customColumnsChipDesktop : 5}
            xs={12}
          >
            {customComponent}
          </Grid>
        )}
        {showStarDate && getComponentStartDate()}
      </div>
    </div>
  );
};
