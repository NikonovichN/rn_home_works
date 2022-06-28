export interface ProductList {
  productList: Product[];
}

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  displayPrice: string;
  wasPrice?: string;
  discount?: string;
  description: string;
  properties: ProductProperty[];
}

export interface ProductProperty {
  id: number;
  type: String;
}
