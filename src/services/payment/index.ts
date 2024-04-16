import axios from 'axios';

import API from '../../api/api';
import { getAuthData } from '../../util';
import { GenericError } from '../types';
import {
  InputCreateTx,
  InputGetPayerData,
  InputSearchTransactionByHash,
  InputSearchTransactionByToken,
  InputWebPayValidateAndGet,
  IPaymentService,
  OutputCreateTx,
  OutputGetPayerData,
  OutputSearchTransactionByToken,
  OutputWebPayValidateAndGet,
  SuccessSearchTransactionByHash,
  SuccessSearchTransactionByToken,
} from './abstraction';

class PaymentService implements IPaymentService {
  webPayValidateAndGet = async ({
    hash,
  }: InputWebPayValidateAndGet): Promise<OutputWebPayValidateAndGet> => {
    const { token } = getAuthData();
    const { data } = await API.post('/webpay/validate-and-get', null, {
      headers: {
        hash,
        token,
      },
    });
    if (data.error) {
      return new GenericError(data);
    }
    if (data.data) data.data = JSON.parse(data.data);
    return data;
  };

  getUrlTransBank = async ({ hash }: InputCreateTx): Promise<OutputCreateTx> => {
    const { token } = getAuthData();
    const { data } = await API.post(
      `/webpay/create-tx`,
      {},
      {
        headers: {
          token,
          hash,
          x_tuten_domain: window.location.protocol + '//' + window.location.host,
        },
      }
    );

    if (data.error) {
      return new GenericError(data);
    }
    if (data.error) return new GenericError(data);
    return data;
  };

  searchTransactionByToken = async ({
    tokenWs,
  }: InputSearchTransactionByToken): Promise<OutputSearchTransactionByToken> => {
    const { token } = getAuthData();
    const { data } = await API.get(`/webpay/get-tx-by-token?token_ws=${tokenWs}`, {
      headers: {
        token: token,
      },
    });
    if (!data) return;
    if (data.tutenData) {
      data.data = JSON.parse(data.tutenData);
      data.request = JSON.parse(data.paymentProcessorTxRequest);
      return new SuccessSearchTransactionByToken(data);
    } else return new GenericError(data);
  };

  searchTransactionByHash = async ({
    hash,
  }: InputSearchTransactionByHash): Promise<
    SuccessSearchTransactionByHash | GenericError | undefined
  > => {
    const { token } = getAuthData();
    const { data } = await API.get(`/webpay/get-tx-by-hash?hash=${hash}`, {
      headers: {
        token,
      },
    });
    if (!data) return;
    if (data.tutenData) {
      data.tutenData = JSON.parse(data.tutenData);
      data.paymentProcessorTxRequest = JSON.parse(data.paymentProcessorTxRequest);
      data.tutenOrderPayload = JSON.parse(data.tutenOrderPayload);
      return new SuccessSearchTransactionByHash(data);
    } else return new GenericError(data);
  };

  getPayerData = async ({
    bu,
    tenant,
    clientId,
  }: InputGetPayerData): Promise<OutputGetPayerData> => {
    const { data } = await API.get(
      `${process.env.REACT_APP_MSS_TUTEN_PRIVATE}CustomerREST/customer/private/${clientId}`,
      {
        headers: {
          businessUnitUUID: bu,
          tenantUUID: tenant,
        },
      }
    );

    if (data.error) {
      return new GenericError(data);
    }
    if (data.data) data.data = JSON.parse(data.data);
    return data;
  };
}

export const paymentService = Object.freeze(new PaymentService());
