import { FC } from 'react';
import { Redirect } from 'react-router-dom';

import { LinearProgressFixed } from '../../../components/Atoms/LinearProgress';
import { Layout } from '../../../components/Layout';
import { FailedPaymentTemplate } from '../../../components/templates/FailedPayment';
import { useQueryTokenWs } from '../../../hooks/useQueryTokenWs';

export const FailedPaymentView: FC = () => {
  const { loading, error, data } = useQueryTokenWs();
  return loading ? (
    <LinearProgressFixed />
  ) : error || !data ? (
    <Redirect to={'/error'} />
  ) : (
    <Layout>
      <FailedPaymentTemplate nroRequest={data.requestNro} />
    </Layout>
  );
};
