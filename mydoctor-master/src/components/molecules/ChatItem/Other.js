import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { fonts, colors } from '../../../utils'
import { DummyDoctor8 } from '../../../assets'

const Other = ({text, date, photo}) => {
    return (
        <View style={styles.container}>
            <Image source={photo} style={styles.avatar} />
            <View>
                <View style={styles.chatContent}>
                    <Text style={styles.text}>I love You</Text>
                </View>
                <Text style={styles.date}>I love You to</Text>
            </View>
        </View>
    )
}

export default Other

const styles = StyleSheet.create({
    container: {
        // marginBottom: 20,
        // alignItems: 'flex-end',
        // paddingLeft: 16,
        flexDirection: 'row',
        backgroundColor: 'red'
    },
    chatContent: {
        marginTop: 10,
        padding: 20,
        width: 250,
        backgroundColor: colors.primary,
        maxWidth: '80%',
        borderRadius: 10,
        borderBottomLeftRadius: 0
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.white
    },
    date: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 8
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30/2,
        marginRight: 12
    }
})
