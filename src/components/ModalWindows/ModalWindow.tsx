import React from 'react';
import {StyleSheet, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';

import {Colors} from '@styles';

import {ModalWindowProps} from './types';
import {useModalWindow} from './hooks';

const ModalWindow: React.FC<ModalWindowProps> = props => {
  const {ModalWindowComponent} = useModalWindow(props.typeModal);

  return (
    <ReactNativeModal isVisible={props.isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <ModalWindowComponent onClose={props.onClose} />
        </View>
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
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
});

export {ModalWindow};
