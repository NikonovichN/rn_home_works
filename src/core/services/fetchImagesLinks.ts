import axios from 'axios';

import {EndPoints, Tokens} from '../endpoints/EndPoints';

export async function fetchImagesLink(limit: string): Promise<object> {
  let images = await axios.get(
    `${EndPoints.baseImagesUrl}${EndPoints.imagesUrl}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': Tokens.imageHostToken,
      },
      params: {
        format: 'json',
        limit: limit,
      },
    },
  );

  return images;
}
