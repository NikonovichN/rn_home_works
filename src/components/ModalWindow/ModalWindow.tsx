import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';

import styles from './styles';
import {RouteProp} from '@react-navigation/core/lib/typescript/src/types';
import {RootStackParamList} from '../../pages/NavigationStack/types';

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

export default ModalWindow;
