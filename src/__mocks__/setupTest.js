jest.mock('react-native-share', () => ({}));

jest.mock('@react-native-community/netinfo', () => ({
  addEventListener: jest.fn()
}));