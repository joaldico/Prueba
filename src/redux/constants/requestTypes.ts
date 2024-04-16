import {
  CLEAR_REQUEST,
  SET_CURRENT_CARD,
  SET_CURRENT_MATERIAL,
  SET_CURRENT_PLAN,
  SET_CURRENT_SERVICE,
  SET_CURRENT_SERVICE_NAME,
  SET_CURRENT_STEP,
  SET_DESCRIPTION_PAYLOAD,
} from './requestActionsTypes';

export type RequestState = {
  step: number;
  serviceId: number;
  selectedCard: string;
  materialSelected: any;
  planSelected: object;
  serviceName: string;
  descriptionData: any;
};

export type RequestStepPayload = {
  step: number;
};

export type RequestServicePayload = {
  serviceId: number;
};

export type RequestCardPayload = {
  selectedCard: string;
};

export type RequestMaterialPayload = {
  materialSelected: object;
};

export type RequestPlanPayload = {
  planSelected: object;
};

export type RequestDescriptionPayload = {
  descriptionData: object;
};

export type RequestStepTypeAction = {
  type: typeof SET_CURRENT_STEP;
  payload: RequestStepPayload;
};

export type RequestServiceTypeAction = {
  type: typeof SET_CURRENT_SERVICE;
  payload: RequestServicePayload;
};

export type RequestServiceNameTypeAction = {
  type: typeof SET_CURRENT_SERVICE_NAME;
  serviceName: string;
};

export type RequestCardTypeAction = {
  type: typeof SET_CURRENT_CARD;
  payload: RequestCardPayload;
};

export type RequestMaterialTypeAction = {
  type: typeof SET_CURRENT_MATERIAL;
  payload: RequestMaterialPayload;
};

export type RequestPlanTypeAction = {
  type: typeof SET_CURRENT_PLAN;
  payload: RequestPlanPayload;
};

export type RequestDescriptionTypeAction = {
  type: typeof SET_DESCRIPTION_PAYLOAD;
  descriptionData: RequestDescriptionPayload;
};

export type RequestClearTypeAction = {
  type: typeof CLEAR_REQUEST;
};

export type RequestActions =
  | RequestStepTypeAction
  | RequestClearTypeAction
  | RequestServiceTypeAction
  | RequestServiceNameTypeAction
  | RequestMaterialTypeAction
  | RequestPlanTypeAction
  | RequestDescriptionTypeAction
  | RequestCardTypeAction;
