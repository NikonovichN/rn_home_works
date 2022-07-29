import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {Loading, SearchBar, SearchProductCard} from '@components';
import {searchProductsActions} from '@actions';
import {searchProductsSelector} from '@selectors';
import {Colors} from '@styles';
import {Product} from '@entities';
import {Routes} from '@constants';
import {checkInternetConnection} from '@network';

const SearchProducts: React.FC = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const {
    loading,
    products,
    filters: storageFilters,
  } = useSelector(searchProductsSelector);
  const textInputRef = React.createRef<TextInput>();
  const insets = useSafeAreaInsets();

  const onChangeText = useCallback(
    (value: string) => setFilter(value),
    [setFilter],
  );
  const startSearch = useCallback(() => {
    dispatch(searchProductsActions.searchProducts(filter));
  }, [dispatch, filter]);

  const ResultComponent = useMemo(
    () =>
      loading ? (
        <Loading />
      ) : (
        <FlatList
          data={products}
          numColumns={1}
          contentContainerStyle={{
            paddingBottom: insets.bottom,
          }}
          renderItem={({item}) => <ProductItem product={item} />}
        />
      ),
    [loading, products],
  );

  useEffect(() => {
    if (textInputRef.current != null) {
      textInputRef.current.focus();
    }
  }, [textInputRef.current]);

  useEffect(() => {
    dispatch(searchProductsActions.searchProductsReadStorage());
  }, [dispatch]);

  useEffect(() => {
    if (storageFilters.length > 0) {
      setFilter(storageFilters[0]);
    }
  }, [storageFilters]);

  return (
    <>
      <SearchBar
        onChangeText={onChangeText}
        onTapIcon={startSearch}
        ref={textInputRef}
        lastValue={filter}
      />
      <View style={styles.container}>{ResultComponent}</View>
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

  return <SearchProductCard product={product} onPress={chooseProduct} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    flex: 1,
  },
});

export {SearchProducts};
