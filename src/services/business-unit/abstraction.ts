import { GenericError } from '../types';

export type InputBusinessUnit = {
  businessUnitUUID: string;
  token: string;
};

export class SuccessBusinessUnit {
  logoBO: string;
  baseColor: string;
  constructor({ logoBO, baseColor }: SuccessBusinessUnit) {
    this.logoBO = logoBO;
    this.baseColor = baseColor;
  }
}
export type OutputBusinessUnit = SuccessBusinessUnit | undefined | GenericError;
export interface IBusinessUnit {
  getBusinessUnitInfo: (input: InputBusinessUnit) => Promise<OutputBusinessUnit>;
}
