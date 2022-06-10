import {ProductList, Product, ProductProperty} from '../entities/ProductList';

export class Convertor {
  static toProductList(serverData: any): ProductList {
    if (serverData.hasOwnProperty('data')) {
      let data: [] = serverData.data;

      return {
        productList: data.map(
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
        ),
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
