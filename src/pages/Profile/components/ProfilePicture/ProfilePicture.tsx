import React, {useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Opacity} from '@styles';
import {usePickImage} from '@hooks';
import {UserAvatar} from '@components';

const ProfilePicture: React.FC = () => {
  const pickImage = usePickImage();
  const [profileURI, setProfileURI] = useState<string | null>(null);

  const onPress = useCallback(async () => {
    const result = await pickImage();

    if (result && result?.assets) {
      setProfileURI(result.assets[0].uri ?? null);
    }
  }, [pickImage]);

  return (
    <TouchableOpacity
      activeOpacity={Opacity.cardOpacity}
      onPress={onPress}
      style={styles.container}>
      <UserAvatar pictureURI={profileURI} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
});

export {ProfilePicture};
