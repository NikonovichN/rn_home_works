import React, {useCallback, useMemo, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import {ChooseAvatar} from '@icons';
import {Opacity} from '@styles';
import {usePickImage} from '@hooks';

const ProfilePicture: React.FC = () => {
  const pickImage = usePickImage();
  const [profileURI, setProfileURI] = useState<string | null>(null);

  const onPress = useCallback(async () => {
    const result = await pickImage();

    if (result && result?.assets) {
      setProfileURI(result.assets[0].uri ?? null);
    }
  }, [pickImage]);

  const PictureComponent = useMemo(
    () =>
      profileURI ? (
        <Image source={{uri: profileURI}} style={styles.image} />
      ) : (
        <ChooseAvatar />
      ),
    [profileURI],
  );

  return (
    <TouchableOpacity
      activeOpacity={Opacity.cardOpacity}
      onPress={onPress}
      style={styles.container}>
      {PictureComponent}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export {ProfilePicture};
