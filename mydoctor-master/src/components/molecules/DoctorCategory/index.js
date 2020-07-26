import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import { IconStar} from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCategory = ({category, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {/* <Image style={styles.imageCategory} source={category.image} />
            <View style={styles.viewCategory}>
            <Text style={styles.label}>
                {(category.category.length < 30 ?
            category.category: category.category.substr(0, 30)+'...')}
            </Text>
            <Text style={styles.category}>Rp: {category.price}</Text>
            </View> */}
        </TouchableOpacity>
    )
}

export default DoctorCategory

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        alignSelf: 'flex-start',
        borderRadius: 5,
        marginRight: 15,
        width: 120,
        height: 50,
        borderWidth: 0.1,
        borderRadius: 50
    },
    imageCategory : {
        height: 130, 
        width: 'auto',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
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
