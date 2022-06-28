import {axiosAPI} from './api';
import {EndPoints} from '../endpoints';
import {Authentication} from '../entities';

export async function fetchUser(auth: Authentication) {
  let userData = await axiosAPI.get(
    `${EndPoints.mockBaseUserUrl}${EndPoints.user('10')}`,
    {
      headers: {
        Authorization: `${auth.token_type} ${auth.access_token}`,
      },
    },
  );

  return userData.data;
}
