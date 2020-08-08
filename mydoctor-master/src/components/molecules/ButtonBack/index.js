import React from 'react'
import {Button} from '../../atoms'
import { View, TouchableOpacity } from 'react-native'

const ButtonBack = ({icon, onPress, type, color}) => {
    return (
        <TouchableOpacity style={{position: 'absolute', marginTop: 30, marginLeft: 15, elevation: 10}} onPress={onPress}>
            <View style={{
                backgroundColor: color, 
                position: 'relative',
                height: 40, 
                width: 40, 
                borderRadius: 100,
                }}>
           </View>
            <View style={{
                position: 'absolute',
                marginTop: 12,
                marginLeft: 10
            }}>
            <Button type={type} icon={icon} onPress={onPress} />
            </View>
        </TouchableOpacity>        
    ) 
}

export default ButtonBack