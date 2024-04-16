import { Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FC, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getServiceData } from '../../../api/api';
import ServiceStepper from '../../../components/Atoms/Stepper';
import ContainerPage from '../../../components/LayoutPublicPortal/ContainerPage';
import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { ServiceData } from '../../../models/ServiceDataModel';
import { isEmpty } from '../../../util/commons';
import { CanceledServiceStep } from './components/CanceledServiceStep';
import { CompletedServiceStep } from './components/CompletedServiceStep';
import { CreatedServiceStep } from './components/CreatedServiceStep';
import { InitiatedServiceStep } from './components/InitiatedServiceStep';
import { LinkNotAvailable } from './components/LinkNotAvailable';
import { OnTheWayServiceStep } from './components/OnTheWayServiceStep';
import { ScheduledServiceStep } from './components/ScheduledServiceStep';
import { ServiceExpired } from './components/ServiceExpired';
import { ServiceTitle } from './components/ServiceTitle/ServiceTitle';

export const CREATED_SERVICE_STEP = 1;
export const SCHEDULED_SERVICE_STEP = 2;
export const ON_THE_WAY_STEP = 3;
export const INITIATED_STEP = 4;
export const COMPLETED_STEP = 5;
export const CANCELED_SERVICE_STEP = 6;

export const CREATED_SERVICE_STATE = 0;
export const SCHEDULED_SERVICE_STATE = 10;
export const ACEPTED_SERVICE_STATE = 1;
export const ON_THE_WAY_SERVICE_STATE = 5;
export const INITIATED_SERVICE_STATE = 4;
export const COMPLETED_SUCCESSFULY_SERVICE_STATE = 3;
export const COMPLETED_INCIDENT_SERVICE_STATE = -5;
export const CANCELLED_CLIENT_SERVICE_STATE = -2;
export const CANCELLED_OPERATIONS_SERVICE_STATE = 22;

export const ServiceTracking: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { businessUnitUUID } = useContext(BusinessUnitParamsContext);

  const [showService, setShowService] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showLinkNotAvailable, setShowLinkNotAvailable] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [serviceId, setServiceId] = useState('');
  const [serviceData, setServiceData] = useState<ServiceData | undefined>(undefined);

  const smallSize = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    if (id) {
      setServiceId(id);
    } else {
      setShowLinkNotAvailable(true);
      setShowContent(true);
    }
  }, []);

  useEffect(() => {
    if (!isEmpty(serviceId) && !isEmpty(businessUnitUUID)) {
      handleGetServiceData(serviceId, businessUnitUUID);
    }
  }, [serviceId, businessUnitUUID]);

  const formatSteps = (stateId: number) => {
    switch (stateId) {
      case CREATED_SERVICE_STATE:
        return CREATED_SERVICE_STEP;
      case SCHEDULED_SERVICE_STATE:
        return CREATED_SERVICE_STEP;
      case ACEPTED_SERVICE_STATE:
        return SCHEDULED_SERVICE_STEP;
      case ON_THE_WAY_SERVICE_STATE:
        return ON_THE_WAY_STEP;
      case INITIATED_SERVICE_STATE:
        return INITIATED_STEP;
      case COMPLETED_SUCCESSFULY_SERVICE_STATE:
        return COMPLETED_STEP;
      case COMPLETED_INCIDENT_SERVICE_STATE:
        return COMPLETED_STEP;
      case CANCELLED_CLIENT_SERVICE_STATE:
        return CANCELED_SERVICE_STEP;
      case CANCELLED_OPERATIONS_SERVICE_STATE:
        return CANCELED_SERVICE_STEP;
      default:
        return -1;
    }
  };

  const handleGetServiceData = async (serviceId: string, businessUnitUUID: string | undefined) => {
    setShowContent(false);

    const response = await getServiceData(serviceId, businessUnitUUID);

    if (response.code === 400) {
      if (response.data.message === 'BUSINESS_UNIT_UUID_NOT_ALLOWED') {
        setShowLinkNotAvailable(true);
      }

      setShowService(false);
    } else {
      setServiceData(response.data);
      setActiveStep(formatSteps(response.data.stateId) - 1);
    }
    setShowContent(true);
  };

  const getStepsToShow = () => {
    const steps = [
      {
        id: CREATED_SERVICE_STEP,
        text: smallSize
          ? t('portalPublic.page.serviceTracking.step.created.mobile')
          : t('portalPublic.page.serviceTracking.step.created'),
        optional: false,
        visible: true,
      },
      {
        id: SCHEDULED_SERVICE_STEP,
        text: smallSize
          ? t('portalPublic.page.serviceTracking.step.scheduled.mobile')
          : t('portalPublic.page.serviceTracking.step.scheduled'),
        optional: false,
        visible: true,
      },
      {
        id: ON_THE_WAY_STEP,
        text: smallSize
          ? t('portalPublic.page.serviceTracking.step.onTheWay.mobile')
          : t('portalPublic.page.serviceTracking.step.onTheWay'),
        optional: false,
        visible: true,
      },
      {
        id: INITIATED_STEP,
        text: smallSize
          ? t('portalPublic.page.serviceTracking.step.initiated.mobile')
          : t('portalPublic.page.serviceTracking.step.initiated'),
        optional: false,
        visible: true,
      },
      {
        id: COMPLETED_STEP,
        text: smallSize
          ? t('portalPublic.page.serviceTracking.step.ended.mobile')
          : t('portalPublic.page.serviceTracking.step.ended'),
        optional: false,
        visible: true,
      },
    ];

    return steps.filter((step) => step.visible === true);
  };

  const getStepContent = (step: number) => {
    switch (step + 1) {
      case CREATED_SERVICE_STEP:
        return <CreatedServiceStep serviceData={serviceData} />;
      case SCHEDULED_SERVICE_STEP:
        return <ScheduledServiceStep serviceData={serviceData} />;
      case ON_THE_WAY_STEP:
        return <OnTheWayServiceStep serviceData={serviceData} />;
      case INITIATED_STEP:
        return <InitiatedServiceStep serviceData={serviceData} />;
      case COMPLETED_STEP:
        return <CompletedServiceStep serviceData={serviceData} />;
      case CANCELED_SERVICE_STEP:
        return <CanceledServiceStep serviceData={serviceData} />;

      default:
        return <>No controlado, {step}</>;
    }
  };

  return (
    <ContainerPage>
      {showLinkNotAvailable && showContent && <ServiceExpired />}
      {showService && showContent && !showLinkNotAvailable ? (
        <Grid container rowSpacing={3}>
          <ServiceTitle serviceData={serviceData} />

          <Grid item xs={12} sx={{ paddingX: '0.80rem' }}>
            <ServiceStepper steps={getStepsToShow()} activeStep={activeStep} />
          </Grid>

          <Grid item xs={12}>
            {getStepContent(activeStep)}
          </Grid>
        </Grid>
      ) : (
        !showService && showContent && !showLinkNotAvailable && <LinkNotAvailable />
      )}
    </ContainerPage>
  );
};
