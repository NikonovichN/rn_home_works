import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Colors from '../../core/styles/ColorTokens';
import {Opacity, TextStyles} from '../../core/styles/CommonStyles';

import styles from './styles';

type Props = {
  properties: string[];
  activeProperty: string | null;
  onPress(selectedProperty: string): void;
};

const SelectProperty: React.FC<Props> = props => {
  const {properties, activeProperty, onPress} = props;

  return (
    <View style={styles.container}>
      {properties.map(property => (
        <TouchableOpacity
          key={property}
          style={[
            styles.property,
            activeProperty === property && styles.activeProperty,
          ]}
          activeOpacity={Opacity.regularButton}
          onPress={() => onPress(property)}>
          <Text
            style={[
              TextStyles.regular,
              activeProperty === property && {
                color: Colors.text.onSurfacePrimary,
              },
            ]}>
            {property}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SelectProperty;
