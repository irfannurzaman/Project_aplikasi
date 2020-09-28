import React, { useEffect, useState } from 'react';
import {  ScrollView, StyleSheet, Image, View, Animated, TextInput,} from 'react-native';
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor, SearchIcon, useScreenDimensions} from '../../components';
import { colors, fonts, showError, getData } from '../../utils';
import {ILNullPhoto,ILkopi,IconSearch,Ceker,Seblak,Bakso,PecelLele,IcMaps,Delivery,Sale,Jam} from '../../assets';

const Home = ({navigation}) => {
  const screenData = useScreenDimensions();
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: '',
  });
  const [scroll] = useState(new Animated.Value(0));
  const HEADER_SCROLL_DISTANCE = screenData.isLandscape ?
    screenData.height / 5 - screenData.height / 5 :
    screenData.height / 10 - screenData.height / 10;
  const headerHeight = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [
      screenData.isLandscape ? screenData.height / 5 : screenData.height / 7.5,
      screenData.isLandscape ? screenData.height / 5 : screenData.height / 10,
    ],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    getCategoryDoctor();
    kategori();
    navigation.addListener('focus', () => {
      getUserData();
    });
  }, [navigation]);

  const getCategoryDoctor = () => {
    const data = [{
        id: 1,
        category: 'Kopi Dingin',
        price: '15.000',
        image: ILkopi,
        alamat: 'Desa Kebanggan',
        kec: 'Moga',
        distance: '10KM',
        discription: 'kopi dengan rasa yang nikmat',
      },
      {
        id: 2,
        category: 'Ceker Setan',
        price: '10.000',
        image: Ceker,
        alamat: 'Desa Gendoang',
        kec: 'Moga',
        distance: '4KM',
        discription: 'Pedas yang menggila',
      },
      {
        id: 3,
        category: 'Seblak Ceker',
        price: '9.000',
        image: Seblak,
        alamat: 'Randudongkal',
        kec: 'Randudongkal',
        distance: '10KM',
        discription: 'Pedas yang menggila',
      },
      {
        id: 4,
        category: 'Bakso Lobster',
        price: '50.000',
        image: Bakso,
        alamat: 'Sima',
        kec: 'Moga',
        distance: '1KM',
        discription: 'Rasa Yang nikmat',
      },
      {
        id: 5,
        category: 'Pecel Lele',
        price: '20.000',
        image: PecelLele,
        alamat: 'MOga',
        kec: 'Moga',
        distance: '6KM',
        discription: 'Lele segar dg varian sambel',
      },
    ];
    setCategoryDoctor(data);
  };

  const kategori = () => {
    const data = [{
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
      data.photo = res.photo.length > 1 ? {
        uri: res.photo
      } : ILNullPhoto;
      setProfile(res);
    });
  };

  const [headerOpacity, setHeaderOpacity] = useState(0); //ini

  const _handleHeaderColor = event => {
    let y = event.nativeEvent.contentOffset.y;

    setHeaderOpacity(y / 80);
  };

  return ( <View>
    <ScrollView 
    onScroll = {
      event => _handleHeaderColor(event)
    } >
    <View style = {
      styles.wrapperSection(screenData)
    } >
    <View style = {
      {
        marginTop: 80,
        marginHorizontal: 20
      }
    } >
    <HomeProfile 
    profile={profile}
    onPress={() => navigation.navigate('UserProfile', profile)}/> 
    </View> 
    </View> 
    <View style={styles.wrapperScroll}>
    <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
    <View style={styles.category}>
    <Gap width = {32}/> 
    {
      category.map(item => {
        return ( <DoctorCategory 
          key = {item.id}
          category = {item}
          onPress = {() => navigation.navigate('PageSort', item)}
          />
        );
      })
    } 
    <Gap width = {22}/> 
    </View> 
    </ScrollView> 
    </View> 
    <View style={styles.wrapperSection1}> 
    {
      categoryDoctor.map(item => {
        return ( <RatedDoctor 
          item = {item}
          onPress = {() => navigation.navigate('ItemsProduct', item)}/>
        );
      })
    } 
    </View> 
    {
      news.map(item => {
        return ( 
        <NewsItem 
        key={item.id}
        title={item.title}
        date={item.date}
        image={item.image}/>
        );
      })
    } 
    <Gap height = {70}/> 
    </ScrollView> 
    <Animated.View 
    style={
      [styles.header, {
        height: headerHeight
      }]
    } >
    <View 
    style={styles.bar(headerOpacity)}>
    <SearchIcon navigation={navigation}
    auto={false}/> 
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
    overflow: 'hidden',
  },
  bar: headerOpacity => ({
    flex: 1,
    backgroundColor: headerOpacity > 1 ? 'white' : 'transparent',
    elevation: headerOpacity > 1 ? 3 : 0,
    alignItems: 'center',
  }),
  page: {
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
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
  wrapperSection: screenData => ({
    paddingHorizontal: 0,
    backgroundColor: colors.button.primary.background,
    height: screenData.isLandscape ?
      screenData.height / 2.7 :
      screenData.height / 4,
    width: '100%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 15,
    justifyContent: 'center',
  }),
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