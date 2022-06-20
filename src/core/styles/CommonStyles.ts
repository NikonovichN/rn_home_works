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

const TextStyles = StyleSheet.create({
  regular: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.text.primary,
  },
  regularBold: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text.primary,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text.primary,
  },
  buttonRegular: {
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 1.25,
    color: Colors.text.onSurfacePrimary,
  },
});

const ButtonStyles = StyleSheet.create({
  primary: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    backgroundColor: Colors.buttons.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...TextStyles.buttonRegular,
  },
});

class Opacity {
  static regularButton = 0.9;
}

export {CommonStyles, TextStyles, ButtonStyles, Opacity};
