import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL,
  headers: { 'Content-type': 'application/json' },
});

export const getChucknorrisRandom = (
) => {
  return axios
    .get(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}`,
      {}
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
