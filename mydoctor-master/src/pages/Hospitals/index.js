import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import { ILHospitalBG, DummyHospital1, DummyHospital2, DummyHospital3 } from '../../assets'
import { fonts, colors, showError } from '../../utils'
import { ListHospital } from '../../components'
import { Fire } from '../../config'
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

var { width, height } = Dimensions.get('window')

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
   });


const Hospitals = () => {
    const [region, setRegion] = useState()
    useEffect(() => {
        Geolocation.getCurrentPosition(position => {
            const {latitude, longitude} = position.coords
            setRegion({
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.04121,
            })
        }, error => alert(error.message),
        {timeout: 20000, maximumAge: 1000});
    },[])
    return (
        <MapView
          style={styles.map}
          showsUserLocation={true}
          region={region}
        >
        </MapView>
    )
}

export default Hospitals

// const styles = StyleSheet.create({
//     page: {
//         backgroundColor: colors.secondary,
//         flex: 1
//     },
//     background: {
//         height: 240,
//         paddingTop: 30
//     },
//     content: {
//         backgroundColor: colors.white,
//         borderRadius: 20,
//         flex: 1,
//         marginTop: -30,
//         paddingTop: 14
//     },
//     title: {
//         fontSize: 20,
//         fontFamily: fonts.primary[600],
//         color: colors.white,
//         textAlign: 'center'
//     },
//     desc: {
//         fontSize: 14,
//         fontFamily: fonts.primary[300],
//         color: colors.white,
//         marginTop: 6,
//         textAlign: 'center'
//     }
// })

