import React from 'react';
import {View, TextInput, StyleSheet, Image, Text} from 'react-native';
import {SearchIcon, ButtonBack} from '../index';

const Search = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
    <View
      style={{
        height: 100,
        width: '100%',
        flexDirection: 'row'
      }}>
    <View style={{width: 60}}>
      <ButtonBack
        type="icon-only"
        icon="back-dark"
        onPress={() => navigation.goBack()}
      />
    </View>
    <View style={{height: 75, width: 250, marginLeft: -10}}>
      <SearchIcon auto={true} />
    </View>
    </View>
    <View style={{width: 'auto', marginHorizontal: 30}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Terakhir Di Cari</Text>
    </View>
    </View>
  );
};

export default Search;
