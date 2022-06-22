import {StyleSheet} from 'react-native';

import {Colors} from '../../core/styles/styles';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.blackoutOpacity,
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
  description: {marginTop: 10},
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
});
