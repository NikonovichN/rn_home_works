import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {Product} from '../../core/entities/ProductList';

import styles from './styles';

interface Props {
  product: Product;
  onPress(): void;
}

const ProductCard: React.FC<Props> = props => {
  const {product, onPress} = props;

  if (isNaN(product.id)) return <View style={styles.commonContainerStyles} />;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
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
    </TouchableOpacity>
  );
};

export default ProductCard;
