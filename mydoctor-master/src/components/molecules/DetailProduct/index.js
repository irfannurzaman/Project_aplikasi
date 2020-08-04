import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {DrawHorizontal, Button} from '../../atoms';

const DetailProduct = ({itemCategory, titleButton, navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        alignItems: 'center',
      }}>
      <View style={{width: '100%', height: 175, marginTop: 20}}>
        <View
          style={{
            width: 373,
            height: 50,
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>KOPI DINGIN</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Rp: 12.000</Text>
        </View>
        <View style={{width: 373, height: 100, marginHorizontal: 20}}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color:'#12a5b3'}}>Details</Text>
          <Text style={{fontSize: 15, color: '#b0b0b0'}}>Dengan aroma kopi yang wangi akan terasa nikmat, akan ada kepuasan sendiri</Text>
        </View>
      </View>
      <View
        style={{
          height: 150,
          width: '100%',
          backgroundColor: '#f2f2f2',
          borderRadius: 35,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              height: 70,
              width: 200,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View style={styles.buttonCart} />
            <View
              style={{
                marginTop: 20,
                height: 30,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 15}}>20</Text>
            </View>
            <View style={styles.buttonCart} />
          </View>
          <View
            style={{
              height: 70,
              width: 200,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Total : Rp: 12.000</Text>
          </View>
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={{width: 150}}>
            <Button title="Beli Sekarang" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
    borderTopWidth: 0.2,
    borderTopColor: '#838784',
  },
  buttonCart: {
    marginTop: 20,
    height: 30,
    width: 30,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: '#838784',
    backgroundColor: 'white',
  },
});
