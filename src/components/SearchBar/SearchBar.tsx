import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

import {Colors, CommonStyles, Opacity} from '@styles';
import {SearchIcon} from '@icons';
import {isFunction} from 'lodash';

type Props = {
  onTapIcon?(): void;
  onPressSearchBar?(): void;
  onChangeText?(value: string): void;
  ref?: React.Ref<TextInput>;
};

const SearchBar: React.FC<Props> = React.forwardRef<TextInput, Props>(
  (props, ref) => {
    return (
      <TouchableOpacity
        style={styles.container}
        activeOpacity={Opacity.regularButton}
        disabled={!isFunction(props.onPressSearchBar)}
        onPress={props.onPressSearchBar}>
        <View style={styles.containerBar}>
          <View style={styles.icon}>
            <TouchableOpacity
              activeOpacity={Opacity.regularButton}
              onPress={props.onTapIcon}>
              <SearchIcon />
            </TouchableOpacity>
          </View>
          <TextInput
            ref={ref}
            style={styles.input}
            placeholder="Search"
            textAlignVertical="center"
            onChangeText={props.onChangeText}
            editable={!isFunction(props.onPressSearchBar)}
          />
        </View>
      </TouchableOpacity>
    );
  },
);

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
    zIndex: 10,
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
