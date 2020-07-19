import React from 'react'
import {Button} from '../../atoms'
import { View } from 'react-native'

const ButtonBack = ({icon, onPress, type}) => {
    return (
        <View style={{
        opacity:3,
        height: 30,            
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        marginTop: 30,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'}}>
            <Button type={type} icon={icon} onPress={onPress} />
        </View>
    ) 
}

export default ButtonBack