import API from '../../api/api';
import { GenericError } from '../types';
import {
  IBusinessUnit,
  InputBusinessUnit,
  OutputBusinessUnit,
  SuccessBusinessUnit,
} from './abstraction';

class BusinessUnitService implements IBusinessUnit {
  getBusinessUnitInfo = async (payload: InputBusinessUnit): Promise<OutputBusinessUnit> => {
    const { data } = await API.get(
      `${process.env.REACT_APP_MSS_TUTEN}LoginREST/rest/business-unit/${payload.businessUnitUUID}`,
      {
        headers: {
          token: payload.token,
        },
      }
    );
    if (!data) return;
    if (data)
      return new SuccessBusinessUnit({
        logoBO: data.logoBO,
        baseColor: data.baseColor,
      });
    else return new GenericError(data);
  };
}
export const businessUnitService = Object.freeze(new BusinessUnitService());
