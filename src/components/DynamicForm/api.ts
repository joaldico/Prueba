import axios from 'axios';

export const getFieldsByForm = (businessUnitUUID: any, formId: any) => {
  const headers = { headers: { businessUnitUUID, formId } };
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/service/forms/fields`,
      headers
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const getForms = (businessUnitUUID: any, formId: any) => {
  const headers = { headers: { businessUnitUUID, formId } };
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/front-customer/service/forms`,
      headers
    )
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
