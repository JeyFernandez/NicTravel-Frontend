import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import * as ExpoLocation from 'expo-location';
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { MAP_KEY } from '@env';

const Map = (): JSX.Element => {

  const [origin, setOrigin] = useState<any>({
    //latitude: 12.1491004,
    latitude: 12.4386289,
    //longitude: -86.2720529,
    longitude: -86.8659041,
  }); 
  const [destination, setDestination] = useState<any>({
    latitude: 11.6912397,
    longitude: -84.4681528,
  });

  async function handleLocationPermission() {
    const { status } = await ExpoLocation.requestForegroundPermissionsAsync()
    if(status !== 'granted') {
      alert('Permiso de acceso a tu ubicación denegado!')
      return;
    }
    let location = await ExpoLocation.getCurrentPositionAsync({});
    const currentLocation: Object = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    }
    setOrigin(currentLocation);
  }

  useEffect(() => {
    handleLocationPermission();
  }, []);

  return(
    <MapView 
      style={styles.container}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        longitudeDelta: 0.04,
        latitudeDelta: 0.09
      }}
    >
      <Marker
        coordinate={origin}
      />
      <Marker
        coordinate={{
          latitude: destination.latitude,
          longitude: destination.longitude,
        }}      
        draggable={true} 
        onDragEnd={
          (direction) => setDestination(
            direction.nativeEvent.coordinate
          )
        }
      />
      <MapViewDirections 
        origin={origin}
        destination={destination}
        apikey={MAP_KEY}
        strokeColor='purple'
        strokeWidth={4}
      />
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});