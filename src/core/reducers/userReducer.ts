import * as actionTypes from '../actions/userTypes';
import {UserData, Authentication} from '../entities/User';

export interface UserState {
  isLogged: boolean;
  loading: boolean;
  error: Error | string | null;
  user: {auth: Authentication; data: UserData} | null;
}

const initialState: UserState = {
  isLogged: false,
  loading: false,
  error: null,
  user: null,
};

export default function userReducer(
  state: UserState = initialState,
  actions: actionTypes.UserLoginTypes,
): UserState {
  switch (actions.type) {
    case actionTypes.USER_LOGIN:
      return {...state, loading: true};
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        user: {
          auth: actions.auth,
          data: actions.user,
        },
      };
    case actionTypes.USER_LOGIN_FAILURE:
      return {
        isLogged: false,
        loading: false,
        user: null,
        error: actions.error,
      };
    default:
      return state;
  }
}
