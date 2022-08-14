import AsyncStorage from '@react-native-async-storage/async-storage';

async function readAsyncStorage(
  key: string,
): Promise<string | null | undefined> {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? jsonValue : null;
  } catch (e) {
    console.log('Error read from storage:', e);
  }
}

export {readAsyncStorage};
