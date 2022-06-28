import {axiosAPI} from './api';
import {EndPoints} from '../endpoints';

export async function fetchProductList(): Promise<object> {
  let serverData = await axiosAPI.get(
    `${EndPoints.baseUrl}${EndPoints.products}`,
  );

  return serverData.data;
}
