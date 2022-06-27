import React from 'react';
import {FlatList, RefreshControl, StyleSheet} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Loading, ProductCard, SearchBar} from '../../components';
import {Colors} from '../../core/styles';

import {PropsFromRedux} from './MainScreenComponent';

const MainScreen: React.FC<PropsFromRedux> = props => {
  const {isLoading, products, navigation, onRefresh} = props;
  const insets = useSafeAreaInsets();

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
              onRefresh={onRefresh}
              tintColor={Colors.primary}
            />
          }
          contentContainerStyle={{
            paddingBottom: insets.bottom,
          }}
          renderItem={({item}) => (
            <ProductCard
              product={item}
              onPress={() =>
                navigation.push('ProductDetails', {productId: item.id})
              }
            />
          )}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  flatList: {
    padding: 10,
    backgroundColor: Colors.white,
  },
});

export {MainScreen};
