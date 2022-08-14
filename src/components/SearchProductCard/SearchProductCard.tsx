import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {Product} from '@entities';
import {CommonStyles, Colors, Opacity} from '@styles';

type Props = {
  product: Product;
  onPress(): void;
};

const SearchProductCard: React.FC<Props> = props => {
  const {product, onPress} = props;

  if (isNaN(product.id)) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={Opacity.cardOpacity}
      style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: product.imageUrl,
        }}
      />
      <View>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{product.displayPrice}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    padding: 5,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 4,
    ...CommonStyles.shadow,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  title: {
    marginTop: 5,
    fontSize: 15,
    color: Colors.text.primary,
    fontWeight: '400',
  },
  description: {
    maxWidth: 215,
    flexWrap: 'wrap',
  },
  price: {
    marginTop: 10,
    fontSize: 15,
    color: Colors.text.primary,
    fontWeight: '700',
  },
});

export {SearchProductCard};
