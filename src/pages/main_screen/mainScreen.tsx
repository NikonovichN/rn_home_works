import React from 'react';
import {FlatList, RefreshControl} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  Header,
  Loading,
  ProductCard,
  SearchBar,
} from '../../components/components';
import {Colors} from '../../core/styles/styles';

import {PropsFromRedux} from './MainScreenComponent';
import styles from './styles';

const MainScreen: React.FC<PropsFromRedux> = props => {
  const {isLoading, products, onRefresh} = props;
  const insets = useSafeAreaInsets();

  return (
    <>
      <Header isMainPage title="Ecommerce Store" />
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
          renderItem={({item}) => <ProductCard product={item} />}
        />
      )}
    </>
  );
};

export default MainScreen;
