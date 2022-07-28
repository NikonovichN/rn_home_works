import React, {useCallback, useEffect} from 'react';
import {FlatList, RefreshControl, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {useNavigation} from '@react-navigation/native';

import {Loading, ProductCard, SearchBar} from '@components';
import {Colors} from '@styles';
import {productListActions} from '@actions';
import {useShallowEqualSelector} from '@hooks';
import {productListSelector} from '@selectors';
import {checkInternetConnection} from '@network';
import {Product} from '@entities';
import {Routes} from '@constants';

const MainScreen: React.FC = () => {
  const {isLoading, products} = useShallowEqualSelector(productListSelector);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const navigateToSearch = useCallback(() => {
    navigation.navigate(Routes.Search);
  }, [navigation]);

  const getProductList = useCallback(
    () => dispatch(productListActions.getProducts()),
    [dispatch],
  );

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  return (
    <>
      <SearchBar onPressSearchBar={navigateToSearch} />
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
          renderItem={({item}) => <ProductItem product={item} />}
        />
      )}
    </>
  );
};

type ProductItemProps = {
  product: Product;
};

const ProductItem: React.FC<ProductItemProps> = props => {
  const navigation = useNavigation();
  const {product} = props;

  const chooseProduct = useCallback(() => {
    const action = () =>
      navigation.navigate(Routes.ProductDetails, {
        productId: product.id.toString(),
      });

    checkInternetConnection(action, () => {});
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
