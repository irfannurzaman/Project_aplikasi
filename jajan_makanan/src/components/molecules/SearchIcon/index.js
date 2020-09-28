import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {IconSearch} from '../../../assets';
import { useScreenDimensions } from '../../index'

const SearchIcon = ({navigation, auto, sort}) => {
  const screenData = useScreenDimensions()
  console.log('sukses1', screenData.width /2)
  const onFocusChange = () => {
    <TouchableOpacity onPress={navigation.navigate('MyModalSearch')} />;
  };
  return (
    <View style={styles.searchBar(auto, screenData)}>
      {!auto ? (
        <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>
          <TextInput
            placeholder="What do you want to eat?"
            onFocus={onFocusChange}
            style={{
              marginHorizontal: 10,
              position: 'relative',
              height: 50,
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
                width:  20,
                height: 20,
                marginHorizontal: 10,
              }}
            />
          </View>
        </View>
      ) : (
        <View  style={{width: '100%', height: '100%', justifyContent: 'center'}}>
          <TextInput
            placeholder="What do you want to eat?"
            autoFocus={sort ? false : true}
            style={{
              marginHorizontal: 10,
              position: 'relative',
              height: 50,
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
                width: 20,
                height: 20,
                marginHorizontal: 10,
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default SearchIcon;

const styles = StyleSheet.create({
  searchBar: (auto, screenData) => ({
    backgroundColor: 'white',
    height: auto ?40 : screenData. isLandscape? screenData.width/10:  screenData.width /11,
    width: auto? 300 : screenData.width /1.2,
    marginHorizontal: 20,
    position: 'absolute',
    borderRadius: 20,
    bottom: auto ? 0 : 15,
    elevation: auto ? 0 : 2,
    borderWidth: 1,
    borderColor: '#dadbd9'
  }),
});
