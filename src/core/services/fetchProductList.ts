import {axiosAPI} from './api';
import {EndPoints} from '../endpoints';

export async function fetchProductList(filterByName?: string): Promise<object> {
  const serverData = await axiosAPI.get(
    `${EndPoints.baseUrl}${EndPoints.products}`,
    filterByName ? {params: {name: filterByName}} : {},
  );

  return serverData.data;
}
