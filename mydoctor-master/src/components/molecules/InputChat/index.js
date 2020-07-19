import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const InputChat = ({value, onChangeText, onPress}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Tulis Pesan Untuk Nairobi" value={value} onChangeText={onChangeText} />
            <Button disable={value.length < 1} type="btn-icon-send" onPress={onPress} />
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.disable,
        height: 45,
        padding: 14,
        borderRadius:10,
        flex: 1,
        marginRight: 10,
        fontSize: 14,
        fontFamily: fonts.primary.normal
    },
    container: {
        padding: 16,
        flexDirection: 'row',
        backgroundColor: colors.white
    }
})

