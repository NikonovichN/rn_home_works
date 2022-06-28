import axios from 'axios';

import {EndPoints} from '../endpoints/EndPoints';
import {IMAGE_HOST_TOKEN} from '@env';

export async function fetchImagesLink(limit: string): Promise<object> {
  let images = await axios.get(
    `${EndPoints.baseImagesUrl}${EndPoints.imagesUrl}`,
    {
      headers: {
        'Content-Type': 'application/json',
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
