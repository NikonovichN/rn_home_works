import {useCallback} from 'react';
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';

const defaultOptions: ImageLibraryOptions = {
  mediaType: 'photo',
  selectionLimit: 1,
};

const usePickImage = (options: ImageLibraryOptions = defaultOptions) => {
  const pickImage = useCallback(async () => {
    try {
      const result = await launchImageLibrary(options);
      return result;
    } catch (e) {
      console.log(e);
    }
  }, [options]);

  return pickImage;
};

export {usePickImage};
