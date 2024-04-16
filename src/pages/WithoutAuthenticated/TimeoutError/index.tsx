import { FC } from 'react';

import timeOut from '../../../assets/images/timeOut.svg';
import { Layout } from '../../../components/Layout';
import { GenericErrorTemplate } from '../../../components/templates/GenericError';

export const TimeoutErrorView: FC = () => {
  return (
    <Layout>
      <GenericErrorTemplate
        img={timeOut}
        mainMessage={'¿Sigues ahí? El tiempo de sesión expiró :('}
        secondaryMessage={'Por favor, contacta a tu agente telefónico para proseguir con tu pago.'}
      />
    </Layout>
  );
};
