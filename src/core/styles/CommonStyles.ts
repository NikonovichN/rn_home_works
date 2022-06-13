import {StyleSheet} from 'react-native';

import Colors from './ColorTokens';

const CommonStyles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.shadow.primary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    elevation: 4,
  },
});

export default CommonStyles;
