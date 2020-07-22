import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import { Header, List } from '../../components'
import { DummyDoctor1 } from '../../assets'
import { colors } from '../../utils'
import { Fire } from '../../config'
import {Button} from '../../components/atoms'
import { ButtonBack} from '../../components/molecules'
import Description from './Description.js'
import { ScrollView } from 'react-native-gesture-handler'
import {ButtonSheet} from '../../components/molecules'




const ChooseDoctor = ({navigation, route}) => {
    const itemCategory = route.params
    const refRBSheet = useRef();
    return (
        <View>
            <ScrollView>
                <View style={styles.page} >
                    <Image  resizeMode="cover" style={styles.image} source={itemCategory.image}/>
                    <View style={{width: '100%', 
                    height: '100%', 
                    position: 'absolute', 
                    top: 0, left: 0, 
                    backgroundColor: 'black', 
                    opacity: 0.3}}/>
                    <ButtonBack 
                    type='icon-only' 
                    icon='back-dark' 
                    onPress={() => navigation.goBack()}
                    />
                    <View style={styles.category}>
                        <Description itemCategory={itemCategory}/>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.onRow}>
              <View style={styles.action}>
                <Button title="Beli" onPress={() => refRBSheet.current.open()} />
                <ButtonSheet refRBSheet={refRBSheet} />
              </View>
              <View style={styles.keranjang}>
                <Button title="Tambah Keranjang"/>
              </View>
              <View style={styles.message}>
                <Button title="mes"/>
              </View>
            </View>
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
        position: 'relative'
    },
    image: {
        height: 500, 
        width: 'auto',
        position: 'relative'
    },
    category: {
        height: '100%',
        marginTop: -20,
        marginBottom: 60,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    onRow: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 5

    },
    action: {
        marginLeft: 10,
        width: 110,
        height: 80
      },
    keranjang: {
      marginLeft: 10,
      width: 210,
      height: 80
    },
    message: {
      marginLeft: 10,
      width: 50,
      height: 80
    }
})
