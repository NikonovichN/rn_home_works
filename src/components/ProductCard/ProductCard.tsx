import React from 'react';
import {Text, View} from 'react-native';

import {Product} from '../../core/entities/ProductList';

import styles from './styles';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = props => {
  const {product} = props;

  if (isNaN(product.id)) return <View style={styles.commonContainerStyles} />;

  return (
    <View style={[styles.commonContainerStyles, styles.container]}>
      <Text>{product.name}</Text>
      <Text>{product.displayPrice}</Text>
    </View>
  );
};

export default ProductCard;
