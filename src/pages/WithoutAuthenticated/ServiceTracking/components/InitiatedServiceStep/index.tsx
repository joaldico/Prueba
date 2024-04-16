import { FC } from 'react';

import { ServiceData } from '../../../../../models/ServiceDataModel';
import { ServiceInformation } from '../OnTheWayServiceStep/ServiceInformation/ServiceInformation';
import { useStyles } from './styles';

type Props = {
  serviceData: ServiceData | undefined;
};

export const InitiatedServiceStep: FC<Props> = ({ serviceData }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ServiceInformation serviceData={serviceData} showStarDate />
    </div>
  );
};
