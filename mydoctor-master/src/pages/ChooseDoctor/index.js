import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Header, List } from '../../components'
import { DummyDoctor1 } from '../../assets'
import { colors } from '../../utils'
import { Fire } from '../../config'
import {Button} from '../../components/atoms'
import { ButtonBack} from '../../components/molecules'
import Description from './Description.js'

const ChooseDoctor = ({navigation, route}) => {
    const itemCategory = route.params
    return (
        <View style={styles.page} >
            <Image  resizeMode="cover" style={styles.image} source={itemCategory.image}/>
            <ButtonBack 
            type='icon-only' 
            icon='back-light' 
            onPress={() => navigation.goBack()}
            />
            <View style={styles.category}>
                <Description itemCategory={itemCategory}/>
            </View>
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    image: {
        height: 400, 
        width: 'auto',
    },
    category: {
        height: '100%',
        marginTop: -20,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    }
})
