import {ProductList, Product, ProductProperty} from '../entities/ProductList';

const emptyProduct: Product = {
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
      (product, index): Product => ({
        id: product['id'],
        name: product['attributes']['name'],
        imageUrl: images[index]['url'],
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

  static toProductProperty(variants: any[]): ProductProperty[] {
    return variants.map(
      (property): ProductProperty => ({
        id: property['id'],
        type: property['type'],
      }),
    );
  }
}
