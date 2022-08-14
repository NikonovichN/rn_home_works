import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {StyleSheet, View, ScrollView, Platform} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {noop} from 'lodash';

import {profileSelector} from '@selectors';
import {Loading, PrimaryButton, TextInputStore} from '@components';
import {profileActions} from '@actions';
import {Colors} from '@styles';
import {ProfileUpdate} from '@entities';

import {ProfilePicture} from './components';

const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch();
  const {loading, data: profile} = useSelector(profileSelector);

  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const insets = useSafeAreaInsets();
  const insetsContainer = useMemo(
    () => ({
      paddingBottom: Platform.OS === 'ios' ? insets.bottom : 40,
    }),
    [insets],
  );

  const isUpdateButtonVisible = useMemo(() => {
    const [firstName, lastName] = fullName.split(' ');
    if (
      firstName !== profile?.attributes.first_name ||
      lastName !== profile?.attributes.last_name ||
      email !== profile?.attributes.email ||
      address !== profile?.relationships.default_billing_address.data.type
    ) {
      return true;
    } else {
      return false;
    }
  }, [profile, fullName, email, address]);
  const updateButton = useCallback(() => {
    const [firstName, lastName] = fullName.split(' ');
    const body: ProfileUpdate = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      bill_address_id: address,
    };

    dispatch(profileActions.updateProfile(body));
  }, [dispatch, fullName, email, address]);

  useEffect(() => {
    dispatch(profileActions.getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setFullName(
        profile.attributes.first_name + ' ' + profile.attributes.last_name,
      );
      setEmail(profile.attributes.email);
      setAddress(profile.relationships.default_billing_address.data.type);
    }
  }, [profile]);

  return loading ? (
    <Loading />
  ) : (
    <ScrollView style={[styles.container, insetsContainer]}>
      <View style={styles.elementContainer}>
        <TextInputStore
          label="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>
      <View style={styles.elementContainer}>
        <ProfilePicture />
      </View>
      <View style={styles.elementContainer}>
        <TextInputStore label="Email" value={email} onChangeText={setEmail} />
      </View>
      <View style={styles.elementContainer}>
        <TextInputStore
          label="Address"
          value={address}
          onChangeText={setAddress}
        />
      </View>
      <View style={styles.emptySpace} />
      {isUpdateButtonVisible && (
        <View style={styles.updateButtonContainer}>
          <PrimaryButton content="update" onPress={updateButton} />
        </View>
      )}
      <PrimaryButton content="log out" onPress={noop} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  elementContainer: {
    marginVertical: 15,
    justifyContent: 'center',
  },
  emptySpace: {
    marginBottom: 52,
  },
  updateButtonContainer: {
    marginBottom: 20,
  },
});

export {ProfileScreen};
