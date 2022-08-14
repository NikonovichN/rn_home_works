
import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveAsyncStorage(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('Error save to async storage:', e);
  }
}

export {saveAsyncStorage};
