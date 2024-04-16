import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { paymentService } from '../services';
import { SuccessSearchTransactionByToken } from '../services/payment/abstraction';
import { GenericError } from '../services/types';
import { convertDate } from '../util';

type State = {
  loading: boolean;
  data?: {
    customerName: string;
    requestNro: string;
    unitName: string;
    dataPayment: { key: string; value: string | number }[];
  };
  error: boolean;
};
export const useQueryTokenWs = (): State => {
  const { search, state } = useLocation<{ searchWs: SuccessSearchTransactionByToken }>();
  const [{ loading, error, data }, setState] = useState<State>({
    loading: true,
    error: false,
  });

  useEffect(() => {
    void (async () => {
      try {
        let responseSuccess: SuccessSearchTransactionByToken;
        if (state && state.searchWs) {
          responseSuccess = state.searchWs;
        } else {
          if (!search || !search.includes('token_ws')) throw new Error();
          const tokenWs = new URLSearchParams(search).get('token_ws');
          if (!tokenWs || !tokenWs.trim()) throw new Error();
          const res = await paymentService.searchTransactionByToken({
            tokenWs,
          });
          if (!res || res instanceof GenericError) throw new Error(res?.message);
          responseSuccess = res;
          responseSuccess.tutenData = JSON.parse(responseSuccess.tutenData);
          responseSuccess.tutenOrderPayload = JSON.parse(responseSuccess.tutenOrderPayload);
        }

        setState((prevState) => ({
          ...prevState,
          data: {
            requestNro: responseSuccess.tutenCaseId.toString(),
            customerName: responseSuccess.tutenData.personFullName,
            unitName: responseSuccess.tutenData.unitName,
            dataPayment: [
              {
                key: 'No. de comprobante',
                value: responseSuccess.tutenOrderId.toString(),
              },
              responseSuccess.tutenData.personDocumentType
                ? {
                    key: responseSuccess.tutenData.personDocumentType,
                    value: responseSuccess.tutenData.personDocumentNumber,
                  }
                : [],
              {
                key: 'Fecha de pago',
                value: convertDate(responseSuccess.txDate || new Date()),
              },
              {
                key: 'Hora de pago',
                value: convertDate(responseSuccess.txDate || new Date(), 'hh:mm a'),
              },
              { key: 'Servicio', value: responseSuccess.tutenOrderPayload.productName },
            ].flat(),
          },
        }));
      } catch (err) {
        console.error(err);
        setState((prevState) => ({ ...prevState, error: true }));
      } finally {
        setState((prevState) => ({ ...prevState, loading: false }));
      }
    })();
  }, []);
  return { loading, error, data };
};
