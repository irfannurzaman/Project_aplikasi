import React from 'react'
import {Button} from '../../atoms'
import { View, TouchableOpacity } from 'react-native'

const ButtonBack = ({icon, onPress, type}) => {
    return (
        <TouchableOpacity style={{position: 'absolute', marginTop: 30, marginLeft: 15}} onPress={onPress}>
            <View style={{
                backgroundColor: 'white', 
                position: 'relative',
                height: 40, 
                width: 40, 
                borderRadius: 100,
                opacity: 0.6
                }}>
           </View>
            <View style={{
                position: 'absolute',
                marginTop: 8,
                marginLeft: 8
            }}>
            <Button type={type} icon={icon} onPress={onPress} />
            </View>
        </TouchableOpacity>        
    ) 
}

export default ButtonBack