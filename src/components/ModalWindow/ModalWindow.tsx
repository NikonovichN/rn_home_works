import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {RouteProp} from '@react-navigation/core/lib/typescript/src/types';

import {RootStackParamList} from '../../pages/NavigationStack/types';
import {Colors} from '../../core/styles';

type Props = {
  route: RouteProp<RootStackParamList, 'ModalWindow'>;
};

const ModalWindow: React.FC<Props> = props => {
  const {
    route: {
      params: {icon, title, description, actions},
    },
  } = props;

  return (
    <View style={styles.modalContainer}>
      <TouchableWithoutFeedback>
        <View style={styles.contentContainer}>
          <View style={styles.iconView}>{icon}</View>
          {title}
          {description !== null ? (
            <View style={styles.description}>{description}</View>
          ) : null}
          <View style={styles.actions}>{actions}</View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.blackoutOpacity,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '90%',
    backgroundColor: Colors.white,
    paddingTop: 25,
    paddingBottom: 30,
    borderRadius: 5,
    paddingHorizontal: 35,
  },
  iconView: {
    alignItems: 'center',
    paddingBottom: 15,
  },
  description: {marginTop: 10},
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
});

export {ModalWindow};
