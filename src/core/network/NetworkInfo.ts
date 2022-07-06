import NetInfo from '@react-native-community/netinfo';

interface InterfaceNetworkInfo {
  hasInternetConnection: boolean | null;
}

const NetworkInfo: InterfaceNetworkInfo = {
  hasInternetConnection: false,
};

NetInfo.addEventListener(state => {
  NetworkInfo.hasInternetConnection = state.isConnected;
});

export {NetworkInfo};
