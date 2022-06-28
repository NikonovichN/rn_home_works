import axios from 'axios';

import {EndPoints} from '../endpoints/EndPoints';

export async function fetchProductDetails(productId: string): Promise<object> {
  let serverData = await axios.get(
    `${EndPoints.baseUrl}${EndPoints.productDetails(productId)}`,
  );

  return serverData['data'];
}
