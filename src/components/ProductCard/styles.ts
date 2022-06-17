import {Dimensions, StyleSheet} from 'react-native';

import {Colors, CommonStyles} from '../../core/styles/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const NUMBER_OF_COLUMN = 2;
const MARGiN_CARD = 10;
const MARGIN_SPACE = 2 * NUMBER_OF_COLUMN * MARGiN_CARD;
const CONTAINER_PADDING = 20;

export default StyleSheet.create({
  commonContainerStyles: {
    width: (SCREEN_WIDTH - MARGIN_SPACE - CONTAINER_PADDING) / NUMBER_OF_COLUMN,
    margin: MARGiN_CARD,
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
