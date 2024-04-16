import { Button } from '@mui/material';
import moment from 'moment';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import {
  ESTATE_MATERIAL,
  PERSON_MATERIAL,
  PET_MATERIAL,
  VEHICLE_MATERIAL,
} from '../../../../../constants/constants';
import BusinessUnitParamsContext from '../../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { getRequestSelector } from '../../../../../redux/selectors';
import { handleContactPhoneNumber } from '../../../../../util/commons';
import Field from '../RequestView/CardsTypeMaterial/Materials/Field/Field';
import CardSumary from './CardSumary/CardSumary';
import { useStyles } from './styles';
interface SummaryViewProps {
  handleBack: any;
}

const SummaryView: React.FC<SummaryViewProps> = ({ handleBack }) => {
  const classes = useStyles();
  const { selectedCard, materialSelected, serviceName, descriptionData } =
    useSelector(getRequestSelector);
  const { dateFormatCode, timezoneIdName } = useContext(BusinessUnitParamsContext);

  const handleNext = () => {
    console.info('handleNext');
  };

  const getSelectedMaterialTitle = () => {
    if (selectedCard === VEHICLE_MATERIAL) {
      return 'Vehiculo seleccionado';
    }
    if (selectedCard === ESTATE_MATERIAL) {
      return 'Inmueble seleccionado';
    }
    if (selectedCard === PET_MATERIAL) {
      return 'Mascota seleccionada';
    }
    if (selectedCard === PERSON_MATERIAL) {
      return 'Persona seleccionada';
    } else {
      return '';
    }
  };

  const getSelectedMaterial = () => {
    if (selectedCard === VEHICLE_MATERIAL) {
      return (
        <>
          <Field field={'Marca: '} value={materialSelected.brand} />
          <Field field={'Modelo: '} value={materialSelected.model} />
          <Field field={'Color: '} value={materialSelected.color} />
          <Field field={'Patente: '} value={materialSelected.patentPlate} />
          <Field
            field={'VIN/Motor: '}
            value={`${materialSelected.vin ? materialSelected.vin : '-'}/${
              materialSelected.engineNumber ? materialSelected.engineNumber : '-'
            }`}
          />
        </>
      );
    }
    if (selectedCard === ESTATE_MATERIAL) {
      return (
        <>
          <Field
            field={'Tipo: '}
            value={materialSelected.homeTypeId === 2 ? 'Departamento' : 'Casa'}
          />
          <Field field={'Dirección: '} value={materialSelected.address} />
          <Field field={'Numeración: '} value={materialSelected.postalCode} />
        </>
      );
    }
    if (selectedCard === PET_MATERIAL) {
      return (
        <>
          <Field field={'Nombre: '} value={materialSelected.petName} />
          <Field field={'Tipo: '} value={materialSelected.type} />
          <Field field={'Raza: '} value={materialSelected.petBreed} />
        </>
      );
    }
    if (selectedCard === PERSON_MATERIAL) {
      return (
        <>
          <Field field={'Nombre: '} value={materialSelected.firstName} />
          <Field field={'Apellido: '} value={materialSelected.lastName} />
          <Field field={'Tipo de documento: '} value={materialSelected.identificationType} />
          <Field field={'No. documento: '} value={materialSelected.identificationNumber} />
        </>
      );
    }
  };

  return (
    <div className={classes.container}>
      <CardSumary title={'Servicio a solicitar'}>
        <div className={classes.serviceTitle}>{serviceName}</div>
      </CardSumary>
      <CardSumary title={getSelectedMaterialTitle()}>{getSelectedMaterial()}</CardSumary>
      <CardSumary title={'Detalle de la solicitud'}>
        <Field field={'Origen: '} value={descriptionData?.directionOrigen?.name} />
        <Field field={'Destino: '} value={descriptionData?.directionDestination?.name} />
        <Field
          field={'Fecha deseada: '}
          value={moment(descriptionData?.date)
            .tz(timezoneIdName || '')
            .format(dateFormatCode)}
        />
        <Field field={'Hora deseada: '} value={descriptionData?.time} />
        <Field
          field={'Teléfono: '}
          value={handleContactPhoneNumber(descriptionData?.phoneNumber)}
        />
        <Field field={'Correo electrónico: '} value={descriptionData?.email} />
      </CardSumary>
      <div className={classes.buttons}>
        <Button
          onClick={handleBack}
          style={{ textTransform: 'none' }}
          classes={{ root: classes.buttonCancel }}
        >
          Modificar solicitud
        </Button>
        <Button
          onClick={handleNext}
          style={{ textTransform: 'none' }}
          classes={{ root: classes.buttonSubmit }}
        >
          Continuar solicitud
        </Button>
      </div>
    </div>
  );
};

export default SummaryView;
