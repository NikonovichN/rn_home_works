export class EndPoints {
  static baseUrl: string = 'https://demo.spreecommerce.org';
  static products: string = '/api/v2/storefront/products';
  static productDetails(productId: string): string {
    return `/api/v2/storefront/products/${productId}`;
  }

  static mockBaseUrl: string =
    'https://stoplight.io/mocks/spark-solutions/api-v2/3124958';
  static token: string = '/spree_oauth/token';

  static mockBaseUserUrl: string =
    'https://stoplight.io/mocks/spark-solutions/api-v2/8739189';
  static user(userId: string): string {
    return `/api/v2/platform/users/${userId}`;
  }

  static mockBaseAddCartUrl: string =
    'https://stoplight.io/mocks/spark-solutions/api-v2/3124960';
  static addToCart: string = '/api/v2/storefront/cart/add_item';

  static mockAccount: string =
    'https://stoplight.io/mocks/spark-solutions/api-v2/3124960/api/v2/storefront/account';

  static baseImagesUrl: string = 'https://api.thecatapi.com';
  static imagesUrl: string = '/v1/images/search';
}
