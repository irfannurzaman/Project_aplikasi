import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import { IconStar} from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCategory = ({category, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.imageCategory} source={category.image} />
            <View style={styles.viewCategory}>
            <Text style={styles.label}>
                {(category.category.length < 30 ?
            category.category: category.category.substr(0, 30)+'...')}
            </Text>
            <Text style={styles.category}>Rp: {category.price}</Text>
            <View style={styles.rate}>
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
            </View>
            </View>
        </TouchableOpacity>
    )
}

export default DoctorCategory

const styles = StyleSheet.create({
    imageCategory : {
        height: 130, 
        width: 'auto',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    container: {
        // padding: 12,
        backgroundColor: colors.white,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 10,
        width: 130,
        height: 200,
        elevation: 2
    },
    illustration: {
        marginBottom: 28
    },
    label: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.primary,
        
    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
    },
    rate: {
        flexDirection: 'row'
    },
    viewCategory: {
        marginHorizontal: 10
    }
})
