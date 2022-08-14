import {axiosAPI} from './api';
import {EndPoints} from '../endpoints';

export async function fetchProductDetails(productId: string): Promise<object> {
  const serverData = await axiosAPI.get(
    `${EndPoints.baseUrl}${EndPoints.productDetails(productId)}`,
  );

  return serverData.data;
}
