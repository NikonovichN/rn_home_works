import React from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Header, Loading, SelectProperty} from '../../components/components';
import {ButtonStyles, Colors, TextStyles} from '../../core/styles/styles';

import {PropsFromRedux} from './ProductDetailsComponent';
import styles from './styles';

const ProductDetails: React.FC<PropsFromRedux> = props => {
  const {isLoading, product, onRefresh} = props;
  const insets = useSafeAreaInsets();

  return (
    <>
      <Header title={product.name} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ScrollView
            style={styles.scrollViewContainer}
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={onRefresh}
                tintColor={Colors.primary}
              />
            }>
            <Image style={styles.image} source={{uri: product.imageUrl}} />
            <Text style={TextStyles.regular}>{product.name}</Text>
            <Text style={[TextStyles.regularBold, styles.marginTop15]}>
              {product.displayPrice}
            </Text>
            <View style={styles.divider} />
            <Text style={[TextStyles.sectionTitle, styles.marginTop15]}>
              Select Property
            </Text>
            <SelectProperty
              properties={product.properties.map(value => value.id.toString())}
            />
            <View style={styles.divider} />
            <Text style={[TextStyles.sectionTitle, styles.marginTop15]}>
              Description
            </Text>
            <Text style={[TextStyles.regular, styles.marginTop10]}>
              {product.description}
            </Text>
            <TouchableOpacity
              style={[ButtonStyles.primary, styles.marginTop15]}
              activeOpacity={0.9}>
              <Text style={TextStyles.buttonRegular}>
                {'Add to cart'.toUpperCase()}
              </Text>
            </TouchableOpacity>
            <View style={{height: insets.bottom}} />
          </ScrollView>
        </>
      )}
    </>
  );
};

export default ProductDetails;
