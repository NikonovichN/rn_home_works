import axios from 'axios';
import {EndPoints} from '../endpoints/EndPoints';

import {Authentication} from '../entities/User';

export async function fetchUser(auth: Authentication) {
  let userData = await axios.get(
    `${EndPoints.mockBaseUserUrl}${EndPoints.user('10')}`,
    {
      headers: {
        Authorization: `${auth.token_type} ${auth.access_token}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return userData;
}
