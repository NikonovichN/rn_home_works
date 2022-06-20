import {StyleSheet} from 'react-native';

import {Colors, TextStyles} from '../../core/styles/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  property: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: Colors.buttons.selectClear,
  },
  activeProperty: {
    backgroundColor: Colors.buttons.selectedClear,
  },
});
