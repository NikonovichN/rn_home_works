import {UserCredentials} from '../entities/UserCredentials';
import {UserData, Authentication} from './../../core/entities/User';
import {AnyActionTypes} from './AnyActionTypes';

const USER: string = 'user';

export const USER_LOGIN = `${USER}/USER_LOGIN`;
export interface UserLogin {
  type: typeof USER_LOGIN;
  credentials: UserCredentials;
  proceedActions?: AnyActionTypes;
}

export const GET_TOKEN = `${USER}/GET_TOKEN`;
export interface GetToken {
  type: typeof GET_TOKEN;
}

export const USER_LOGIN_REQUEST = `${USER}/USER_LOGIN_REQUEST`;
export interface UserLoginRequest {
  type: typeof USER_LOGIN_REQUEST;
}

export const USER_LOGIN_SUCCESS = `${USER}/USER_LOGIN_SUCCESS`;
export interface UserLoginSuccess {
  type: typeof USER_LOGIN_SUCCESS;
  user: UserData;
  auth: Authentication;
}

export const USER_LOGIN_FAILURE = `${USER}/USER_LOGIN_FAILURE`;
export interface UserLoginFailure {
  type: typeof USER_LOGIN_FAILURE;
  error: Error | string;
}

export type UserLoginTypes =
  | UserLogin
  | GetToken
  | UserLoginRequest
  | UserLoginSuccess
  | UserLoginFailure;
