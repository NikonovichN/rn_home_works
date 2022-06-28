import {axiosAPI} from './api';
import {EndPoints} from '../endpoints';
import {UserCredentials} from '../entities';

export async function createOrRefreshToken(
  credentials: UserCredentials,
): Promise<object> {
  let tokenData = await axiosAPI.post(
    `${EndPoints.mockBaseUrl}${EndPoints.token}`,
    {
      grant_type: 'password',
      username: credentials.userName,
      password: credentials.password,
    },
  );

  return tokenData;
}
