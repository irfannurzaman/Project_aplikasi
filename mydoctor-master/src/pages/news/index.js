import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {PecelLele, Seblak, Bakso, Ceker} from '../../assets';
import {ButtonAddStatus} from '../../components';

const PageNews = ({navigation}) => {
  const news = [
    {
      val: 1,
      image: PecelLele,
      title:
        'Pecel lele dengan variasi baru, silakan hubungi nomer 08212223344',
      like: true
    },
    {
      val: 2,
      image: Seblak,
      title: 'ayo bun seblak terbaru, pedas nikmat nya menggoda',
      like: false
    },
    {
      val: 3,
      image: Bakso,
      title:
      'bakso balungan dengan rasa yang nikmat, ini variasi baru lo, gak nyesel kalo gak nyicipin',
      like: true
    },
    {
      val: 5,
      title: 'Ya Allah Aku sayang dia',
      like: false
    },
    {
      val: 4,
      image: Ceker,
      title: 'ceker setan dengan pedas yang menggila',
      like: false
    },
    {
      val: 5,
      title: 'Hadfina Syahida',
      like: false
    },
  ];

  const [scroll, setScroll] = useState(new Animated.Value(0));
  const [state, setState] = useState();
  const [height, setHeight] = useState(75);
  const [like, setLike] = useState(false)

  const headerHeight = scroll.interpolate({
    inputRange: [0, height + height],
    outputRange: [height, height],
    extrapolate: 'clamp',
  });
  return (
    <View style={{backgroundColor: '#ededed', height: '100%', width: '100%'}}>
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
        {news.map(items => (
          <View style={styles.marginOut(items)}>
            {items.image ? (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    marginLeft: 20,
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      backgroundColor: 'grey',
                      height: 30,
                      width: 30,
                      borderRadius: 20,
                      marginRight: 10,
                    }}
                  />
                  <View>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                      Irfan Nurzaman
                    </Text>
                    <Text style={{fontSize: 11, color: '#abadb0'}}>9 Agustus 2020</Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 200,
                    width: 'auto',
                    marginHorizontal: 10,
                    marginVertical: 10,
                    borderRadius: 10,
                  }}>
                  <Image
                    style={{height: '100%', width: '100%'}}
                    source={items.image}
                  />
                </View>
                <View
                  style={{
                    width: 'auto',
                    height: 60,
                    borderRadius: 10,
                    marginHorizontal: 10,
                  }}>
                  <Text style={{marginHorizontal: 10, marginVertical: 5}}>
                    {items.title}
                  </Text>
                </View>
                <View style={{flexDirection: 'row', marginHorizontal: 10}}>
                  <TouchableOpacity onPress={() => setLike(true)} style={styles.page('buy', items.like)}>
                    <Text>Like</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.page('comment')}>
                    <Text>Comment</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.page('share')}>
                    <Text>Share</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    marginLeft: 20,
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      backgroundColor: 'grey',
                      height: 30,
                      width: 30,
                      borderRadius: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    Irfan Nurzaman
                  </Text>
                </View>
                <View style={{marginTop: 20, marginHorizontal: 20}}>
                  <Text>{items.title}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 10,
                    marginVertical: 20,
                  }}>
                  <TouchableOpacity style={styles.page('buy')}>
                    <Text>Like</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.page('comment')}>
                    <Text>Comment</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.page('share')}>
                    <Text>Share</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        ))}
        <View style={{marginBottom: 100}} />
      </ScrollView>
      <Animated.View style={[styles.header(height), {height: headerHeight}]}>
        <ButtonAddStatus
          navigation={navigation}
          setState={setState}
          setHeight={setHeight}
        />
      </Animated.View>
    </View>
  );
};
export default PageNews;

const styles = StyleSheet.create({
  header: val => ({
    position: 'absolute',
    right: -5,
    width: val == 700 ? '100%' : 'auto',
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }),
  marginOut: val => ({
    width: 'auto',
    height: val.image ? 380 : 'auto',
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    elevation: 5,
  }),
  page: (val, like) => ({
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    height: 30,
    width: val == 'comment' ? 100 : 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: like ? '#1465de' : 'white'
  }),
});
