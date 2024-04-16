import {
  CLEAR_REQUEST,
  SET_CURRENT_CARD,
  SET_CURRENT_MATERIAL,
  SET_CURRENT_PLAN,
  SET_CURRENT_SERVICE,
  SET_CURRENT_SERVICE_NAME,
  SET_CURRENT_STEP,
  SET_DESCRIPTION_PAYLOAD,
} from '../constants/requestActionsTypes';
import {
  RequestCardPayload,
  RequestCardTypeAction,
  RequestClearTypeAction,
  RequestDescriptionPayload,
  RequestDescriptionTypeAction,
  RequestMaterialPayload,
  RequestMaterialTypeAction,
  RequestPlanPayload,
  RequestPlanTypeAction,
  RequestServiceNameTypeAction,
  RequestServicePayload,
  RequestServiceTypeAction,
  RequestStepPayload,
  RequestStepTypeAction,
} from '../constants/requestTypes';

export const setStep = (payload: RequestStepPayload): RequestStepTypeAction => ({
  type: SET_CURRENT_STEP,
  payload,
});

export const setServiceId = (payload: RequestServicePayload): RequestServiceTypeAction => ({
  type: SET_CURRENT_SERVICE,
  payload,
});

export const setServiceName = (serviceName: string): RequestServiceNameTypeAction => ({
  type: SET_CURRENT_SERVICE_NAME,
  serviceName,
});

export const setSelectedCard = (payload: RequestCardPayload): RequestCardTypeAction => ({
  type: SET_CURRENT_CARD,
  payload,
});

export const setMaterialSelected = (
  payload: RequestMaterialPayload
): RequestMaterialTypeAction => ({
  type: SET_CURRENT_MATERIAL,
  payload,
});

export const setPlanSelected = (payload: RequestPlanPayload): RequestPlanTypeAction => ({
  type: SET_CURRENT_PLAN,
  payload,
});

export const setDescriptionPayload = (
  payload: RequestDescriptionPayload
): RequestDescriptionTypeAction => ({
  type: SET_DESCRIPTION_PAYLOAD,
  descriptionData: payload,
});

export const clearRequest = (): RequestClearTypeAction => ({
  type: CLEAR_REQUEST,
});
