import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {Product} from '../../core/entities/ProductList';
import {CommonStyles, Colors} from '../../core/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const NUMBER_OF_COLUMN = 2;
const MARGiN_CARD = 10;
const MARGIN_SPACE = 2 * NUMBER_OF_COLUMN * MARGiN_CARD;
const CONTAINER_PADDING = 20;

type Props = {
  product: Product;
  onPress(): void;
};

const ProductCard: React.FC<Props> = props => {
  const {product, onPress} = props;

  if (isNaN(product.id)) {
    return <View style={styles.commonContainerStyles} />;
  }

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

const styles = StyleSheet.create({
  commonContainerStyles: {
    width: (SCREEN_WIDTH - MARGIN_SPACE - CONTAINER_PADDING) / NUMBER_OF_COLUMN,
    margin: MARGiN_CARD,
    padding: 5,
  },
  container: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    ...CommonStyles.shadow,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 30,
  },
  descriptionContainer: {
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 5,
    fontSize: 15,
    color: Colors.text.primary,
    fontWeight: '400',
  },
  price: {
    marginTop: 10,
    fontSize: 15,
    color: Colors.text.primary,
    fontWeight: '700',
  },
});

export {ProductCard};
