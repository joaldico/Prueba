import axios from 'axios';

import { getTokenAuthentication, handleError } from '../util/commons';

export default axios.create({
  baseURL: process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL,
  headers: { 'Content-type': 'application/json' },
});

export const getChucknorrisRandom = (
) => {
  return axios
    .get(
      `https://api.chucknorris.io/jokes/random`,
      {}
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};


//LOGIN
export const login = (
  captcha: string | undefined,
  businessUnitUUID: string | undefined,
  email: string,
  password: string
) => {
  const headers = { headers: { businessUnitUUID, captcha, email, password } };
  return axios
    .post(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/login`,
      {},
      headers
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const refreshSession = (refreshToken: string | undefined) => {
  const headers = { headers: { refreshToken } };
  return axios
    .post(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/refreshToken`,
      {},
      headers
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const verifyWhenCreateActivateToken = (
  token: string | string[] | undefined | null,
  businessUnitUUID: string | undefined
) => {
  const headers = { headers: { businessUnitUUID, token } };
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/verify-when-create-account-token`,
      headers
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const createAccount = (
  token: string | string[] | null,
  businessUnitUUID: string | undefined,
  password: string
) => {
  const headers = { headers: { businessUnitUUID, token, password } };
  return axios
    .post(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/create-customer-user`,
      {},
      headers
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const changePasswordWithToken = (
  token: string | string[] | null,
  businessUnitUUID: string | undefined,
  password: string
) => {
  const headers = { headers: { businessUnitUUID, token, password } };
  return axios
    .post(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/change-password-with-token`,
      {},
      headers
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const resetPasswordWithToken = (
  captcha: string | undefined,
  businessUnitUUID: string | undefined,
  email: string
) => {
  const headers = { headers: { businessUnitUUID, captcha, email } };
  return axios
    .post(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/request-change-password`,
      {},
      headers
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const validateClient = (
  tenantUUID: string | undefined,
  businessUnitUUID: string | undefined,
  identificationType: string | undefined,
  identificationNumber: string | undefined,
  url: string | undefined
) => {
  const headers = {
    headers: { tenantUUID, businessUnitUUID, identificationType, identificationNumber },
  };
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/validate?url=${url}`,
      headers
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const getIdentificationTypes = (businessUnitUUID: string | undefined) => {
  const headers = { headers: { businessUnitUUID } };
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/identification-types`,
      headers
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

// SERVICE TRACKING
export const getServiceData = async (
  id: string | undefined,
  businessUnitUUID: string | undefined
) => {
  const headers = { headers: { id, businessUnitUUID } };
  return axios
    .post(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/service-data`,
      {},
      headers
    )
    .then((res) => {
      return {
        code: res.status,
        data: res.data,
      };
    })
    .catch((err) => {
      return {
        code: err.response.status,
        data: err.response.data,
      };
    });
};

export const getProfesionalProviderInfo = async (
  idProfessional: number | null | undefined,
  idProvider: number | null | undefined
) => {
  const headers = { headers: { idProfessional, idProvider } };
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/professional-provider-info`,
      headers
    )
    .then((res) => {
      return {
        code: res.status,
        data: res.data,
      };
    })
    .catch((err) => {
      return {
        code: err.response.status,
        data: err.response.data,
      };
    });
};

export const getProfesionalTracking = async (idProfessional: number | null | undefined) => {
  const headers = { headers: { idProfessional } };
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/professional-tracking-info`,
      headers
    )
    .then((res) => {
      return {
        code: res.status,
        data: res.data,
      };
    })
    .catch((err) => {
      return {
        code: err.response.status,
        data: err.response.data,
      };
    });
};

// LAYOUT
export const getFrequentQuestions = (url: string) => {
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/question?url=${url}`
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const getTermsConditions = (url: string) => {
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/termsConditions?url=${url}`
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const getLegalNotices = (url: string) => {
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/legalNotices?url=${url}`
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const getTermsDataPrivacy = (url: string) => {
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/termsDataPrivacy?url=${url}`
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const sendContactInformation = (url: string, body: object) => {
  return axios
    .post(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/send-contact-information?url=${url}`,
      body
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const getPortalBasicInformation = async (businessUnitUUID: string | undefined) => {
  const headers = { headers: { businessUnitUUID } };
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/self-management-portal-config/basic-information`,
      headers
    )
    .then((res) => {
      return {
        code: res.status,
        data: res.data,
      };
    })
    .catch((err) => {
      return {
        code: err.response.status,
        data: err.response.data,
      };
    });
};

export const getPortalInformation = async (
  businessUnitUUID: string | undefined,
  token: string | undefined
) => {
  const headers = { headers: { businessUnitUUID, token } };
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/self-management-portal-config`,
      headers
    )
    .then((res) => {
      return {
        code: res.status,
        data: res.data,
      };
    })
    .catch((err) => {
      return {
        code: err.response.status,
        data: err.response.data,
      };
    });
};

export const getExistsFooterLinks = (businessUnitUUID: string | undefined) => {
  const token = getTokenAuthentication(businessUnitUUID);
  const headers = { headers: { businessUnitUUID, token: token } };
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/exist-link-information`,
      headers
    )
    .then((res) => res.data)
    .catch((err) => {
      handleError(err.response.data.message);
      throw err;
    });
};

export const getMaterialByService = (businessUnitUUID: string | undefined, idService: string) => {
  const token = getTokenAuthentication(businessUnitUUID);
  const headers = { headers: { businessUnitUUID, token: token } };
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/material/by-service?serviceId=${idService}`,
      headers
    )
    .then((res) => res.data)
    .catch((err) => {
      handleError(err.response.data.message);
      throw err;
    });
};

export const getCoverageByService = (
  serviceId: string,
  materialTypeId: string,
  materialId: string,
  planSubscriptionIds: string,
  businessUnitUUID: any
) => {
  const token = getTokenAuthentication(businessUnitUUID);
  const headers = { headers: { token } };
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/plan-subscription/coverage-by-service?serviceId=${serviceId}&materialTypeId=${materialTypeId}&materialId=${materialId}&planSubscriptionIds=${planSubscriptionIds}`,
      headers
    )
    .then((res) => res.data)
    .catch((err) => {
      handleError(err.response.data.message);
      throw err;
    });
};

export const getCostConcept = (serviceId: string, businessUnitUUID: any) => {
  const token = getTokenAuthentication(businessUnitUUID);
  const headers = { headers: { token } };
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/service/cost-concepts?serviceId=${serviceId}`,
      headers
    )
    .then((res) => res.data)
    .catch((err) => {
      handleError(err.response.data.message);
      throw err;
    });
};

export const getCustomerInfo = (businessUnitUUID: any) => {
  const token = getTokenAuthentication(businessUnitUUID);
  const headers = { headers: { token, businessUnitUuid: businessUnitUUID } };
  return axios
    .get(`${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/customer/by-id`, headers)
    .then((res) => res.data)
    .catch((err) => {
      handleError(err.response.data.message);
      throw err;
    });
};

//Complecion
export const getRegions = async (businessUnitUUID: string | undefined) => {
  const token = getTokenAuthentication(businessUnitUUID);
  const headers = { headers: { businessUnitUUID, token } };
  return axios
    .get(`${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/city/all`, headers)
    .then((res) => res.data)
    .catch((err) => {
      handleError(err.response.data.message);
      throw err;
    });
};

export const getCommunes = async (businessUnitUUID: string | undefined, cityId: any) => {
  const token = getTokenAuthentication(businessUnitUUID);
  const headers = { headers: { businessUnitUUID, token } };
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/commune/by-city?cityId=${cityId}`,
      headers
    )
    .then((res) => res.data)
    .catch((err) => {
      handleError(err.response.data.message);
      throw err;
    });
};

export const getServiceById = async (businessUnitUUID: string | undefined, serviceId: any) => {
  const token = getTokenAuthentication(businessUnitUUID);
  const headers = { headers: { token } };
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/service/by-id?serviceId=${serviceId}`,
      headers
    )
    .then((res) => res.data)
    .catch((err) => {
      handleError(err.response.data.message);
      throw err;
    });
};
