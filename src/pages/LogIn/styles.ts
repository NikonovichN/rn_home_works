import {StyleSheet} from 'react-native';
import {Colors} from '../../core/styles/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 21,
    backgroundColor: Colors.white,
  },
  headerContainer: {
    alignItems: 'center',
  },
  textInputContainer: {
    marginTop: 90,
    marginBottom: 50,
    height: 110,
    justifyContent: 'space-between',
  },
});
