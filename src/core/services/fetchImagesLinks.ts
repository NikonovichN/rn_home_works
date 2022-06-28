import {axiosAPI} from './api';
import {EndPoints} from '../endpoints';
import {IMAGE_HOST_TOKEN} from '@env';

export async function fetchImagesLink(limit: string): Promise<object> {
  let images = await axiosAPI.get(
    `${EndPoints.baseImagesUrl}${EndPoints.imagesUrl}`,
    {
      headers: {
        'x-api-key': IMAGE_HOST_TOKEN,
      },
      params: {
        format: 'json',
        limit: limit,
      },
    },
  );

  return images;
}
