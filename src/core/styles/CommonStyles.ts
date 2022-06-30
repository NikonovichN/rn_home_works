import {StyleSheet} from 'react-native';
import {Colors} from './ColorTokens';

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
  small: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.text.primary,
  },
  regular: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.text.primary,
  },
  regularSecondary: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.text.secondary,
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
  secondaryTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.grey,
  },
  buttonRegular: {
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 1.25,
    color: Colors.text.onSurfacePrimary,
  },
  heading: {
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 50,
    color: Colors.text.accent,
  },
  smallSuccess: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '400',
    color: Colors.text.accentGreen,
  },
  error: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.text.error,
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
