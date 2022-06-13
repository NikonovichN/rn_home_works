import React from 'react';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Header} from '../../components/components';

import {PropsFromRedux} from './ProductDetailsComponent';

const ProductDetails: React.FC<PropsFromRedux> = props => {
  const {isLoading, products, onRefresh} = props;
  const insets = useSafeAreaInsets();

  return (
    <>
      <Header title="pr" />
    </>
  );
};

export default ProductDetails;
