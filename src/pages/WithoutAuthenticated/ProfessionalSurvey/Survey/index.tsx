import { Question } from '../Question';

export type Survey = {
  status: number;
  state: number;
  body: string;
  header: string;
  menssage: string;
  idTemplate: string;
  nameProfesional: string;
  nameServicio: string;
  fechaServicio: string;
  businessUnitId: string;
  tenant: string;
  logoBo: string;
  baseColor: string;
  Preguntas: Question[];
};
