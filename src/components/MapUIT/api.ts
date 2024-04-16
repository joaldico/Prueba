import axios from 'axios';

const api = axios.create();

export const getDistanceBetweenSources = (
  uri: any,
  headers: any,
  origin: any,
  destination: any
) => {
  return api
    .get(
      `${uri}/distance-matrix?destination=${encodeURIComponent(
        destination
      )}&origin=${encodeURIComponent(origin)}`,
      headers
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
