import React from 'react';
import {StyleSheet, Text, Touchable, View} from 'react-native';
import {
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {Colors, Opacity, TextStyles} from '@styles';
import {AccentShare} from '@icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useOpenShare} from '../../hooks/useOpenShare';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const openShare = useOpenShare();

  return (
    <>
      <Text style={styles.header}>Ecomerce Store</Text>
      <DrawerItemList {...props} />
      <View style={styles.divider} />
      <TouchableOpacity
        onPress={openShare}
        style={styles.shareContainer}
        activeOpacity={Opacity.regularButton}>
        <AccentShare />
        <Text style={styles.shareText}>Share</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    ...TextStyles.heading,
    padding: 16,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.light,
  },
  shareContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareText: {
    ...TextStyles.regular,
    marginLeft: 32,
  },
});

export {CustomDrawerContent};
