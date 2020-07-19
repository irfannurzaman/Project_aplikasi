import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, List } from '../../components'
import { DummyDoctor1 } from '../../assets'
import { colors } from '../../utils'
import { Fire } from '../../config'

const ChooseDoctor = ({navigation, route}) => {
    const [listDoctor, setListDoctor] = useState([])
    const itemCategory = route.params

    useEffect(() => {
        callDoctorByCategory(itemCategory.category)
    }, [itemCategory.category])

    const callDoctorByCategory = (category) => {
        Fire.database()
            .ref('doctors/')
            .orderByChild('category')
            .equalTo(category)
            .once('value')
            .then(res => {
                if (res.val()) {
                    const oldData = res.val() 
                    const data = []
                    Object.keys(oldData).map(key => {
                         data.push({
                             id: key,
                             data: oldData[key]
                         })
                     })
                    setListDoctor(data)  
                 }
            })
    }

    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} title={`Pilih ${itemCategory.category}`} type="dark" />
            {listDoctor.map(doctor => {
                return <List key={doctor.id} onPress={() => navigation.navigate('DoctorProfile', doctor)} type="next" profile={{uri: doctor.data.photo }} name={doctor.data.fullName} desc={doctor.data.gender} />
            })}
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    }
})
