import API from '../../api/api';
import { GenericError } from '../types';
import { IAuthService, InputLogin, OutputLogin, SuccessLogin } from './abstraction';

class AuthService implements IAuthService {
  login = async (payload: InputLogin): Promise<OutputLogin> => {
    const { data } = await API.post(
      `${process.env.REACT_APP_URL_ECOMMERCE_CUSTOMER_PORTAL}/auth/integration-login`,
      null,
      {
        headers: null,
      }
    );
    if (data.token)
      return new SuccessLogin({
        token: data.token,
      });
    else return new GenericError(data);
  };
}
export const authService = Object.freeze(new AuthService());
