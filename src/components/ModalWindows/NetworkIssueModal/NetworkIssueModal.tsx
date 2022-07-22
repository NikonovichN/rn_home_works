import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';

import {Colors, TextStyles} from '@styles';
import {DeclineIcon} from '@icons';
import {PrimaryButton} from '@components';

type Props = {
  isVisible: boolean;
  onClose(): void;
  onTryAgain(): void;
};

const NetworkIssueModal: React.FC<Props> = props => {
  return (
    <ReactNativeModal isVisible={props.isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.iconView}>
            <DeclineIcon />
          </View>
          <Text style={styles.title}>No Internet</Text>
          <Text style={styles.description}>
            Looks like you loosed internet connection. Check your connection in
            settings and repeat your action again
          </Text>
          <View style={styles.actions}>
            <PrimaryButton
              width={125}
              content="try again"
              onPress={props.onTryAgain}
            />
            <PrimaryButton
              width={125}
              content="close"
              onPress={props.onClose}
            />
          </View>
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
  iconView: {
    alignItems: 'center',
    paddingBottom: 15,
  },
  title: {
    ...TextStyles.sectionTitle,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  description: {
    ...TextStyles.regular,
    color: Colors.text.secondary,
    textAlign: 'center',
    marginTop: 10,
  },
  actions: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export {NetworkIssueModal};
