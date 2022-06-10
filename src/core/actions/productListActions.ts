import * as actions from './productListTypes';

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
