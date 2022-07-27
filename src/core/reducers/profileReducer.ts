import {profileTypes} from '@actions';
import {Profile} from '../entities';

export interface ProfileState {
  loading: boolean;
  error: string | Error | null;
  data: Profile | null;
}

const initialState: ProfileState = {
  loading: false,
  error: null,
  data: null,
};

export default function profileReducer(
  state: ProfileState = initialState,
  actions: profileTypes.ProfileTypes,
): ProfileState {
  switch (actions.type) {
    case profileTypes.GET_PROFILE_REQUEST:
    case profileTypes.UPDATE_PROFILE_REQUEST: {
      return {...state, loading: true};
    }
    case profileTypes.GET_PROFILE_SUCCESS:
    case profileTypes.UPDATE_PROFILE_SUCCESS: {
      return {loading: false, error: null, data: actions.profile};
    }
    case profileTypes.ERROR_PROFILE: {
      return {...state, loading: false, error: actions.error};
    }
    default:
      return state;
  }
}
