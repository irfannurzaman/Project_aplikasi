import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { Fire } from '../../config'
import { colors, fonts, showError, getData } from '../../utils'
import {ILNullPhoto, ILkopi} from '../../assets'

const Doctor = ({navigation}) => {
    const [news, setNews] = useState([])
    const [categoryDoctor, setCategoryDoctor] = useState([])
    const [doctors, setDoctors] = useState([])
    const [profile, setProfile] = useState({
        photo: ILNullPhoto,
        fullName: '',
        profession: '',
    })

    useEffect(() => {
        getNews()
        getTopRatedDoctor()
        getCategoryDoctor()
        navigation.addListener('focus', () => {
            getUserData();
        });
    }, [navigation])

    const getTopRatedDoctor = () => {
        Fire.database()
            .ref('doctors/')
            .orderByChild('rate')
            .limitToLast(3)
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
                   setDoctors(data)  
                }
            })
            .catch(err => {
                showError(err.message)
            })
    }

    const getCategoryDoctor = () => {
        const data = [
            {
            id: 1,
            category: 'Masakan Padang Asam Pedes Manis',
            price: '15.000',
            image: ILkopi
        },
        {
            id: 2,
            category: 'Kapal Api Desa Kebanggan',
            price: '10.000',
            image: ''
        },
        {
            id: 3,
            category: 'Bakso BalungaN',
            price: '9.000',
            image: ''
        },
        {
            id: 4,
            category: 'Jus Tomat',
            price: '5.000',
            image: ''
        },
        {
            id: 5,
            category: 'Seblak',
            price: '20.000',
            image: ''
            },
        ]
        setCategoryDoctor(data)
    }

    const getNews = () => {
        Fire.database()
            .ref('news/')
            .once('value')
            .then(res => {
                if (res.val()) {
                    const data = res.val()
                    const filterData = data.filter(el => el !== null)
                    setNews(filterData)
                }
            })
            .catch(err => {
                showError(err.message)
            })
    }

    const getUserData = () => {
        getData('user').then(res => {
          const data = res;
          data.photo = res.photo.length > 1 ? {uri: res.photo} : ILNullPhoto;
          setProfile(res)
        })
    }

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapperSection}>
                        {/* <Gap height={30} /> */}
                        {/* <Text style={styles.welcome}>Mau konsultasi dengan siapa h
                        ?</Text> */}
                        <View style={{marginTop: 40}}>
                        <HomeProfile profile={profile} onPress={() => navigation.navigate('UserProfile', profile)} />
                        </View>
                    </View>
                    <View style={styles.wrapperOvo}>
                    </View>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                <Gap width={32} />
                                {
                                    categoryDoctor.map(item => {
                                        return <DoctorCategory 
                                        key={item.id} 
                                        category={item}
                                        onPress={() => navigation.navigate('ChooseDoctor', item)} 
                                        />
                                    })
                                }
                                <Gap width={22} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.wrapperSection1}>
                        <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
                        {doctors.map(doctor => {
                            return <RatedDoctor 
                            key={doctor.id} 
                            name={doctor.data.fullName} 
                            desc={doctor.data.profession} 
                            avatar={{uri: doctor.data.photo}} 
                            onPress={() => navigation.navigate('DoctorProfile', doctor)} />
                        })}
                        <Text style={styles.sectionLabel}>Good News</Text>
                    </View>
                    { news.map(item => {
                        return <NewsItem key={item.id} title={item.title} date={item.date} image={item.image} />
                    })}
                    <Gap height={30} />
                </ScrollView>
            </View>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1
    },
    content: {
        backgroundColor: '#e4e9eb',
        flex: 1,
        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20
    },
    welcome: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
        maxWidth: 209
    },
    category: {
        flexDirection: 'row'
    },
    wrapperScroll: {
        marginHorizontal: -16,
        marginTop: 20
    },
    sectionLabel: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16
    },
    wrapperSection: {
        paddingHorizontal: 16,
        backgroundColor: colors.button.primary.background,
        height: 140
    },
    wrapperSection1: {
        paddingHorizontal: 16
    },
    wrapperOvo : {
        marginHorizontal: 18,
        height: 100,
        marginTop: -40,
        backgroundColor: colors.white,
        elevation: 4,
        borderRadius: 10
    }
})
