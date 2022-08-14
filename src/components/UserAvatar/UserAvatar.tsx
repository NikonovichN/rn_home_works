import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {ChooseAvatar} from '@icons';

type Props = {
  pictureURI: string | null;
};

export const UserAvatar: React.FC<Props> = React.memo(({pictureURI}) => {
  return pictureURI ? (
    <Image source={{uri: pictureURI}} style={styles.image} />
  ) : (
    <ChooseAvatar />
  );
});

const styles = StyleSheet.create({
  image: {width: 200, height: 200, borderRadius: 100},
});
