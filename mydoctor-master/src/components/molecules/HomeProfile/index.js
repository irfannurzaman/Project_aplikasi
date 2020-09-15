import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { DummyUser, ILNullPhoto } from '../../../assets'
import { fonts, colors, getData } from '../../../utils'


const HomeProfile = ({onPress, profile}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={profile.photo} style={styles.avatar} />
        <View>
            <Text style={styles.name}>{profile.fullName}</Text>
            <Text style={styles.profession}>{profile.profession}</Text>
        </View>
    </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginRight: '-13%'
    },
    avatar: {
        width: 40,
        height: '100%',
        borderRadius: 46 / 2,
        marginRight: 12
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        textTransform: 'capitalize'
    },
    profession: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        textTransform: 'capitalize'
    }
})
