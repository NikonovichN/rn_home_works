import React, {useCallback, useEffect, useState} from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RouteProp} from '@react-navigation/native';

import {useShallowEqualSelector} from '@hooks';
import {Loading, PrimaryButton, SelectProperty} from '@components';
import {productDetailsSelector} from '@selectors';
import {ButtonStyles, Colors, TextStyles} from '@styles';
import {productDetailsActions, addToCartActions} from '@actions';
import {RootStackParamList} from '@navigation';

import {navigateToSelectProperty} from '../ModalWindows';

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<RootStackParamList, 'ProductDetails'>;
};

const ProductDetailsPage: React.FC<Props> = props => {
  const {
    isLoading,
    productDetails: {imageUrl, name, displayPrice, properties, description},
  } = useShallowEqualSelector(productDetailsSelector);
  const {
    navigation,
    route: {
      params: {productId},
    },
  } = props;

  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const [activeProperty, setActiveProperty] = useState<string | null>(null);
  const getProduct = useCallback(
    () => dispatch(productDetailsActions.getProductDetails(productId)),
    [productId, dispatch],
  );
  const onPressButton = useCallback(() => {
    if (activeProperty == null) {
      navigateToSelectProperty({navigation});
    } else {
      dispatch(addToCartActions.addToCart(activeProperty, navigation));
    }
  }, [activeProperty, dispatch, navigation]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

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
                onRefresh={getProduct}
                tintColor={Colors.primary}
              />
            }>
            <Image style={styles.image} source={{uri: imageUrl}} />
            <Text style={TextStyles.regular}>{name}</Text>
            <Text style={[TextStyles.regularBold, styles.marginTop15]}>
              {displayPrice}
            </Text>
            <View style={styles.divider} />
            <Text style={[TextStyles.sectionTitle, styles.marginTop15]}>
              Select Property
            </Text>
            <SelectProperty
              properties={properties.map(value => value.id.toString())}
              activeProperty={activeProperty}
              onPress={setActiveProperty}
            />
            <View style={styles.divider} />
            <Text style={[TextStyles.sectionTitle, styles.marginTop15]}>
              Description
            </Text>
            <Text style={[TextStyles.regular, styles.marginTop10]}>
              {description}
            </Text>
            <View style={styles.marginTop15}>
              <PrimaryButton content="Add to cart" onPress={onPressButton} />
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

export {ProductDetailsPage};
