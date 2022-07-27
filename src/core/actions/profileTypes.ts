import {Profile, ProfileUpdate} from '../entities';

export const GET_PROFILE = 'profile/GET_PROFILE';
export interface GetProfile {
  type: typeof GET_PROFILE;
}

export const GET_PROFILE_REQUEST = 'profile/GET_PROFILE_REQUEST';
export interface GetProfileRequest {
  type: typeof GET_PROFILE_REQUEST;
}

export const GET_PROFILE_SUCCESS = 'profile/SUCCESS_GET_PROFILE';
export interface GetProfileSuccess {
  type: typeof GET_PROFILE_SUCCESS;
  profile: Profile;
}

export const UPDATE_PROFILE = 'profile/UPDATE_PROFILE';
export interface UpdateProfile {
  type: typeof UPDATE_PROFILE;
  body: ProfileUpdate;
}

export const UPDATE_PROFILE_REQUEST = 'profile/UPDATE_PROFILE_REQUEST';
export interface UpdateProfileRequest {
  type: typeof UPDATE_PROFILE_REQUEST;
}

export const UPDATE_PROFILE_SUCCESS = 'profile/UPDATE_PROFILE_SUCCESS';
export interface UpdateProfileSuccess {
  type: typeof UPDATE_PROFILE_SUCCESS;
  profile: Profile;
}

export const ERROR_PROFILE = 'profile/ERROR_PROFILE';
export interface ErrorProfile {
  type: typeof ERROR_PROFILE;
  error: string | Error | null;
}

export type ProfileTypes =
  | GetProfile
  | GetProfileRequest
  | GetProfileSuccess
  | UpdateProfile
  | UpdateProfileRequest
  | UpdateProfileSuccess
  | ErrorProfile;
