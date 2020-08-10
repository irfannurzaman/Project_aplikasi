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
  SearchIcon,
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
  Jam,
} from '../../assets';

const Home = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: '',
  });
  const [scroll] = useState(new Animated.Value(0));
  const HEADER_SCROLL_DISTANCE = 200 - 80;
  const headerHeight = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [200, 80],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    getCategoryDoctor();
    kategori();
    navigation.addListener('focus', () => {
      getUserData();
    });
  }, [navigation]);

  const getCategoryDoctor = async () => {
    const data = [
      {
        id: 1,
        category: 'Kopi Dingin',
        price: '15.000',
        image: ILkopi,
        alamat: 'Desa Kebanggan',
        kec: 'Moga',
        distance: '10KM'
      },
      {
        id: 2,
        category: 'Ceker Setan',
        price: '10.000',
        image: Ceker,
        alamat: 'Desa Gendoang',
        kec: 'Moga',
        distance: '4KM'
      },
      {
        id: 3,
        category: 'Seblak Ceker',
        price: '9.000',
        image: Seblak,
        alamat: 'Randudongkal',
        kec: 'Randudongkal',
        distance: '10KM'
      },
      {
        id: 4,
        category: 'Bakso Lobster',
        price: '50.000',
        image: Bakso,
        alamat: 'Sima',
        kec: 'Moga',
        distance: '1KM'
      },
      {
        id: 5,
        category: 'Pecel Lele',
        price: '20.000',
        image: PecelLele,
        alamat: 'MOga',
        kec: 'Moga',
        distance: '6KM'
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
        text: 'Promo',
      },
      {
        image: Jam,
        text: '24 Jam',
      },
      {
        image: Delivery,
        text: 'Promo Antar',
      },
    ];

    setCategory(data);
  };

  const getUserData = () => {
    getData('user').then(res => {
      const data = res;
      data.photo = res.photo.length > 1 ? {uri: res.photo} : ILNullPhoto;
      setProfile(res);
    });
  };

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
                onPress={() => navigation.navigate('ItemsProduct', item)}
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
        <Gap height={70} />
      </ScrollView>
      <Animated.View style={[styles.header, {height: headerHeight}]}>
        <View style={styles.bar(scroll)}>
          <SearchIcon navigation={navigation} auto={false} />
        </View>
      </Animated.View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: 330,
    overflow: 'hidden',
  },
  bar: val => ({
    height: '100%',
    flex: 1,
  }),
  page: {
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
