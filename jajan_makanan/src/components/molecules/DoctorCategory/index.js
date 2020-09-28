import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {useScreenDimensions} from '../../index';

const DoctorCategory = ({category, onPress}) => {
  const screenData = useScreenDimensions();
    return ( 
      <TouchableOpacity style={styles.container(screenData)}
        onPress={onPress}>
        <View style={styles.maps}>
          <Image 
          style={styles.imageCategory(category.text, screenData)}
          source={category.image}/> 
          <Text 
          style={styles.text(category.text)}> 
          {category.text
          } 
          </Text> 
        </View> 
      </TouchableOpacity>
    );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: screenData => ({
    backgroundColor: colors.white,
    alignSelf: 'flex-start',
    marginRight: screenData.width / 29,
    width: screenData.isLandscape ?
      screenData.width / 3.9 :
      screenData.width / 2,
    height: 100,
    borderWidth: 0.1,
    borderColor: '#c7c7c7',
    borderRadius: 5,
    flexDirection: 'row',
  }),
  imageCategory: (type, screenData) => ({
    height: !screenData.isLandscape ?
      type == 'Terdekat' ?
      screenData.height / 13 :
      type == 'Promo' ?
      screenData.height / 18 :
      type == '24 Jam' ?
      screenData.height / 19 :
      screenData.height / 15 :
      type == 'Terdekat' ?
      screenData.height / 8 :
      type == 'Promo' ?
      screenData.height / 8 :
      type == '24 Jam' ?
      screenData.height / 8 :
      screenData.height / 7,
    width: !screenData.isLandscape ?
      type == 'Promo' ?
      screenData.width / 11 :
      type == '24 Jam' ?
      screenData.width / 10 :
      screenData.width / 8 :
      type == 'Promo' ?
      screenData.width / 17 :
      type == '24 Jam' ?
      screenData.width / 16 :
      screenData.width / 11,
    marginTop: type == 'Promo' ? 20 : type == '24 Jam' ? 10 : 10,
  }),
  maps: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: type => ({
    fontSize: 15,
    marginBottom: 10,
    marginTop: type == 'Promo' || type == '24 Jam' ? 10 : 0,
  }),
});