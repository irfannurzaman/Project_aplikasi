import React, {useState, useRef } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { colors } from '../../utils'
import { ButtonBack, Button,ButtonSheet } from '../../components'
import Description from './Description.js'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {IconMessage_icon, IcMaps} from '../../assets'




const ChooseDoctor = ({navigation, route}) => {
    const [state, setState] = useState()

    const itemCategory = route.params
    const refRBSheet = useRef();
    return (
        <View style={{flex: 1, backgroundColor: 'red'}}>
            <View style={styles.page} >
                <Image  resizeMode="cover" style={styles.image} source={itemCategory.image}/>
                    <View style={{
                    width: '100%', 
                    height: '100%',  
                    position: 'absolute', 
                    top: 0, left: 0, 
                    backgroundColor: 'black', 
                    opacity: 0.3}}
                    />
                    <ButtonBack 
                    type='icon-only' 
                    icon='back-dark' 
                    onPress={() => navigation.goBack()}
                    />
                    {/* <View style={styles.category}>
                        <Description navigation={navigation} itemCategory={itemCategory}/>
                    </View> */}
            </View>
            <View style={styles.onRow}>
              <View style={styles.message}>
                <TouchableOpacity onPress={() => navigation.navigate('Chatting')} >
                    <Image style={{height: 50, width: 50, marginTop: 5}} source={IcMaps}/>
                </TouchableOpacity>
              </View>
              <View style={styles.keranjang}>
                <Button title="Beli" onPress={() => {refRBSheet.current.open(), setState('Beli')}} />
              </View>
              <View style={styles.message}>
                <TouchableOpacity onPress={() => navigation.navigate('Chatting')} >
                    <Image style={{height: 30, width: 30, marginTop: 5}} source={IconMessage_icon}/>
                </TouchableOpacity>
              </View>
              <ButtonSheet refRBSheet={refRBSheet} itemCategory={itemCategory} titleButton={state} />
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
        height: 700, 
        width: 'auto',
        position: 'relative'
    },
    category: {
        height: '100%',
        marginTop: -20,
        marginBottom: 60,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    onRow: {
        position: 'absolute',
        bottom: 10,
        width: 370,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#272727',
    },
      keranjang: {
        marginLeft: 30,
        width: 130,
        height: 50,
        marginTop: 10,
        right: 10
      },
      message: {
        marginLeft: 10,
        width: 70,
        height: 45,
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
