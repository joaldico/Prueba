import { FC } from 'react';

import CustomAccordion from '../../../../../../components/CustomAccordion/CustomAccordion';
import { ServiceData } from '../../../../../../models/ServiceDataModel';
import { ServiceInformationContent } from './ServiceInformationContent/ServiceInformationContent';

type Props = {
  serviceData: ServiceData | undefined;
  showDateProfessional?: boolean;
  showStarDate?: boolean;
  showEndServiceDate?: boolean;
};

export const ServiceInformation: FC<Props> = ({
  serviceData,
  showDateProfessional,
  showStarDate,
  showEndServiceDate,
}) => {
  const idProfessional = serviceData ? serviceData.idProfessional : null;
  const idProvider = serviceData ? serviceData.idProvider : null;
  const executionStartDate = serviceData
    ? serviceData.executionStartDate?.replace(' ', 'T').concat('+0000')
    : null;
  const actualStartDate = serviceData ? serviceData.actualStartDate : null;
  const technicalDateOnTheWay = serviceData ? serviceData.technicalDateOnTheWay : null;
  const endDate = serviceData ? serviceData.actualEndDate : null;

  return (
    <CustomAccordion
      title={'Información del servicio'}
      detailsChildren={
        <ServiceInformationContent
          idProfessional={idProfessional}
          idProvider={idProvider}
          showDateProfessional={showDateProfessional}
          showStarDate={showStarDate}
          showEndServiceDate={showEndServiceDate}
          showExecutionDate
          executionStartDate={executionStartDate}
          actualStartDate={actualStartDate}
          technicalDateOnTheWay={technicalDateOnTheWay}
          endDate={endDate}
        />
      }
    />
  );
};
