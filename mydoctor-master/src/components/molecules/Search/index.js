import React from 'react';
import {View, Text} from 'react-native';
import {SearchIcon, ButtonBack} from '../index';

const Search = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: '15%',
          width: '100%',
          flexDirection: 'row',
        }}>
        <View style={{width: '15%', marginTop: '1%'}}>
          <ButtonBack
            type="icon-only"
            icon="back-dark"
            onPress={() => navigation.goBack()}
            />
        </View>
        <View style={{height: '75%', marginLeft: -10}}>
            <SearchIcon auto={true} />
        </View>
      </View>
      <View style={{width: 'auto', marginHorizontal: '10%'}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Terakhir Di Cari</Text>
      </View>
    </View>
  );
};

export default Search;
