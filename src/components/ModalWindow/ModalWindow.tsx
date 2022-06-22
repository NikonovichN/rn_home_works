import React, {ReactNode} from 'react';
import {
  Button,
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {ParamListBase} from '@react-navigation/routers/lib/typescript/src/types';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RouteProp} from '@react-navigation/core/lib/typescript/src/types';
import {RootStackParamList} from '../../pages/NavigationStack/types';

interface Props {
  route: RouteProp<RootStackParamList, 'ModalWindow'>;
}

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
