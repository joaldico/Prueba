import { FC, useContext } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

import { LinearProgressFixed } from '../../../components/Atoms/LinearProgress';
import { Layout } from '../../../components/Layout';
import { SuccessPaymentTemplate } from '../../../components/templates/SuccesPayment';
import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { useQueryTokenWs } from '../../../hooks/useQueryTokenWs';
import { SuccessSearchTransactionByToken } from '../../../services/payment/abstraction';
type Props = {
  tokenWs?: string;
};
export const SuccessPaymentView: FC<Props> = () => {
  const { state } = useLocation<{ searchWs: SuccessSearchTransactionByToken }>();
  const { loading, error, data } = useQueryTokenWs();
  const { setTitleState } = useContext(BusinessUnitParamsContext);
  setTitleState(data?.unitName);
  return loading ? (
    <LinearProgressFixed />
  ) : error || !data ? (
    <Redirect to={'/error'} />
  ) : (
    <Layout>
      <SuccessPaymentTemplate
        mainMessage={state && state.searchWs ? 'Pago efectuado' : undefined}
        customerName={data.customerName}
        requestNro={data.requestNro}
        dataPayment={data.dataPayment}
      />
    </Layout>
  );
};
