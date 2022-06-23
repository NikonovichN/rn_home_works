import {StyleSheet} from 'react-native';

import {CommonStyles, Colors} from '../../../../core/styles/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 36,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  cartDetails: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 4,
    padding: 5,
    ...CommonStyles.shadow,
  },
  infoContainer: {
    marginTop: 5,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.light,
  },
  rowContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  lastRow: {
    marginTop: 10,
    marginBottom: 10,
  },
  safeInfoContainer: {
    width: 174,
    marginTop: 15,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  safeGuardText: {
    marginLeft: 10,
  },
});
