import {StyleSheet} from 'react-native';

import {ButtonStyles, Colors, TextStyles} from '../../core/styles/styles';

export default StyleSheet.create({
  scrollViewContainer: {
    paddingTop: 10,
    paddingBottom: 60,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  image: {
    marginVertical: 44,
    marginHorizontal: 64,
    height: 250,
  },
  marginTop10: {
    marginTop: 10,
  },
  marginTop15: {
    marginTop: 15,
  },
  divider: {
    marginTop: 20,
    borderBottomColor: Colors.border.primary,
    borderBottomWidth: 1,
  },
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
});
