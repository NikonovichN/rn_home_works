import {UserData, Authentication} from '../entities/User';
import {UserCredentials} from '../entities/UserCredentials';
import {AnyActionTypes} from './AnyActionTypes';
import * as actions from './userTypes';

export function userLogIn(
  credentials: UserCredentials,
  proceedActions?: AnyActionTypes,
): actions.UserLogin {
  return {type: actions.USER_LOGIN, credentials, proceedActions};
}

export function getToken(): actions.GetToken {
  return {type: actions.GET_TOKEN};
}

export function userLogInRequest(): actions.UserLoginRequest {
  return {type: actions.USER_LOGIN_REQUEST};
}

export function userLogInSuccess(
  user: UserData,
  auth: Authentication,
): actions.UserLoginSuccess {
  return {type: actions.USER_LOGIN_SUCCESS, user, auth};
}

export function userLogInFailure(
  error: Error | string,
): actions.UserLoginFailure {
  return {type: actions.USER_LOGIN_FAILURE, error};
}
