import {
  CLEAR_REQUEST,
  SET_CURRENT_CARD,
  SET_CURRENT_MATERIAL,
  SET_CURRENT_PLAN,
  SET_CURRENT_SERVICE,
  SET_CURRENT_SERVICE_NAME,
  SET_CURRENT_STEP,
  SET_DESCRIPTION_PAYLOAD,
} from './../constants/requestActionsTypes';
import { RequestActions, RequestState } from './../constants/requestTypes';

const initialState: RequestState = {
  step: 0,
  serviceId: 0,
  serviceName: '',
  selectedCard: '',
  materialSelected: {},
  planSelected: {},
  descriptionData: {},
};

export default (state = initialState, action: RequestActions) => {
  switch (action.type) {
    case SET_CURRENT_STEP:
      return {
        ...state,
        step: action.payload.step,
      };
    case SET_CURRENT_SERVICE:
      return {
        ...state,
        serviceId: action.payload.serviceId,
      };
    case SET_CURRENT_SERVICE_NAME:
      return {
        ...state,
        serviceName: action.serviceName,
      };
    case SET_CURRENT_CARD:
      return {
        ...state,
        selectedCard: action.payload.selectedCard,
      };
    case SET_CURRENT_MATERIAL:
      return {
        ...state,
        materialSelected: action.payload.materialSelected,
      };
    case SET_CURRENT_PLAN:
      return {
        ...state,
        planSelected: action.payload.planSelected,
      };
    case SET_DESCRIPTION_PAYLOAD:
      return {
        ...state,
        descriptionData: action.descriptionData,
      };
    case CLEAR_REQUEST:
      return {
        ...state,
        step: 0,
        serviceId: 0,
        selectedCard: '',
        materialSelected: {},
        planSelected: {},
      };
    default:
      return state;
  }
};
