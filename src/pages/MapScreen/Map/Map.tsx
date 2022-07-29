import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Map: React.FC = () => {
  return (
    <MapView
      style={styles.mapContainer}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
  },
});

export {Map};
