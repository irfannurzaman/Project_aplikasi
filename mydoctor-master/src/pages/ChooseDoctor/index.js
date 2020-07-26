import React, {useState, useRef } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { colors } from '../../utils'
import {Button} from '../../components/atoms'
import { ButtonBack} from '../../components/molecules'
import Description from './Description.js'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {ButtonSheet} from '../../components/molecules'
import {IconMessage_icon} from '../../assets'




const ChooseDoctor = ({navigation, route}) => {
    const [state, setState] = useState()

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
                <Button title="Beli" onPress={() => {refRBSheet.current.open(), setState('Beli')}} />
              </View>
              <View style={styles.keranjang}>
                <Button title="Tambah Keranjang" onPress={() => {refRBSheet.current.open(), setState('Tambah Keranjang')}}/>
              </View>
              <View style={styles.message}>
                <TouchableOpacity onPress={() => navigation.navigate('Chatting')} >
                    <Image style={{height: 40, width: 40, marginTop: 5}} source={IconMessage_icon}/>
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
        height: 60,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 5,
        borderWidth:0.5,
        borderBottomColor: '#807e78',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    action: {
        marginLeft: 10,
        width: 110,
        height: 80,
        marginTop: 10
      },
      keranjang: {
        marginLeft: 10,
        width: 210,
        height: 80,
        marginTop: 10
      },
      message: {
        marginLeft: 10,
        width: 50,
        height: 80,
        marginTop: 10
    }
})
