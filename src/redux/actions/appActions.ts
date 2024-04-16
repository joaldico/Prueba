import { SET_CURRENT_VIEW_LINK, SET_CURRENT_VIEW_NAME } from '../constants/appActionTypes';
import {
  AppLinkTypeAction,
  AppNameTypeAction,
  AppTypeLinkPayload,
  AppTypeNamePayload,
} from '../constants/appTypes';

export const setCurrentViewName = (payload: AppTypeNamePayload): AppNameTypeAction => ({
  type: SET_CURRENT_VIEW_NAME,
  payload,
});

export const setCurrentViewLink = (payload: AppTypeLinkPayload): AppLinkTypeAction => ({
  type: SET_CURRENT_VIEW_LINK,
  payload,
});
