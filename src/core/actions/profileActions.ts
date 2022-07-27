import {Profile, ProfileUpdate} from '../entities';
import * as actions from './profileTypes';

export function getProfile(): actions.GetProfile {
  return {type: actions.GET_PROFILE};
}

export function getProfileRequest(): actions.GetProfileRequest {
  return {type: actions.GET_PROFILE_REQUEST};
}

export function getProfileSuccess(profile: Profile): actions.GetProfileSuccess {
  return {type: actions.GET_PROFILE_SUCCESS, profile};
}

export function updateProfile(body: ProfileUpdate): actions.UpdateProfile {
  return {type: actions.UPDATE_PROFILE, body};
}

export function updateProfileRequest(): actions.UpdateProfileRequest {
  return {type: actions.UPDATE_PROFILE_REQUEST};
}

export function UpdateProfileSuccess(
  profile: Profile,
): actions.UpdateProfileSuccess {
  return {type: actions.UPDATE_PROFILE_SUCCESS, profile};
}

export function errorProfile(
  message: string | Error | null,
): actions.ErrorProfile {
  return {type: actions.ERROR_PROFILE, error: message};
}
