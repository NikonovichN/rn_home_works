import {StyleSheet} from 'react-native';
import {Colors, TextStyles} from '../../core/styles/styles';

export default StyleSheet.create({
  label: {
    position: 'absolute',
    backgroundColor: Colors.white,
    paddingHorizontal: 4,
    marginTop: -8,
    marginLeft: 20,
    zIndex: 1,
    ...TextStyles.small,
  },
  inputStyles: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
