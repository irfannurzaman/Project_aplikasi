import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'
import { ILNullPhoto } from '../../../assets'

const DarkProfile = ({onPress, title, desc, photo, navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{right: 20}}>
                <Button type="icon-only" icon="back-dark" onPress={() => navigation.goBack()} />
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('DoctorProfile')}>
            <Image style={{height: 40, width: 40, marginRight: 10}} source={ILNullPhoto} />
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.name}>Irfan Nurzaman</Text>
                <Text style={styles.desc}>Sedang mengetik</Text>
            </View>
        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingVertical: 20,
        paddingLeft: 30,
        paddingRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#807e78'
    },
    content:{
        flex: 1
    },
    avatar: {
        height: 46,
        width: 46,
        borderRadius: 46/2
    },
    // name: {
    //     fontSize: 20,
    //     fontFamily: fonts.primary[600],
    //     color: colors.primary,
    //     textAlign: 'center'
    // },
    // desc: {
    //     fontSize: 14,
    //     fontFamily: fonts.primary.normal,
    //     marginTop: 6,
    //     textAlign: 'center',
    //     color: colors.text.subTitle
    // }
})
