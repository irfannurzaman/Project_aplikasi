import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.maps}>
        <Image
          style={styles.imageCategory(category.text)}
          source={category.image}
        />
        <Text style={styles.text(category.text)}>{category.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignSelf: 'flex-start',
    marginRight: 15,
    width: 200,
    height: 90,
    borderWidth: 0.1,
    borderColor: '#c7c7c7',
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
  },
  imageCategory: type => ({
    height:
      type == 'Terdekat'
        ? 70
        : type == 'Promo'
        ? 40
        : type == '24 Jam'
        ? 40
        : 50,
    width: type == 'Promo' ? 40 : type == '24 Jam' ? 40 : 50,
    marginTop: type == 'Promo' ? 20 : type == '24 Jam' ? 10 : 0,
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
