import { SET_CURRENT_VIEW_LINK, SET_CURRENT_VIEW_NAME } from '../constants/appActionTypes';
import { AppActions, AppState } from '../constants/appTypes';

const initialState: AppState = {
  currentViewName: '',
  currentViewLink: '/',
};

export default (state = initialState, action: AppActions) => {
  switch (action.type) {
    case SET_CURRENT_VIEW_NAME:
      return {
        ...state,
        currentViewName: action.payload.currentViewName,
      };
    case SET_CURRENT_VIEW_LINK:
      return {
        ...state,
        currentViewLink: action.payload.currentViewLink,
      };
    default:
      return {
        ...state,
      };
  }
};
