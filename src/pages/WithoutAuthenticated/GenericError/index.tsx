import { FC } from 'react';

import { Layout } from '../../../components/Layout';
import { GenericErrorTemplate } from '../../../components/templates/GenericError';

export const GenericErrorView: FC = () => {
  return (
    <Layout>
      <GenericErrorTemplate />
    </Layout>
  );
};
