import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {StyleSheet, View, ScrollView, Platform} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {profileSelector} from '@selectors';
import {Loading, PrimaryButton, TextInputStore} from '@components';
import {profileActions} from '@actions';
import {Colors} from '@styles';
import {ChooseAvatar} from '@icons';
import {noop} from 'lodash';
import {ProfileUpdate} from '../../core/entities';

const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch();
  const {loading, data} = useSelector(profileSelector);

  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const [showUpdateButton, setShowUpdateButton] = useState(false);

  const insets = useSafeAreaInsets();
  const insetsContainer = useMemo(
    () => ({
      paddingBottom: Platform.OS === 'ios' ? insets.bottom : 40,
    }),
    [insets],
  );

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
    if (data) {
      setFullName(data.attributes.first_name + ' ' + data.attributes.last_name);
      setEmail(data.attributes.email);
      setAddress(data.relationships.default_billing_address.data.type);
    }
  }, [data]);

  useEffect(() => {
    const [firstName, lastName] = fullName.split(' ');
    if (
      firstName !== data?.attributes.first_name ||
      lastName !== data?.attributes.last_name ||
      email !== data?.attributes.email ||
      address !== data?.relationships.default_billing_address.data.type
    ) {
      setShowUpdateButton(true);
    } else {
      setShowUpdateButton(false);
    }
  }, [data, fullName, email, address, setShowUpdateButton]);

  const Component = useMemo(
    () =>
      loading ? (
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
            <ChooseAvatar style={styles.avatarIcon} />
          </View>
          <View style={styles.elementContainer}>
            <TextInputStore
              label="Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.elementContainer}>
            <TextInputStore
              label="Address"
              value={address}
              onChangeText={setAddress}
            />
          </View>
          <View style={styles.emptySpace} />
          {showUpdateButton && (
            <View style={styles.updateButtonContainer}>
              <PrimaryButton content="update" onPress={updateButton} />
            </View>
          )}
          <PrimaryButton content="log out" onPress={noop} />
        </ScrollView>
      ),
    [
      loading,
      fullName,
      email,
      address,
      showUpdateButton,
      insetsContainer,
      updateButton,
    ],
  );

  return Component;
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
  avatarIcon: {
    alignSelf: 'center',
  },
  emptySpace: {
    marginBottom: 52,
  },
  updateButtonContainer: {
    marginBottom: 20,
  },
});

export {ProfileScreen};
