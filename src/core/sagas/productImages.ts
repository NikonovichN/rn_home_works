import {isArray} from 'lodash';
import {call} from 'redux-saga/effects';
import {ProductListConverter} from '../converters';

import {Product, ProductList} from '../entities/ProductList';
import {fetchImagesLink} from '../services';

interface Data {
  data: any;
}

export default function* getProductImagesSaga(
  serverData: Data,
): Generator<any, ProductList | Product, any> {
  const isListOfProducts = isArray(serverData.data);
  const images: Data = yield call(
    fetchImagesLink,
    isListOfProducts ? serverData.data.length.toString() : '1',
  );

  return isListOfProducts
    ? ProductListConverter.toProductList(serverData.data, images.data)
    : ProductListConverter.toProduct(serverData.data, images.data);
}
