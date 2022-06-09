import * as actions from './phoneListTypes';

export function getPhones(): actions.GetPhonesAction {
  return {
    type: actions.GET_PHONES,
  };
}

export function getPhonesRequest(): actions.GetPhonesRequestAction {
  return {
    type: actions.GET_PHONES_REQUEST,
  };
}
