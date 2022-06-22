import React, {useState} from 'react';
import {ScrollView, Image, Text, View, RefreshControl} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Loading,
  PrimaryButton,
  SelectProperty,
} from '../../components/components';
import {Colors, TextStyles} from '../../core/styles/styles';
import {navigateToSelectProperty} from '../ModalWindows/ModalWindows';

import {PropsFromRedux} from './ProductDetailsComponent';
import styles from './styles';

const ProductDetails: React.FC<PropsFromRedux> = props => {
  const {isLoading, product, onRefresh, navigation, addToCart} = props;
  const insets = useSafeAreaInsets();
  const [activeProperty, setActiveProperty] = useState<string | null>(null);

  return (
    <>
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
              activeProperty={activeProperty}
              onPress={setActiveProperty}
            />
            <View style={styles.divider} />
            <Text style={[TextStyles.sectionTitle, styles.marginTop15]}>
              Description
            </Text>
            <Text style={[TextStyles.regular, styles.marginTop10]}>
              {product.description}
            </Text>
            <View style={styles.marginTop15}>
              <PrimaryButton
                content="Add to cart"
                onPress={() => {
                  if (activeProperty == null) {
                    navigateToSelectProperty({navigation});
                  } else {
                    addToCart(activeProperty);
                  }
                }}
              />
            </View>
            <View style={{height: insets.bottom}} />
          </ScrollView>
        </>
      )}
    </>
  );
};

export default ProductDetails;
