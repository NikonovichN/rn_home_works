import React from 'react';
import {FlatList, View} from 'react-native';

import {
  Header,
  Loading,
  ProductCard,
  SearchBar,
} from '../../components/components';

import {PropsFromRedux} from './MainScreenComponent';
import styles from './styles';

const MainScreen: React.FC<PropsFromRedux> = props => {
  const {isLoading, products} = props;

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
          renderItem={({item}) => <ProductCard product={item} />}
        />
      )}
    </>
  );
};

export default MainScreen;
