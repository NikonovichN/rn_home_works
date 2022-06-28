import React from 'react';
import {TextInput, View} from 'react-native';

import {SearchIcon} from '../icons/icons';

import styles from './styles';

const SearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBar}>
        <View style={styles.icon}>
          <SearchIcon />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          textAlignVertical="center"
        />
      </View>
    </View>
  );
};

export default SearchBar;
