import { GenericError } from '../types';

export type InputSurvey = {
  hash: string;
  token: string;
};

export type InputAnswerSurvey = {
  data: AnswerData[];
  id: string;
  token: string;
};

export type AnswerData = {
  answer: string;
  questionId: number;
};

export type QuestionData = {
  idAsk: number;
  ask: string;
  priority: number;
  type: string;
  version: number;
};

export class SuccessSurvey {
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
  Preguntas: QuestionData[];
  constructor({
    status,
    state,
    body,
    header,
    menssage,
    idTemplate,
    nameProfesional,
    nameServicio,
    fechaServicio,
    businessUnitId,
    tenant,
    logoBo,
    baseColor,
    Preguntas,
  }: SuccessSurvey) {
    this.status = status;
    this.state = state;
    this.header = header;
    this.body = body;
    this.menssage = menssage;
    this.idTemplate = idTemplate;
    this.nameProfesional = nameProfesional;
    this.nameServicio = nameServicio;
    this.fechaServicio = fechaServicio;
    this.businessUnitId = businessUnitId;
    this.tenant = tenant;
    this.logoBo = logoBo;
    this.baseColor = baseColor;
    this.Preguntas = Preguntas;
  }
}

export class SuccessAnswerSurvey {
  state: number;
  body: string;
  header: string;
  businessUnitId: string;
  constructor({ state, body, header, businessUnitId }: SuccessAnswerSurvey) {
    this.state = state;
    this.body = body;
    this.header = header;
    this.businessUnitId = businessUnitId;
  }
}
export type OutputSurvey = SuccessSurvey | undefined | GenericError;
export type OutputAnswerSurvey = SuccessAnswerSurvey | undefined | GenericError;

export interface ISurveyService {
  getSurvey: (input: InputSurvey) => Promise<OutputSurvey>;
  sendSurvey: (input: InputAnswerSurvey) => Promise<OutputAnswerSurvey>;
}
