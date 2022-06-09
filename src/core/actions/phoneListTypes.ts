export const GET_PHONES = 'phone_list/GET_PHONES';
export interface GetPhonesAction {
  type: typeof GET_PHONES;
}

export const GET_PHONES_REQUEST = 'phone_list/GET_PHONES_REQUEST';
export interface GetPhonesRequestAction {
  type: typeof GET_PHONES_REQUEST;
}

export type ListPhones = GetPhonesAction | GetPhonesRequestAction;
