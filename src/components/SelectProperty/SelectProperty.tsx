import React, {useCallback, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Colors, Opacity, TextStyles} from '@styles';

type Props = {
  properties: string[];
  activeProperty: string | null;
  onPress(selectedProperty: string): void;
};

const SelectProperty: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      {props.properties.map(property => (
        <Property key={property} property={property} {...props} />
      ))}
    </View>
  );
};

type PropertyProps = {
  property: string;
  activeProperty: string | null;
  onPress(selectedProperty: string): void;
};

const Property: React.FC<PropertyProps> = ({
  property,
  activeProperty,
  onPress,
}) => {
  const containerStyle = useMemo(
    () => [
      styles.property,
      activeProperty === property && styles.activeProperty,
    ],
    [property, activeProperty],
  );
  const textStyle = useMemo(
    () => [
      TextStyles.regular,
      activeProperty === property && {
        color: Colors.text.onSurfacePrimary,
      },
    ],
    [property, activeProperty],
  );
  const onPressProperty = useCallback(
    () => onPress(property),
    [onPress, property],
  );

  return (
    <TouchableOpacity
      style={containerStyle}
      activeOpacity={Opacity.regularButton}
      onPress={onPressProperty}>
      <Text style={textStyle}>{property}</Text>
    </TouchableOpacity>
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
