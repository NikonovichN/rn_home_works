import React, {useState} from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  RefreshControl,
  StyleSheet,
} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Loading, PrimaryButton, SelectProperty} from '../../components';
import {ButtonStyles, Colors, TextStyles} from '../../core/styles';
import {navigateToSelectProperty} from '../ModalWindows';

import {PropsFromRedux} from './ProductDetailsComponent';

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

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingTop: 10,
    paddingBottom: 60,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  image: {
    marginVertical: 44,
    marginHorizontal: 64,
    height: 250,
  },
  marginTop10: {
    marginTop: 10,
  },
  marginTop15: {
    marginTop: 15,
  },
  divider: {
    marginTop: 20,
    borderBottomColor: Colors.border.primary,
    borderBottomWidth: 1,
  },
  modalTitle: {
    ...TextStyles.sectionTitle,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  modalDescription: {
    ...TextStyles.regular,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  modalButton: {
    ...ButtonStyles.primary,
    width: 125,
    alignSelf: 'center',
  },
});

export {ProductDetails};
