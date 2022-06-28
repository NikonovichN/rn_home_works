import axios from 'axios';

import {EndPoints} from '../endpoints/EndPoints';

export async function fetchProductList(): Promise<object> {
  let serverData = await axios.get(`${EndPoints.baseUrl}${EndPoints.products}`);

  return serverData['data'];
}
