import { SET_CURRENT_VIEW_NAME, SET_CURRENT_VIEW_LINK } from './appActionTypes';

export type AppState = {
  currentViewName: string;
  currentViewLink: string;
};
export type AppTypeNamePayload = {
  currentViewName: string;
};
export type AppTypeLinkPayload = {
  currentViewLink: string;
};
export type AppNameTypeAction = {
  type: typeof SET_CURRENT_VIEW_NAME;
  payload: AppTypeNamePayload;
};
export type AppLinkTypeAction = {
  type: typeof SET_CURRENT_VIEW_LINK;
  payload: AppTypeLinkPayload;
};
export type AppActions = AppNameTypeAction | AppLinkTypeAction;
