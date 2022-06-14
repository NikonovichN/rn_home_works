import React from 'react';
import {Text, View} from 'react-native';
import { TextStyles } from '../../core/styles/CommonStyles';

import styles from './styles';

interface Props {
  properties: string[];
}

const SelectProperty: React.FC<Props> = props => {
  const {properties} = props;
  return (
    <View style={styles.container}>
      {properties.map(property => (
        <View style={styles.property}>
          <Text style={TextStyles.regular}>{property}</Text>
        </View>
      ))}
    </View>
  );
};

export default SelectProperty;
