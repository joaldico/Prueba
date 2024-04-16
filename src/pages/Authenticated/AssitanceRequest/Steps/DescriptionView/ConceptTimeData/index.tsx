import { Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import classNames from 'classnames';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { getCostConcept, getCustomerInfo } from '../../../../../../api/api';
import CustomPhoneInput from '../../../../../../components/Contact/CustomPhoneInput';
import InputTextController from '../../../../../../components/Contact/InputTextController';
import BusinessUnitParamsContext from '../../../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { getRequestSelector } from '../../../../../../redux/selectors';
import QuestionConcept from './components/QuestionConcept';
import { useStyles } from './styles';

interface ConceptTimeDataProps {
  control: any;
  setValue: any;
}

const ConceptTimeData: React.FC<ConceptTimeDataProps> = ({ control, setValue }) => {
  const classes = useStyles();
  const [checkBoleanTime, setCheckBoleanTime] = useState(true);
  const { serviceId } = useSelector(getRequestSelector);
  const [costConcept, setCostConcept] = useState([]);
  const { businessUnitUUID } = useContext(BusinessUnitParamsContext);

  const RATE_TYPE_UNIT = 1;
  const RATE_DUMMY = 3;
  const RATE_BASE = 4;

  const orderCostConcepts = (costConcepts: any) => {
    const costConceptOrder = costConcepts.sort((a: any, b: any) => {
      if (a.integrationMap) {
        return -1;
      }
      if (b.integrationMap) {
        return 1;
      }
      if (a.rateType < b.rateType) {
        return -1;
      }
      if (a.rateType > b.rateType) {
        return 1;
      }
      return 0;
    });
    return costConceptOrder;
  };

  useEffect(() => {
    dateTimeNow();
    getCostConcept(serviceId.toString(), businessUnitUUID).then((res) => {
      setCostConcept(
        orderCostConcepts(
          res.map((item: any) => ({
            id: item.id,
            name: item.costConcept.name,
            measure: item.costConcept.unit.name,
            codeUnit: item.costConcept.unit.code,
            validCoverage: item.costConcept.validCoverage,
            valid: item.costConcept.question && item.costConcept.validCoverage,
            show: item.costConcept.question,
            baseCost: item.baseCost,
            excessCost: item.excessBaseSale,
            top: item.top,
            quantity: item.sale,
            amount: null,
            acceptedGenericCost: false,
            rateType: item.costConcept.rateType,
            price: item.sale,
            costConceptId: item.costConcept.id,
            unitId: item.costConcept.unit ? item.costConcept.unit.id : null,
            integrationMap:
              item.costConcept.unit.code === 'distance-Km' && item.costConcept.integrationMap,
          }))
        )
      );
    });
    getCustomerInfo(businessUnitUUID).then((res) => {
      setValue('phoneNumber', res.mobilePhone);
      setValue('email', res.email);
    });
  }, []);

  const dateTimeNow = () => {
    const now = moment().format('YYYY-MM-DD - HH:mm');
    const currentDate = now.split(' - ')[0];
    const currentTime = now.split(' - ')[1];
    setValue('date', currentDate, { shouldValidate: true });
    setValue('time', currentTime, { shouldValidate: true });
  };

  const handleCheckboxChange = (event: any) => {
    if (event.target.checked) {
      dateTimeNow();
      setCheckBoleanTime(true);
    } else {
      setCheckBoleanTime(false);
    }
  };

  const checkCostConcepts = () => {
    const costConcepts = costConcept.filter((item: any) => item.show);
    if (costConcepts.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {costConcept.length > 0 && checkCostConcepts() && (
        <>
          <Typography variant={'body1'} className={classes.title} sx={{ marginTop: '24px' }}>
            Completa los detalles de la solicitud
          </Typography>
          {costConcept.map((item: any, index: number) => {
            return item.show ? (
              <QuestionConcept
                key={index}
                name={item.name}
                measure={item.measure}
                quantity={item.quantity}
                control={control}
                showDefault={
                  item.rateType === RATE_BASE ||
                  (item.rateType === RATE_TYPE_UNIT && item.integrationMap)
                }
                showRadio={item.rateType === RATE_DUMMY}
                id={item.id}
              />
            ) : (
              <></>
            );
          })}
        </>
      )}
      <Typography variant={'body1'} className={classes.title} sx={{ marginTop: '24px' }}>
        Elige fecha y hora deseada
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={5}>
        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
          <FormControlLabel
            value="end"
            control={
              <Checkbox
                color="primary"
                checked={checkBoleanTime}
                onChange={(e) => handleCheckboxChange(e)}
              />
            }
            label=""
            labelPlacement="end"
            className={checkBoleanTime ? classes.checkboxField : classes.checkboxDisabledTime}
          />
          <Typography variant={'body2'} className={classes.text}>
            Utilizar fecha y hora actual.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                value={value}
                onChange={(e) => {
                  onChange(e);
                  setCheckBoleanTime(false);
                }}
                label={'Fecha de la asistencia'}
                type="date"
                variant="outlined"
                className={classes.dateField}
                InputLabelProps={{
                  shrink: true,
                  classes: {
                    asterisk: classes.asterikColor,
                    focused: classes.cssFocused,
                    root: error ? classes.errorColor : classes.labelRoot,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classNames(error ? classes.errorColor : classes.root),
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                required
                helperText={error ? error.message : null}
              />
            )}
            rules={{
              required: 'Fecha de la asistencia requerida',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            control={control}
            name="time"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                value={value}
                onChange={(e) => {
                  onChange(e);
                  setCheckBoleanTime(false);
                }}
                label={'Hora de la asistencia'}
                type="time"
                variant="outlined"
                className={classes.dateField}
                InputLabelProps={{
                  shrink: true,
                  classes: {
                    asterisk: classes.asterikColor,
                    focused: classes.cssFocused,
                    root: error ? classes.errorColor : classes.labelRoot,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classNames(error ? classes.errorColor : classes.root),
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                required
                helperText={error ? error.message : null}
              />
            )}
            rules={{
              required: 'Hora de la asistencia requerida',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'body2'} className={classes.text}>
            Ejemplo de formato: DD/MM/AAAA
          </Typography>
        </Grid>
      </Grid>
      <Typography variant={'body1'} className={classes.title} sx={{ marginTop: '24px' }}>
        Datos de contacto
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={5} sx={{ marginTop: '5px' }}>
        <Grid item xs={12} sm={4}>
          <CustomPhoneInput
            id={'phoneNumber'}
            name={'phoneNumber'}
            control={control}
            label={'Teléfono'}
            required
            variant={'outlined'}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputTextController
            name={'email'}
            label={'Correo electrónico'}
            placeholder={'contacto@correo.com'}
            control={control}
            type={'email'}
            minLength={1}
            required={true}
            className={classes.formInput}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ConceptTimeData;
