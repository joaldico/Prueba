import { FC, useEffect, useState } from 'react';

import { getProfesionalTracking } from '../../../../../api/api';
import CustomAccordion from '../../../../../components/CustomAccordion/CustomAccordion';
import { ServiceData } from '../../../../../models/ServiceDataModel';
import { GeolocalizationMap } from './GeolocalizationMap/GeolocalizationMap';
import { GeolocalizationNotFound } from './GeolocalizationNotFound/GeolocalizationNotFound';
import { ServiceInformation } from './ServiceInformation/ServiceInformation';
import { useStyles } from './styles';

type Props = {
  serviceData: ServiceData | undefined;
};

export const OnTheWayServiceStep: FC<Props> = ({ serviceData }) => {
  const classes = useStyles();

  const idProfessional = serviceData ? serviceData.idProfessional : null;
  const [profesionalGeolocation, setProfesionalGeolocation] = useState<any>(null);
  const [updateProfessional, setUpdateProfessional] = useState<any>(false);
  const [uploadTimer, setUploadTimer] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    if (idProfessional != null) {
      getInformation();
    }
  }, []);

  useEffect(() => {
    if (updateProfessional) {
      getInformation();
    }
  }, [updateProfessional]);

  const getInformation = async () => {
    const response = await getProfesionalTracking(idProfessional);

    if (response.code === 200) {
      if (response.data.latitude && response.data.longitude) {
        setProfesionalGeolocation(response.data);
        setUpdateProfessional(false);
      }
    } else {
      setProfesionalGeolocation(null);
    }
  };

  const updateProfessionalInformation = () => {
    setUpdateProfessional(!updateProfessional);
    setUploadTimer(2);
    setLastUpdate(new Date());
  };

  const getLocationProfesionalComponent = () => {
    if (profesionalGeolocation == null) {
      return <GeolocalizationNotFound />;
    }

    if (profesionalGeolocation != null) {
      return (
        <GeolocalizationMap
          serviceData={serviceData}
          profesionalGeolocation={profesionalGeolocation}
          updateProfessional={updateProfessionalInformation}
          isUpdateProfessional={updateProfessional}
          uploadTimer={uploadTimer}
          setUploadTimer={setUploadTimer}
          lastUpdate={lastUpdate}
        />
      );
    }
  };

  return (
    <div className={classes.container}>
      <CustomAccordion
        title={'Ubicación del profesional'}
        detailsChildren={getLocationProfesionalComponent()}
      />
      <ServiceInformation serviceData={serviceData} showDateProfessional />
    </div>
  );
};
