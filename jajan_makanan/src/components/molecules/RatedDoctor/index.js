import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';

const RatedDoctor = ({onPress, item}) => {
  const [screenData, setScreenData] = useState(Dimensions.get('window'));
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.border(screenData)}>
        <View style={styles.container(screenData)}>
          <Image
            style={{height: '100%', width: '100%', borderRadius: 20}}
            source={item.image}
          />
        </View>
        <View
          style={{
            marginHorizontal: 30,
            marginTop: 10,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#606362',
              }}>
              {item.category}
            </Text>
            <Text
              style={{
                color: '#797d7c',
              }}>
              {`${item.alamat} || ${item.kec}`}
            </Text>
          </View>

          <View style={{alignItems: 'flex-end'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#606362',
              }}>
              {item.price}
            </Text>
            <Text
              style={{
                color: '#797d7c'
              }}>
              {item.distance}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: (screenData) =>  ({
    marginHorizontal: 25,
    height: screenData.height/3.7,
    width: 'auto',
    marginTop: 0,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
  }),
  border: (screenData)  => ({
    width: '100%',
    height: screenData.height/2.4,
    marginTop: 10
  }),
});
