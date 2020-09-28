import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SearchIcon, ButtonBack} from '../index';
import { Input } from '../../index'

const Search = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ButtonBack
        type="icon-only"
        icon="back-dark"
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 70}}>
           <SearchIcon auto={true} />
        </View>
        <Text style={{marginTop: 15, marginLeft: 20}}>
          Pencarian Terakhir
        </Text>
        </ScrollView> 
      </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
    flex: 1
  },
  title: {
    fontSize: 20,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
