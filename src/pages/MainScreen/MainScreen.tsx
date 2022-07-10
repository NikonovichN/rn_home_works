import React, {useCallback, useEffect} from 'react';
import {FlatList, RefreshControl, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import {Loading, ProductCard, SearchBar} from '@components';
import {Colors} from '@styles';
import {productListActions} from '@actions';
import {useShallowEqualSelector} from '@hooks';
import {productListSelector} from '@selectors';
import {checkInternetConnection} from '@network';

import {navigateToNetworkIssue} from '../ModalWindows';
import {Product} from '../../core/entities';

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

const MainScreen: React.FC<Props> = props => {
  const {isLoading, products} = useShallowEqualSelector(productListSelector);

  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const getProductList = useCallback(
    () => dispatch(productListActions.getProducts()),
    [dispatch],
  );

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  return (
    <>
      <SearchBar />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={products}
          numColumns={2}
          style={styles.flatList}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={getProductList}
              tintColor={Colors.primary}
            />
          }
          contentContainerStyle={{
            paddingBottom: insets.bottom,
          }}
          renderItem={({item}) => (
            <ProductItem navigation={props.navigation} product={item} />
          )}
        />
      )}
    </>
  );
};

type ProductItemProps = {
  navigation: NativeStackNavigationProp<any, any>;
  product: Product;
};

const ProductItem: React.FC<ProductItemProps> = props => {
  const {navigation, product} = props;

  const chooseProduct = useCallback(() => {
    const action = () =>
      navigation.push('ProductDetails', {productId: product.id});
    const failCallback = () => navigateToNetworkIssue({navigation, action});

    checkInternetConnection({action, failCallback});
  }, [navigation, product]);

  return <ProductCard product={product} onPress={chooseProduct} />;
};

const styles = StyleSheet.create({
  flatList: {
    padding: 10,
    backgroundColor: Colors.white,
  },
});

export {MainScreen};
