import config from 'react-native-ultimate-config';

import {axiosAPI} from './api';
import {EndPoints} from '../endpoints';

export async function fetchImagesLink(limit: string): Promise<object> {
  let images = await axiosAPI.get(
    `${EndPoints.baseImagesUrl}${EndPoints.imagesUrl}`,
    {
      headers: {
        'x-api-key': config.IMAGE_HOST_TOKEN,
      },
      params: {
        format: 'json',
        limit: limit,
      },
    },
  );

  return images;
}
