import {ProductList, Product, ProductProperty} from '../entities/ProductList';

export const emptyProduct: Product = {
  id: NaN,
  name: '',
  imageUrl: '',
  displayPrice: '',
  description: '',
  properties: [],
  wasPrice: '',
  discount: '',
};

export class Convertor {
  static toProductList(data: [], images: []): ProductList {
    let products: Product[] = data.map(
      (product, index): Product =>
        Convertor.toProduct(product, images[index]['url']),
    );

    return {
      productList:
        products.length % 2 === 0 ? products : products.concat(emptyProduct),
    };
  }

  static toProduct(product: any, image: any | string): Product {
    return {
      id: product['id'],
      name: product['attributes']['name'],
      imageUrl: typeof image === 'string' ? image : image[0]['url'],
      displayPrice: product['attributes']['display_price'],
      wasPrice: '',
      discount: '',
      description: product['attributes']['description'],
      properties: Convertor.toProductProperty(
        product['relationships']['product_properties']['data'],
      ),
    };
  }

  static toProductProperty(variants: any[]): ProductProperty[] {
    return variants.map(
      (property): ProductProperty => ({
        id: property['id'],
        type: property['type'],
      }),
    );
  }
}
