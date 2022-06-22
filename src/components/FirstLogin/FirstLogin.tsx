import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  onPressLogIn(): void;
}

const FirstLogin: React.FC<Props> = props => {
  return (
    <View>
      <Text>First Login</Text>
    </View>
  );
};

export default FirstLogin;
