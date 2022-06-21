import axios from 'axios';

import {EndPoints} from '../endpoints/EndPoints';
import {UserCredentials} from '../entities/UserCredentials';

export async function createOrRefreshToken(
  credentials: UserCredentials,
): Promise<object> {
  let tokenData = await axios.post(
    `${EndPoints.mockBaseUrl}${EndPoints.token}`,
    {
      grant_type: 'password',
      username: credentials.userName,
      password: credentials.password,
    },
    {headers: {'Content-Type': 'application/json'}},
  );

  return tokenData;
}
