import { GenericError } from '../types';

export type InputLogin = {
  apiKey?: string;
  secretKey?: string;
};

export class SuccessLogin {
  token: string;
  constructor({ token }: SuccessLogin) {
    this.token = token;
  }
}
export type OutputLogin = SuccessLogin | undefined | GenericError;
export interface IAuthService {
  login: (input: InputLogin) => Promise<OutputLogin>;
}
