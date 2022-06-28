import {axiosAPI} from './api';
import {EndPoints} from '../endpoints';

export async function addToCartService(variantId: string) {
  let cartData = await axiosAPI.post(
    `${EndPoints.mockBaseAddCartUrl}${EndPoints.addToCart}`,
    {variant_id: variantId},
    {
      headers: {
        'Content-Type': 'application/vnd.api+json',
        Prefer: 'code=200, example=Populated Cart',
        'X-Spree-Order-Token': 'x-token',
      },
    },
  );

  return cartData;
}
