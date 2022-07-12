import {StyleSheet} from 'react-native';

import {ButtonStyles, Colors, TextStyles} from '@styles';

export default StyleSheet.create({
  modalTitle: {
    ...TextStyles.sectionTitle,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  modalDescription: {
    ...TextStyles.regular,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  modalButton: {
    ...ButtonStyles.primary,
    width: 125,
    alignSelf: 'center',
  },
  alignView: {
    flex: 1,
    alignItems: 'center',
  },
});
