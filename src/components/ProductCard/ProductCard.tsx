import React from 'react';
import {Text, View, Image} from 'react-native';

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
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: product.imageUrl,
        }}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.displayPrice}</Text>
      </View>
    </View>
  );
};

export default ProductCard;
