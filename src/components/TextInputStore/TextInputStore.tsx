import React from 'react';
import {StyleSheet, Text, TextInputProps, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import {Colors, TextStyles} from '../../core/styles';

type Props = {
  label: string;
};

const TextInputStore: React.FC<TextInputProps & Props> = props => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        placeholder="Text"
        maxLength={30}
        {...props}
        style={[styles.inputStyles, props.style]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    backgroundColor: Colors.white,
    paddingHorizontal: 4,
    marginTop: -8,
    marginLeft: 20,
    zIndex: 1,
    ...TextStyles.small,
  },
  inputStyles: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export {TextInputStore};
