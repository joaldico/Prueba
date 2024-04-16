import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { FC, useEffect, useState } from 'react';

import currentLocation from '../../../../../../assets/images/currentLocation.png';
import nearPinBlue from '../../../../../../assets/images/nearPinBlue.png';
import nearPinOrange from '../../../../../../assets/images/nearPinOrange.png';
import { ServiceData } from '../../../../../../models/ServiceDataModel';
import { LocationInformation } from '../LocationInformation/LocationInformation';
import GoogleMapEngine from './GoogleMapEngine/GoogleMapEngine';
import { useStyles } from './styles';

const options = {
  apiKey: 'AIzaSyBVInFQ_FZEWP6Hjoftdo89onqUnD8C4DU',
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

type Props = {
  serviceData: ServiceData | undefined;
  profesionalGeolocation: any;
  updateProfessional: any;
  isUpdateProfessional: boolean;
  uploadTimer: number;
  setUploadTimer: any;
  lastUpdate: any;
};

export const GeolocalizationMap: FC<Props> = ({
  serviceData,
  profesionalGeolocation,
  updateProfessional,
  isUpdateProfessional,
  uploadTimer,
  setUploadTimer,
  lastUpdate,
}) => {
  const classes = useStyles();
  const [markers, setMarkers] = useState<any>([]);

  const latitudeDestination =
    serviceData && serviceData.latitudeDestination ? Number(serviceData.latitudeDestination) : null;
  const longitudeDestination =
    serviceData && serviceData.longitudeDestination
      ? Number(serviceData.longitudeDestination)
      : null;
  const latitudeOrigin =
    serviceData && serviceData.latitudeOrigin ? Number(serviceData.latitudeOrigin) : null;
  const longitudeOrigin =
    serviceData && serviceData.longitudeOrigin ? Number(serviceData.longitudeOrigin) : null;
  const professionalLat = profesionalGeolocation.latitude
    ? Number(profesionalGeolocation.latitude)
    : null;
  const professionalLng = profesionalGeolocation.longitude
    ? Number(profesionalGeolocation.longitude)
    : null;

  useEffect(() => {
    const markersAux = [
      {
        position: {
          lat: professionalLat,
          lng: professionalLng,
        },
        label: 'Ubicación del profesional ',
        icon: currentLocation,
        address: profesionalGeolocation.address,
        showAddres: profesionalGeolocation.address != null,
      },
    ];

    if (latitudeDestination != null && longitudeDestination != null) {
      markersAux.push({
        position: {
          lat: latitudeDestination,
          lng: longitudeDestination,
        },
        label: 'Destino del servicio',
        icon: nearPinOrange,
        address: '',
        showAddres: false,
      });
    }

    if (latitudeOrigin != null && longitudeOrigin != null) {
      markersAux.push({
        position: {
          lat: latitudeOrigin,
          lng: longitudeOrigin,
        },
        label: 'Origen del servicio',
        icon: nearPinBlue,
        address: '',
        showAddres: false,
      });
    }

    setMarkers(markersAux);
  }, [professionalLat, professionalLng, isUpdateProfessional]);

  if (window.google) {
    return (
      <div id="mapEngineContainer" className={classes.divSpaceSection}>
        {markers.length > 0 && professionalLat && professionalLng && !isUpdateProfessional && (
          <>
            <GoogleMapEngine options={options} mapOptions={options.mapOptions} markers={markers} />
            <LocationInformation
              updateProfessional={updateProfessional}
              uploadTimer={uploadTimer}
              setUploadTimer={setUploadTimer}
              lastUpdate={lastUpdate}
            />
          </>
        )}
        {(isUpdateProfessional || (!professionalLat && !professionalLng)) && (
          <div className={classes.load}>
            <CircularProgress className={classes.progress} />
            <Typography> Cargando...</Typography>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={classes.load}>
        <Typography> Ha ocurrido un error al cargar el mapa</Typography>
      </div>
    );
  }
};

export default GeolocalizationMap;
