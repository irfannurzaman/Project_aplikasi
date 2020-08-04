import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../../utils';
import {PecelLele, Seblak, Bakso, Ceker} from '../../assets';

const PageNews = () => {
  const news = [
    {
      val: 1,
      image: PecelLele,
      title: 'Pecel lele dengan variasi baru, silakan hubungi nomer 08212223344'
    },
    {
        val: 2,
        image: Seblak,
        title: 'ayo bun seblak terbaru, pedas nikmat nya menggoda'
    },
    {
        val: 3,
        image: Bakso,
        title: 'bakso balungan dengan rasa yang nikmat, ini variasi baru lo, gak nyesel kalo gak nyicipin'
    },
    {
        val: 4,
        image: Ceker,
        title: 'ceker setan dengan pedas yang menggila'
    },
  ];

  const [scroll, setScroll] = useState(new Animated.Value(0));

  const HEADER_MAX_HEIGHT = 80;
  const HEADER_MIN_HEIGHT = 80;
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

  const headerHeight = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
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
        ])}
        style={{marginTop: 80}}>
        {news.map(items => (
          <View style={styles.marginOut}>
            <View
              style={{
                height: 270,
                width: 'auto',
                marginHorizontal: 10,
                marginVertical: 10,
                borderRadius: 10,
              }}
            >
            <Image style={{height: '100%', width: '100%'}} source={items.image}/>
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 10}}>
              <TouchableOpacity style={styles.page('buy')}>
                <Text>Buy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.page('comment')}>
                <Text>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.page('share')}>
                <Text>Share</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: 'auto',
                height: 60,
                borderRadius: 10,
                marginHorizontal: 10,
                marginVertical: 10,
              }}>
              <Text style={{marginHorizontal: 10, marginVertical: 5}}>
                {items.title}
              </Text>
            </View>
          </View>
        ))}
        <View style={{marginBottom: 100}}></View>
      </ScrollView>
      <Animated.View style={[styles.header, {height: headerHeight}]}>
        <View style={styles.bar} />
      </Animated.View>
    </View>
  );
};
export default PageNews;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: 'auto',
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: colors.primary,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  marginOut: {
    width: 'auto',
    height: 400,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    elevation: 5,
  },
  page: val => ({
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    height: 30,
    width: val == 'comment' ? 100 : 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }),
});
