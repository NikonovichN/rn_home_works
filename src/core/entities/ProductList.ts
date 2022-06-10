export interface ProductList {
  productList: Product[];
}

export interface Product {
  id: number;
  name: String;
  displayPrice: String;
  wasPrice?: String;
  discount?: String;
  description: String;
  properties: ProductProperty[];
}

export interface ProductProperty {
  id: number;
  type: String;
}
