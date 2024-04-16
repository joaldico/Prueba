import { AuthModel } from '../../models/AuthModel';

export const setSessionInfo = (payloadAuth: any, businessUnitUUID: any) => {
  localStorage.setItem(
    `sessionInfoPortalCustomer-${businessUnitUUID}`,
    JSON.stringify(payloadAuth)
  );
};

export const getSessionInfo = (businessUnitUUID: any): AuthModel => {
  const item = localStorage.getItem(`sessionInfoPortalCustomer-${businessUnitUUID}`);
  if (item) {
    const currenItem: AuthModel = JSON.parse(item);
    return currenItem;
  } else {
    return new AuthModel('', '', '');
  }
};
