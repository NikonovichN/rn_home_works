import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Colors, Opacity, TextStyles} from '@styles';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  property: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: Colors.buttons.selectClear,
  },
  activeProperty: {
    backgroundColor: Colors.buttons.selectedClear,
  },
});

export {SelectProperty};
