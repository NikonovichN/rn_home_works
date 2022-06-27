import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import {Colors, CommonStyles} from '@styles';
import {SearchIcon} from '../icons/icons';

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

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.white,
    ...CommonStyles.shadow,
    zIndex: 999, // this is needed to display shadow.
  },
  containerBar: {
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    paddingLeft: 10,
  },
  input: {
    height: 40,
    paddingLeft: 40,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    borderRadius: 4,
    lineHeight: 0,
    fontSize: 15,
  },
});

export {SearchBar};
