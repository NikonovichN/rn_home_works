import {StyleSheet} from 'react-native';

import {Colors} from '../../core/styles/styles';

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
});
