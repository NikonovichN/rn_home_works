import {ProductList, Product, ProductProperty} from '../entities/ProductList';

const emptyProduct: Product = {
  id: NaN,
  name: '',
  displayPrice: '',
  description: '',
  properties: [],
  wasPrice: '',
  discount: '',
};

export class Convertor {
  static toProductList(serverData: any): ProductList {
    if (serverData.hasOwnProperty('data')) {
      let data: [] = serverData.data;
      let products: Product[] = data.map(
        (product): Product => ({
          id: product['id'],
          name: product['attributes']['name'],
          displayPrice: product['attributes']['display_price'],
          wasPrice: '',
          discount: '',
          description: product['attributes']['description'],
          properties: Convertor.toProductProperty(
            product['relationships']['product_properties']['data'],
          ),
        }),
      );

      return {
        productList:
          products.length % 2 === 0 ? products : products.concat(emptyProduct),
      };
    }

    return {productList: []};
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
