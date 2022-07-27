import {useCallback} from 'react';
import Share, {ShareOptions} from 'react-native-share';

export const useOpenShare = (options?: ShareOptions) => {
  const openShare = useCallback(() => {
    Share.open({})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  }, [options]);

  return openShare;
};
