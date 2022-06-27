import React from 'react';
import {Text, TextInputProps, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';

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

export default TextInputStore;
