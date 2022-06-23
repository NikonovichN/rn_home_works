import {StyleSheet} from 'react-native';
import {Colors, TextStyles} from '../../../../core/styles/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  title: {
    ...TextStyles.secondaryTitle,
    marginTop: 15,
    marginBottom: 5,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 35,
  },
});
