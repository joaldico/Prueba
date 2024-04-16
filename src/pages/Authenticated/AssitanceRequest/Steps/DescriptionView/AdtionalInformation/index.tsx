import { Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { getCommunes, getRegions, getServiceById } from '../../../../../../api/api';
import AutocompleteInput from '../../../../../../components/Autocomplete/AutocompleteInput';
import DynamicForm from '../../../../../../components/DynamicForm';
import MapUIT from '../../../../../../components/MapUIT/index';
import { GOOGLE_MAPS_API_KEY } from '../../../../../../constants/constants';
import BusinessUnitParamsContext from '../../../../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { getRequestSelector } from '../../../../../../redux/selectors';
import { isEmpty } from '../../../../../../util/commons';
import { useStyles } from './styles';

const options = {
  apiKey: GOOGLE_MAPS_API_KEY,
  predictionCodeLanguage: 'es-419',
  height: '500px',
  center: { lat: -33.4488897, lng: -70.6692655 },
  zoom: 15,
  fitBoundsOnlyOnMarkerLoad: true,
  mapOptions: {
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    zoomControl: false,
  },
};

interface AdtionalInformationProps {
  control: any;
  setValue: any;
  watch: any;
  errorDirection: any;
  setErrorDirection: any;
  errorDirectionFinal: any;
  setErrorDirectionFinal: any;
}

const AdtionalInformation: React.FC<AdtionalInformationProps> = ({
  control,
  watch,
  setValue,
  errorDirection,
  setErrorDirection,
  errorDirectionFinal,
  setErrorDirectionFinal,
}) => {
  const classes = useStyles();
  const [pointFetch, setPointFetch] = useState<any>(null);
  const { descriptionData, serviceId, materialSelected } = useSelector(getRequestSelector);

  const { businessUnitUUID } = useContext(BusinessUnitParamsContext);
  const [regionsData, setRegionsData] = useState([]);
  const [communesData, setCommunesData] = useState([]);
  const [haveDestination, setHaveDestination] = useState(false);
  const watchAllFields = watch();

  const infoSectionRef = useRef(null);
  const [questionnaireUUID, setQuestionnaireUUID] = useState<any>(null);
  const [callback, setCallback] = useState<any>(false);
  const [renderKey, setRenderKey] = useState<any>(0);
  const [submitProps, setSubmitProps] = useState<any>(null);
  const [version, setVersion] = useState<any>();

  useEffect(() => {
    if (!isEmpty(descriptionData)) {
      if (!isEmpty(descriptionData?.region?.value)) {
        setValue('region', descriptionData?.region);
      }
      if (!isEmpty(descriptionData?.commune?.value)) {
        setValue('commune', descriptionData?.commune);
      }
    }
  }, []);

  useEffect(() => {
    getRegions(businessUnitUUID).then((res: any) => {
      setRegionsData(
        res?.map((currentRegion: any) => {
          return { label: currentRegion.name, value: currentRegion.id };
        })
      );
    });
  }, []);

  useEffect(() => {
    getServiceById(businessUnitUUID, serviceId).then((res: any) => {
      if (res?.addressOption) {
        if (res?.addressOption === 3) setHaveDestination(true);

        setQuestionnaireUUID(res?.questionnaireUUID);
      }
    });

    getHomeMaterialCoordinates();
  }, []);

  useEffect(() => {
    if (!isEmpty(watchAllFields.region) && !isEmpty(watchAllFields.region.value)) {
      getCommunes(businessUnitUUID, watchAllFields.region.value).then((res: any) => {
        setCommunesData(
          res?.items?.map((currentCommune: any) => {
            return { label: currentCommune.name, value: currentCommune.id };
          })
        );
      });
    }
  }, [watchAllFields.region]);

  const getPoints = () => {
    const points = [
      {
        id: 'origin',
        input: {
          label: 'Ubicación de origen',
          placeholder: 'Ingresa',
        },
        marker: {
          title: 'Ubicación de origen',
        },
      },
    ];

    if (haveDestination) {
      points.push({
        id: 'destination',
        input: {
          label: 'Ubicación de destino',
          placeholder: 'Ingresa',
        },
        marker: {
          title: 'Ubicación de destino',
        },
      });
    }
    return points;
  };

  const getHomeMaterialCoordinates = () => {
    if (materialSelected && materialSelected.latitude && materialSelected.longitude) {
      const marker = {
        id: 'M-origin',
        inputId: 'origin',
        inputLabel: 'Ubicación de origen',
        name: materialSelected.address,
        position: {
          lat: Number(materialSelected.latitude),
          lng: Number(materialSelected.longitude),
        },
      };
      setPointFetch(marker);
    }
  };

  const onChangeMarker = (pointId: any, status: any, marker: any) => {
    if (pointId === 'origin' && status === 'onInputChange') {
      setValue('directionOrigen', marker);
      setErrorDirection(false);
    }

    if (pointId === 'destination' && status === 'onInputChange') {
      setValue('directionDestination', marker);
      setErrorDirectionFinal(false);
    }
  };

  //DynamicForm
  const option = () => {
    return {
      uri: `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}`,
      headers: {
        businessUnit: businessUnitUUID,
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
  };

  const onSubmit = (props: any) => {
    setSubmitProps(props);
  };

  return (
    <>
      <Typography variant={'body1'} className={classes.title} sx={{ marginTop: '24px' }}>
        Ingresa información adicional de la solicitud
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={5} sx={{ marginTop: '5px' }}>
        <div style={{ marginLeft: '30px', width: '100%' }} ref={infoSectionRef}>
          {questionnaireUUID && businessUnitUUID && (
            <DynamicForm
              key={renderKey}
              formId={questionnaireUUID}
              options={option()}
              onSubmit={onSubmit}
              callback={callback}
              setVersion={setVersion}
            />
          )}
        </div>
      </Grid>

      <Typography variant={'body1'} className={classes.title} sx={{ marginTop: '24px' }}>
        Ingresa la dirección de la solicitud
      </Typography>
      <Typography variant={'body1'} className={classes.subTitle}>
        Debes seleccionar una opción de cada desplegable:
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={5} sx={{ marginTop: '5px' }}>
        <Grid item xs={12} md={4} sm={6}>
          <Controller
            name={'region'}
            control={control}
            defaultValue={''}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <AutocompleteInput
                label={'Región'}
                variant="outlined"
                fullWidth
                placeholder={'Selecciona'}
                onChange={(e: any) => {
                  onChange(e);
                  setValue('region', e);
                }}
                options={regionsData}
                required
                disableClearable
                error={error}
                value={value}
              />
            )}
            rules={{ required: 'Región es requerido' }}
          />
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <Controller
            name={'commune'}
            control={control}
            defaultValue={''}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <AutocompleteInput
                label={'Comuna'}
                variant="outlined"
                fullWidth
                placeholder={'Selecciona'}
                onChange={(e: any) => {
                  onChange(e);
                  setValue('commune', e);
                }}
                options={communesData}
                required
                disableClearable
                error={error}
                value={value}
                disabled={isEmpty(watchAllFields?.region?.value)}
              />
            )}
            rules={{ required: 'Comuna es requerida' }}
          />
        </Grid>

        <MapUIT
          options={options}
          points={getPoints()}
          onChange={onChangeMarker}
          pointFetch={pointFetch}
          errorDirection={errorDirection}
          errorDirectionFinal={errorDirectionFinal}
        />
      </Grid>
    </>
  );
};

export default AdtionalInformation;
