import React, {ReactNode} from 'react';
import {View} from 'react-native';

// This View is needed for correct work of touchable components with icons
const iconWrapper = (Icon: React.FC) => (props: any) =>
  (
    <View>
      <Icon {...props} />
    </View>
  );

export default iconWrapper;
