import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Animated,
  TextInput,
} from 'react-native';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors, fonts, showError, getData} from '../../utils';
import {
  ILNullPhoto,
  ILkopi,
  IconSearch,
  Ceker,
  Seblak,
  Bakso,
  PecelLele,
  IcMaps,
  Delivery,
  Sale,
  Jam
} from '../../assets';
import axios from 'axios';

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState([])
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    getCategoryDoctor();
    kategori();
    navigation.addListener('focus', () => {
      getUserData();
    });
  }, [navigation]);

  const getCategoryDoctor = async () => {
    console.log('sukses', 'selalu');
    axios
      .get('http://11f3b5eac1cf.ngrok.io/username')
      .then(res =>
        console.log(
          'sukses:',
          (res.data || []).length + ' characters have been fetched',
        ),
      )
      .catch(err => console.log('err', err));
    const data = [
      {
        id: 1,
        category: 'Kopi Dingin',
        price: '15.000',
        image: ILkopi,
        alamat: 'Desa Kebanggan',
        kec: 'Moga',
      },
      {
        id: 2,
        category: 'Ceker Setan',
        price: '10.000',
        image: Ceker,
        alamat: 'Desa Gendoang',
        kec: 'Moga',
      },
      {
        id: 3,
        category: 'Seblak Ceker',
        price: '9.000',
        image: Seblak,
        alamat: 'Randudongkal',
        kec: 'Randudongkal',
      },
      {
        id: 4,
        category: 'Bakso Lobster',
        price: '50.000',
        image: Bakso,
        alamat: 'Sima',
        kec: 'Moga',
      },
      {
        id: 5,
        category: 'Pecel Lele',
        price: '20.000',
        image: PecelLele,
        alamat: 'MOga',
        kec: 'Moga',
      },
    ];
    setCategoryDoctor(data);
  };

  const kategori = () => {
    const data = [
      {
        image: IcMaps,
        text: 'Terdekat',
      },
      {
        image: Sale,
        text: 'Promo'
      },
      {
        image: Jam,
        text: '24 Jam'
      },
      {
        image: Delivery,
        text: 'Promo Antar'
      },
    ];

    setCategory(data)
  };

  const getUserData = () => {
    getData('user').then(res => {
      const data = res;
      data.photo = res.photo.length > 1 ? {uri: res.photo} : ILNullPhoto;
      setProfile(res);
    });
  };

  const [scroll, setScroll] = useState(new Animated.Value(0));

  const HEADER_MAX_HEIGHT = 200;
  const HEADER_MIN_HEIGHT = 80;
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

  const headerHeight = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  return (
    <View>
      <ScrollView
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: scroll,
              },
            },
          },
        ])}>
        <View style={styles.wrapperSection}>
          <View style={{marginTop: 80, alignItems: 'flex-end'}}>
            <HomeProfile
              profile={profile}
              onPress={() => navigation.navigate('UserProfile', profile)}
            />
          </View>
        </View>
        {/* <View style={styles.wrapperOvo}> */}
        {/* </View> */}
        <View style={styles.wrapperScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.category}>
              <Gap width={32} />
              {category.map(item => {
                return (
                  <DoctorCategory
                    key={item.id}
                    category={item}
                    onPress={() => navigation.navigate('Maps', item)}
                  />
                );
              })}
              <Gap width={22} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.wrapperSection1}>
          {categoryDoctor.map(item => {
            return (
              <RatedDoctor
                item={item}
                onPress={() => navigation.navigate('ChooseDoctor', item)}
              />
            );
          })}
        </View>
        {news.map(item => {
          return (
            <NewsItem
              key={item.id}
              title={item.title}
              date={item.date}
              image={item.image}
            />
          );
        })}
        <Gap height={30} />
      </ScrollView>
      <Animated.View style={[styles.header, {height: headerHeight}]}>
        <View style={styles.bar}>
          <View style={styles.searchBar}>
            <TextInput
              placeholder="What do you want to eat?"
              style={{
                marginHorizontal: 10,
                position: 'relative',
              }}
            />
            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Image
                source={IconSearch}
                style={{
                  width: 25,
                  height: 25,
                  marginHorizontal: 10,
                }}
              />
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: 330,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: 'transparent',
    flex: 1,
  },
  searchBar: {
    backgroundColor: 'white',
    height: 50,
    width: 300,
    marginHorizontal: 20,
    position: 'absolute',
    borderRadius: 20,
    bottom: 5,
    elevation: 2,
    borderWidth: 0.1,
    borderColor: '#dadbd9',
  },
  page: {
    // backgroundColor: colors.secondary,
    // backgroundColor: 'red',
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
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
    maxWidth: 209,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
    marginTop: 20,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  wrapperSection: {
    paddingHorizontal: 0,
    backgroundColor: colors.button.primary.background,
    height: 215,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 15,
  },
  wrapperSection1: {
    marginTop: 15,
  },
  wrapperOvo: {
    marginHorizontal: 18,
    height: 100,
    marginTop: -40,
    backgroundColor: colors.white,
    elevation: 4,
    borderRadius: 10,
  },
});
