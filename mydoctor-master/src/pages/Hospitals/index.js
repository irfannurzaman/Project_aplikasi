import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Animated,
  Dimensions,
} from 'react-native';
import {
  ILHospitalBG,
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
} from '../../assets';
import {fonts, colors, showError} from '../../utils';
import {ButtonBack} from '../../components';
import {Fire} from '../../config';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

var {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: width,
    height: height,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: 'auto',
    overflow: 'hidden',
  },
});

const Hospitals = ({navigation}) => {
  const [region, setRegion] = useState();
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.04121,
        });
      },
      error => alert(error.message),
      {timeout: 20000, maximumAge: 1000},
    );
  }, []);

  const [scroll, setScroll] = useState(new Animated.Value(0));

  const HEADER_MAX_HEIGHT = 70;
  const HEADER_MIN_HEIGHT = 70;
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT + HEADER_MIN_HEIGHT;

  const headerHeight = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });
  return (
    <View style={{backgroundColor: '#ededed', height: '100%', width: '100%'}}>
      <MapView style={styles.map} showsUserLocation={true} region={region} />
      <Animated.View style={[styles.header, {height: headerHeight}]}>
        <View>
          <ButtonBack
            type="icon-only"
            icon="back-dark"
            onPress={() => navigation.goBack()}
          />
        </View>
      </Animated.View>
    </View>
  );
};

export default Hospitals;