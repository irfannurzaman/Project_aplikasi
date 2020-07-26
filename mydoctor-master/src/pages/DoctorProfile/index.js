import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, ProfileItem, Button, Gap } from '../../components'
import { colors } from '../../utils'

const DoctorProfile = ({navigation, route}) => {
    return (
        <View style={styles.page}>
            <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
            <Profile />
            <Gap height={10} />
            <ProfileItem />
            <ProfileItem label="Tempat Praktik"/>
            <ProfileItem label="No. STR" />
            <View style={styles.action}>
                <Button title="Start Consultation" onPress={() => navigation.navigate('Chatting')} />
            </View>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    action: {
        paddingHorizontal: 43,
        paddingTop: 23
    }
})
