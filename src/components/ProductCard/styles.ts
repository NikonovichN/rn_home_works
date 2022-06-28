import {StyleSheet} from 'react-native';

import {Colors, CommonStyles} from '../../core/styles/styles';

export default StyleSheet.create({
  commonContainerStyles: {
    flex: 1,
    margin: 10,
    padding: 5,
  },
  container: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    ...CommonStyles.shadow,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 30,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 5,
    fontSize: 15,
    color: Colors.text.primary,
    fontWeight: '400',
  },
  price: {
    marginTop: 10,
    fontSize: 15,
    color: Colors.text.primary,
    fontWeight: '700',
  },
});
