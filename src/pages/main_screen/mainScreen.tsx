import React from 'react';
import {Text} from 'react-native';

import {PropsFromRedux} from './MainScreenComponent';

import {Header, Loading} from '../../components/components';

const MainScreen: React.FC<PropsFromRedux> = props => {
  const {isLoading} = props;

  return (
    <>
      <Header title="Ecommerce Store" />
      {isLoading ? <Loading /> : <Text>Dummy page</Text>}
    </>
  );
};

export default MainScreen;
