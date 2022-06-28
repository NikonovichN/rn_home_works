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

export class ProductListConverter {
  static toProductList(data: [], images: any[]): ProductList {
    let products: Product[] = data.map(
      (product, index): Product =>
        ProductListConverter.toProduct(product, images[index].url),
    );

    return {
      productList: addEmptyProduct(products),
    };
  }

  static toProduct(product: any, image: any | string): Product {
    return {
      id: product.id,
      name: product.attributes.name,
      imageUrl: typeof image === 'string' ? image : image[0].url,
      displayPrice: product.attributes.display_price,
      wasPrice: '',
      discount: '',
      description: product.attributes.description,
      properties: ProductListConverter.toProductProperty(
        product.relationships.product_properties.data,
      ),
    };
  }

  static toProductProperty(variants: any[]): ProductProperty[] {
    return variants.map(
      (property): ProductProperty => ({
        id: property.id,
        type: property.type,
      }),
    );
  }
}

function addEmptyProduct(products: Product[]): Product[] {
  return products.length % 2 === 0 ? products : products.concat(emptyProduct);
}
