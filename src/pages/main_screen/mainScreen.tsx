import React from 'react';
import {FlatList, RefreshControl} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  Header,
  Loading,
  ProductCard,
  SearchBar,
} from '../../components/components';

import {PropsFromRedux} from './MainScreenComponent';
import styles from './styles';

const MainScreen: React.FC<PropsFromRedux> = props => {
  const {isLoading, products, onRefresh} = props;
  const insets = useSafeAreaInsets();

  return (
    <>
      <Header title="Ecommerce Store" />
      <SearchBar />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={products}
          numColumns={2}
          style={styles.flatList}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={onRefresh} />
          }
          contentContainerStyle={{
            paddingBottom: insets.bottom,
          }}
          renderItem={({item}) => <ProductCard product={item} />}
        />
      )}
    </>
  );
};

export default MainScreen;
